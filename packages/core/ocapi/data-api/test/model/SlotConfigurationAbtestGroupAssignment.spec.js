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
    //instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
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

  describe('SlotConfigurationAbtestGroupAssignment', function() {
    it('should create an instance of SlotConfigurationAbtestGroupAssignment', function() {
      // uncomment below and update the code to test SlotConfigurationAbtestGroupAssignment
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be.a(DataApi.SlotConfigurationAbtestGroupAssignment);
    });

    it('should have the property abtestDescription (base name: "abtest_description")', function() {
      // uncomment below and update the code to test the property abtestDescription
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

    it('should have the property abtestId (base name: "abtest_id")', function() {
      // uncomment below and update the code to test the property abtestId
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

    it('should have the property segmentDescription (base name: "segment_description")', function() {
      // uncomment below and update the code to test the property segmentDescription
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

    it('should have the property segmentId (base name: "segment_id")', function() {
      // uncomment below and update the code to test the property segmentId
      //var instance = new DataApi.SlotConfigurationAbtestGroupAssignment();
      //expect(instance).to.be();
    });

  });

}));
