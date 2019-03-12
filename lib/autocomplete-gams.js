'use babel'

const _ = require('lodash')
const fuzzaldrin = require('fuzzaldrin')

class GAMSprovider {
	constructor() {
		this.selector = '.source.gams'
		this.suggestionPriority = 2
	}

	getSuggestions(options) {
		const { prefix } = options
    return this.findMatchingSuggestions(prefix)
	}

	findMatchingSuggestions(prefix) {
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

      if (symbol.domain && symbol.domain.length) {
        const domain = symbol.domain.map((domain,i) => {
          if (domain.name === '*') return `$\{${i+j}:"your_set"}`
          return `$\{${i+j}:${domain.name}}`
        })
        snippet = `${snippet}(${domain.join(',')})`
      }

      let type = 'constant'
      if (symbol.type === 'VAR') type = 'variable'
      if (symbol.type === 'EQU') type = 'function'
      if (symbol.type === 'PARAM') type = 'property'

      return {
        "displayText": symbol.name,
        "snippet": snippet,
        "description": symbol.description,
        "leftLabel": symbol.type,
        "type": type
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
