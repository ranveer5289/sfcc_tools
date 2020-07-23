/**
 * Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataApi.Promotion();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Promotion', function() {
    it('should create an instance of Promotion', function() {
      // uncomment below and update the code to test Promotion
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be.a(DataApi.Promotion);
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property assignmentInformation (base name: "assignment_information")', function() {
      // uncomment below and update the code to test the property assignmentInformation
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property calloutMsg (base name: "callout_msg")', function() {
      // uncomment below and update the code to test the property calloutMsg
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property disableGloballyExcluded (base name: "disable_globally_excluded")', function() {
      // uncomment below and update the code to test the property disableGloballyExcluded
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property exclusivity (base name: "exclusivity")', function() {
      // uncomment below and update the code to test the property exclusivity
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property promotionClass (base name: "promotion_class")', function() {
      // uncomment below and update the code to test the property promotionClass
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new DataApi.Promotion();
      //expect(instance).to.be();
    });

  });

}));
