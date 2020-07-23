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
    instance = new DataApi.PreferenceValue();
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

  describe('PreferenceValue', function() {
    it('should create an instance of PreferenceValue', function() {
      // uncomment below and update the code to test PreferenceValue
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be.a(DataApi.PreferenceValue);
    });

    it('should have the property attributeDefinition (base name: "attribute_definition")', function() {
      // uncomment below and update the code to test the property attributeDefinition
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "display_name")', function() {
      // uncomment below and update the code to test the property displayName
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

    it('should have the property siteValues (base name: "site_values")', function() {
      // uncomment below and update the code to test the property siteValues
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "value_type")', function() {
      // uncomment below and update the code to test the property valueType
      //var instane = new DataApi.PreferenceValue();
      //expect(instance).to.be();
    });

  });

}));
