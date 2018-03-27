var _                     = require("lodash")
  , paypalCountryList     = require("../data")()

/*
 * `all()`: Return all data as json 
 */
module.exports.all        = function(){ return paypalCountryList }

/*
 * `Find(country code, state)`: Map dwa countryjs state or province to a paypal one 
 *      given a country code provided as ISO2 and the countryjs's state.
 */
module.exports.find       : function(countryIso2, countryjsState){ 
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
