var expect = require("chai").expect
  , path = require("path")
  , fs = require("fs")
  , _ = require("lodash")
  , data = require("../data")
  , countryjsToPaypal = require("../index")

describe("Map countryjs state to PayPal", function () {
  describe("Unit tests", function(){
    describe("Data", function(){ 
      it("Should export a 'data' function", function (done) {
        expect(data).to.be.a("function")
        done()
      })

      it("Should contain data for every JSON file in the data directory", function (done) {
        var dataDirectory = path.join(path.dirname(__dirname), "data")
          , dataArray = data()

        fs.readdir(dataDirectory, function(err, files) {
          if (err) {
            done(err)
            return
          }

          var jsonFiles = files.filter(function(file) {
            return file.endsWith(".json")
          })

          jsonFiles.forEach(function(file) {
            var dat   = require(path.join(dataDirectory, file))
              , json  = {} 
            json[dat.country_iso2] = dat.states
            expect(dataArray).to.contain(json)
          })
        })

        done()
      })

      it("Should have ISO2 country codes", function(done){
        var countryCodes  = _.keys(countryjsToPaypal.all())
          , intersection = _.intersection([ "AR", "BR", "CA", "CN", "IN", "ID", "IT", "JP", "MX", "TH", "US" ], countryCodes) 
        expect(intersection.length).to.equal(countryCodes.length)
        done()
      })
    })


    describe("Methods", function(){
      it("Should export a 'find' method", function (done) {
        expect(countryjsToPaypal.find).to.be.a("function")
        done()
      })

      it("Should export a 'all' method", function (done) {
        expect(countryjsToPaypal.all).to.be.a("function")
        done()
      })
    })

    describe("Edge cases", function(){
      it("In absence of a matching PayPal state or province, it should return itself", function(done){
        var state = "Antartica e Islas del Atlantico Sur"
          , obj =  countryjsToPaypal.find("AR", state)
        expect(obj.name).to.equal(state)
        expect(obj.code).to.equal(state)
        done()
      })

      it("In case regional levels are different (IT), it should return null", function(done){
        var state = "Abruzzo"
          , obj =  countryjsToPaypal.find("IT", state)
        expect(obj).to.equal(null)
        done()
      })
    })
  })

  describe("Functional tests", function(){
    it("Should find 'India, Delhi'", function (done) {
      var obj = countryjsToPaypal.find("IN", "Delhi")
      expect(obj).to.be.an("object")
      expect(obj.name).to.equal("National Capital Territory of Delhi")
      expect(obj.code).to.equal("Delhi (NCT)")
      done()
    })

    it("Should find 'Argentina, Capital Federal'", function(done){
      var obj = countryjsToPaypal.find("AR", "Buenos Aires Capital Federal")
      expect(obj).to.be.an("object")
      expect(obj.name).to.equal("Buenos Aires (Ciudad)")
      expect(obj.code).to.equal("CIUDAD AUTÓNOMA DE BUENOS AIRES")
      done()
    })

    it("Should find 'Mexico, Veracruz-Llave'", function(done){
      var obj = countryjsToPaypal.find("MX", "Veracruz-Llave")
      expect(obj).to.be.an("object")
      expect(obj.name).to.equal("Veracruz")
      expect(obj.code).to.equal("VER")
      done()
    })
  })
})
