var _                     = require("lodash")
  , paypalCountryList     = require("../data")()

module.exports            = { 
    "all"                 : function(){ return paypalCountryList }
  , "find"                : function(countryIso2, countryjsState){ 
    var hasMap            = _.includes(["AR", "BR", "CA", "IN", "ID", "IT", "JP", "MX", "TH", "US"], countryIso2)
    if(!hasMap) return countryjsState 

    var countryStates     = paypalCountryList[countryIso2] 
      , state             = _.filter(countryStates, function(countryState){ 
      return countryState.countryjs === countryjsState 
    })

    var defaultValues     = {
        "name"            : countryjsState
      , "code"            : countryjsState
      , "countryjs"       : countryjsState
      }
      , hasNoMatch        = state.length === 0 
      , isItaly           = countryIso2 === "IT"
      , hasState          = state && state[0]
      , hasNoPayPalState  = hasState && (!state[0].name || !state[0].code)
    if( isItaly                     ) return null 
    if(!hasState || hasNoPayPalState) return defaultValues
    return state[0]
  }
}
