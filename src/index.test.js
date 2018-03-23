var expect = require("chai").expect;
var  countryRegion = require("country-region");
describe("country-name",function(){
    it("should be an object",function(){
        expect(countryRegion("India")).to.be.an('object');
    })
})