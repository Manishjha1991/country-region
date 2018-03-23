var _ = require('lodash');
var ucfirst = require('ucfirst');
var fs = require("fs");
module.exports = function (country) { 
      let capsCountry=ucfirst(country);
      var countriesJson = JSON.parse(fs.readFileSync("./src/country.json", 'utf8'));
      return _.find(countriesJson, function(o) { return o.countryName ===country});
}
