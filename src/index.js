var _ = require("lodash");
var ucfirst = require("ucfirst");
var jsonFilePath = require("./country.json");
module.exports = function(country) {
  let capsCountry = ucfirst(country);
  return _.find(jsonFilePath, function(countryData) {
    return countryData.countryName === country;
  });
};
