'use babel'

import autoCompleteGams from './autocomplete-gams'

export default {
  getProvider() {
    // return a single provider, or an array of providers to use together
    return autoCompleteGams
  }
}
