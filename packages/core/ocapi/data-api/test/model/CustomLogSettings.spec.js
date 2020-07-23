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
    instance = new DataApi.CustomLogSettings();
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

  describe('CustomLogSettings', function() {
    it('should create an instance of CustomLogSettings', function() {
      // uncomment below and update the code to test CustomLogSettings
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be.a(DataApi.CustomLogSettings);
    });

    it('should have the property debugPermitted (base name: "debug_permitted")', function() {
      // uncomment below and update the code to test the property debugPermitted
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property debugToFile (base name: "debug_to_file")', function() {
      // uncomment below and update the code to test the property debugToFile
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property emailTo (base name: "email_to")', function() {
      // uncomment below and update the code to test the property emailTo
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property errorToFile (base name: "error_to_file")', function() {
      // uncomment below and update the code to test the property errorToFile
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property fatalToFile (base name: "fatal_to_file")', function() {
      // uncomment below and update the code to test the property fatalToFile
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property infoToFile (base name: "info_to_file")', function() {
      // uncomment below and update the code to test the property infoToFile
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property logCategories (base name: "log_categories")', function() {
      // uncomment below and update the code to test the property logCategories
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property rootLevel (base name: "root_level")', function() {
      // uncomment below and update the code to test the property rootLevel
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

    it('should have the property warnToFile (base name: "warn_to_file")', function() {
      // uncomment below and update the code to test the property warnToFile
      //var instane = new DataApi.CustomLogSettings();
      //expect(instance).to.be();
    });

  });

}));