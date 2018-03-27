var requireAll  = require("require-all")
  , _           = require("lodash")

module.exports  = function(){
  var files     = requireAll({ "dirname": __dirname,  "filter": /.+\.json$/ })
    , fileKeys  = _.keys(fileKeys)
    , data      = {}
  _.each(files, function(f){ data[f.country_iso2] = f.states })
  return data 
}
