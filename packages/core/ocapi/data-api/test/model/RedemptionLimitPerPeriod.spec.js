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
    //instance = new DataApi.RedemptionLimitPerPeriod();
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

  describe('RedemptionLimitPerPeriod', function() {
    it('should create an instance of RedemptionLimitPerPeriod', function() {
      // uncomment below and update the code to test RedemptionLimitPerPeriod
      //var instance = new DataApi.RedemptionLimitPerPeriod();
      //expect(instance).to.be.a(DataApi.RedemptionLimitPerPeriod);
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new DataApi.RedemptionLimitPerPeriod();
      //expect(instance).to.be();
    });

    it('should have the property redemptionTimeFrame (base name: "redemption_time_frame")', function() {
      // uncomment below and update the code to test the property redemptionTimeFrame
      //var instance = new DataApi.RedemptionLimitPerPeriod();
      //expect(instance).to.be();
    });

  });

}));
