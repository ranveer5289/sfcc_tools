/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new DataApi.Promotion();
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
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be.a(DataApi.Promotion);
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property assignmentInformation (base name: "assignment_information")', function() {
      // uncomment below and update the code to test the property assignmentInformation
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property calloutMsg (base name: "callout_msg")', function() {
      // uncomment below and update the code to test the property calloutMsg
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property disableGloballyExcluded (base name: "disable_globally_excluded")', function() {
      // uncomment below and update the code to test the property disableGloballyExcluded
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property exclusivity (base name: "exclusivity")', function() {
      // uncomment below and update the code to test the property exclusivity
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property promotionClass (base name: "promotion_class")', function() {
      // uncomment below and update the code to test the property promotionClass
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new DataApi.Promotion();
      //expect(instance).to.be();
    });

  });

}));
