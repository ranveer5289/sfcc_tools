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
    instance = new DataApi.AlertDescriptorSettings();
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

  describe('AlertDescriptorSettings', function() {
    it('should create an instance of AlertDescriptorSettings', function() {
      // uncomment below and update the code to test AlertDescriptorSettings
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be.a(DataApi.AlertDescriptorSettings);
    });

    it('should have the property applicationContextPath (base name: "application_context_path")', function() {
      // uncomment below and update the code to test the property applicationContextPath
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property applicationId (base name: "application_id")', function() {
      // uncomment below and update the code to test the property applicationId
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property isUserOverride (base name: "is_user_override")', function() {
      // uncomment below and update the code to test the property isUserOverride
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property showInHeader (base name: "show_in_header")', function() {
      // uncomment below and update the code to test the property showInHeader
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

    it('should have the property showOnHomepage (base name: "show_on_homepage")', function() {
      // uncomment below and update the code to test the property showOnHomepage
      //var instane = new DataApi.AlertDescriptorSettings();
      //expect(instance).to.be();
    });

  });

}));