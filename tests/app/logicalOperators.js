if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/logicalOperators'
], function(answers) {  
  describe("logical operators", function(){ 
    it("should perform a logical and", function() {
      expect(answers.and(false, false)).not.to.be.ok();
      expect(answers.and(true, false)).not.to.be.ok();
      expect(answers.and(true, true)).to.be.ok();
    });
    
    it("should perform a logical or", function() {
      expect(answers.or(true, false)).to.be.ok();
      expect(answers.or(true, true)).to.be.ok();
      expect(answers.or(false, false)).not.to.be.ok();
    });
  });
});