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
    //instance = new DataApi.CouponCode();
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

  describe('CouponCode', function() {
    it('should create an instance of CouponCode', function() {
      // uncomment below and update the code to test CouponCode
      //var instance = new DataApi.CouponCode();
      //expect(instance).to.be.a(DataApi.CouponCode);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new DataApi.CouponCode();
      //expect(instance).to.be();
    });

    it('should have the property issued (base name: "issued")', function() {
      // uncomment below and update the code to test the property issued
      //var instance = new DataApi.CouponCode();
      //expect(instance).to.be();
    });

    it('should have the property redemptionCount (base name: "redemption_count")', function() {
      // uncomment below and update the code to test the property redemptionCount
      //var instance = new DataApi.CouponCode();
      //expect(instance).to.be();
    });

  });

}));
