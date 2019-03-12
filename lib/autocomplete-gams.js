'use babel'

const utils = require('./utils')
const fuzzaldrin = require('fuzzaldrin')

class GAMSprovider {
  constructor() {
    this.selector = '.source.gams'
    this.suggestionPriority = 2
  }

  getSuggestions(options) {
    const { editor, bufferPosition, prefix } = options
    let balanced = this.checkBalanced(editor, bufferPosition)
    return this.findMatchingSuggestions(prefix,balanced)
  }

  checkBalanced(editor, bufferPosition) {
    let line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])
    let balanced = utils.isBalanced(line)
    return balanced
  }

  findMatchingSuggestions(prefix,balanced) {
    // return if no AST provided from linter-gams
    if (!global.gamsView || !global.gamsView.length) return
    // fuzzy find matching symbols from AST
    const matches = fuzzaldrin.filter(global.gamsView, prefix, {'key': 'name', 'maxResults': 5})
    if (!matches.length) return
    // create array of suggestions from the matches
    const matchingSuggestions = matches.map(symbol => {
      let j = 1
      let snippet = symbol.name
      if (symbol.type === 'VAR' || symbol.type === 'EQU') {
        j = 2
        snippet = snippet + '${1:}'
      }

      // don't add domain if inside brackets
      if (symbol.domain && symbol.domain.length && balanced) {
        let k = 0
        const domain = symbol.domain.map((domain,i) => {
          k = i+j
          if (domain.name === '*') return `$\{${i+j}:"your_set"}`
          return `$\{${i+j}:${domain.name}}`
        })
        snippet = `${snippet}(${domain.join(',')})$\{${k+1}:}`
      }

      let type = 'constant'
      if (symbol.type === 'VAR') type = 'variable'
      if (symbol.type === 'EQU') type = 'function'
      if (symbol.type === 'PARAM') type = 'property'

      return {
        'displayText': symbol.name,
        'snippet': snippet,
        'description': symbol.description,
        'leftLabel': symbol.type,
        'type': type
      }
    })

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
      leftLabel: suggestion.leftLabel
    }
  }
}

export default new GAMSprovider()
