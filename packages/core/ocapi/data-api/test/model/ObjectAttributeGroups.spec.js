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
    //instance = new DataApi.ObjectAttributeGroups();
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

  describe('ObjectAttributeGroups', function() {
    it('should create an instance of ObjectAttributeGroups', function() {
      // uncomment below and update the code to test ObjectAttributeGroups
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be.a(DataApi.ObjectAttributeGroups);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property expand (base name: "expand")', function() {
      // uncomment below and update the code to test the property expand
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property next (base name: "next")', function() {
      // uncomment below and update the code to test the property next
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property previous (base name: "previous")', function() {
      // uncomment below and update the code to test the property previous
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property select (base name: "select")', function() {
      // uncomment below and update the code to test the property select
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new DataApi.ObjectAttributeGroups();
      //expect(instance).to.be();
    });

  });

}));
