/**
 * Shop API
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
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ShopApi.Master();
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

  describe('Master', function() {
    it('should create an instance of Master', function() {
      // uncomment below and update the code to test Master
      //var instane = new ShopApi.Master();
      //expect(instance).to.be.a(ShopApi.Master);
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property masterId (base name: "master_id")', function() {
      // uncomment below and update the code to test the property masterId
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property orderable (base name: "orderable")', function() {
      // uncomment below and update the code to test the property orderable
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property priceMax (base name: "price_max")', function() {
      // uncomment below and update the code to test the property priceMax
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnit (base name: "price_per_unit")', function() {
      // uncomment below and update the code to test the property pricePerUnit
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnitMax (base name: "price_per_unit_max")', function() {
      // uncomment below and update the code to test the property pricePerUnitMax
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

    it('should have the property prices (base name: "prices")', function() {
      // uncomment below and update the code to test the property prices
      //var instane = new ShopApi.Master();
      //expect(instance).to.be();
    });

  });

}));
