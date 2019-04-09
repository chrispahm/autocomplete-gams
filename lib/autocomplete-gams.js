'use babel'

const utils = require('./utils')
const functions = require('../data/functions')
const fuzzaldrin = require('fuzzaldrin')

class GAMSprovider {
  constructor() {
    this.selector = '.source.gams'
    this.suggestionPriority = 2
  }

  getSuggestions(options) {
    const { prefix } = options
    // let balanced = this.checkBalanced(editor, bufferPosition)
    if (prefix && prefix.length > 2 && prefix.trim().length > 2) {
      return this.findMatchingSuggestions(prefix)
    }
  }

  checkBalanced(editor, bufferPosition) {
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    let balanced = utils.isBalanced(line)
    return balanced
  }

  findModelSuggestions(prefix) {
    // return if no AST provided from linter-gams
    if (!global.gamsView || !global.gamsView.length) return []
    const matches = fuzzaldrin.filter(global.gamsView, prefix, {'key': 'name', 'maxResults': 5})
    if (!matches.length) return []

    let matchingSuggestions = []

    matches.forEach(symbol => {
      let j = 1
      let snippet = symbol.name
      if (symbol.type === 'VAR' || symbol.type === 'EQU') {
        j = 2
        snippet = snippet + '${1:}'
      }

      let type = 'constant'
      if (symbol.type === 'VAR') type = 'variable'
      if (symbol.type === 'EQU') type = 'method'
      if (symbol.type === 'PARAM') type = 'property'

      let suggestion = {
        'name': symbol.name,
        'displayText': symbol.name,
        'snippet': snippet,
        'description': symbol.description,
        'leftLabel': symbol.type,
        'type': type
      }

      matchingSuggestions.push(suggestion)

      // add second suggestion including the domain if available
      if (symbol.domain && symbol.domain.length) {
        let bracketSnippet = snippet
        let k = 0
        const domain = symbol.domain.map((domain,i) => {
          k = i+j
          if (domain.name === '*') return `$\{${i+j}:"set_element"}`
          return `$\{${i+j}:${domain.name}}`
        })

        const domainName = symbol.domain.map((domain) => {
          return domain.name
        }).join(',')

        bracketSnippet = `${snippet}(${domain.join(',')})$\{${k+1}:}`

        let bracketSuggestion = {
          'name': symbol.name,
          'displayText': `${symbol.name}(${domainName})`,
          'snippet': bracketSnippet,
          'description': symbol.description,
          'leftLabel': symbol.type,
          'type': type
        }
        matchingSuggestions.push(bracketSuggestion)
      }
    })

    return matchingSuggestions
  }

  findMatchingSuggestions(prefix,balanced) {
    // get suggestions from model
    let matchingModelSuggestions = this.findModelSuggestions(prefix,balanced)

    // add all suggestions from general GAMS functions
    let suggestions = matchingModelSuggestions.concat(functions)
    //let functionSuggestions = fuzzaldrin.filter(functions, prefix, {'key': 'name', 'maxResults': 2})

    //let matchingSuggestions = matchingModelSuggestions.concat(functionSuggestions)
    let matchingSuggestions = fuzzaldrin.filter(suggestions, prefix, {'key': 'name'})
    let inflateSuggestion = this.inflateSuggestion.bind(this, prefix)
    let inflatedSuggestions = matchingSuggestions.map(inflateSuggestion)

    return inflatedSuggestions
  }

  inflateSuggestion(replacementPrefix, suggestion) {
    return {
      displayText: suggestion.displayText,
      snippet: suggestion.snippet,
      description: suggestion.description,
      replacementPrefix: replacementPrefix, // ensures entire prefix is replaced
      type: suggestion.type,
      leftLabel: suggestion.leftLabel,
      descriptionMoreURL: suggestion.descriptionMoreURL ? suggestion.descriptionMoreURL : null
    }
  }
}

export default new GAMSprovider()
