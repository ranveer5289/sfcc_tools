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
    instance = new ShopApi.BoolQuery();
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

  describe('BoolQuery', function() {
    it('should create an instance of BoolQuery', function() {
      // uncomment below and update the code to test BoolQuery
      //var instane = new ShopApi.BoolQuery();
      //expect(instance).to.be.a(ShopApi.BoolQuery);
    });

    it('should have the property must (base name: "must")', function() {
      // uncomment below and update the code to test the property must
      //var instane = new ShopApi.BoolQuery();
      //expect(instance).to.be();
    });

    it('should have the property mustNot (base name: "must_not")', function() {
      // uncomment below and update the code to test the property mustNot
      //var instane = new ShopApi.BoolQuery();
      //expect(instance).to.be();
    });

    it('should have the property should (base name: "should")', function() {
      // uncomment below and update the code to test the property should
      //var instane = new ShopApi.BoolQuery();
      //expect(instance).to.be();
    });

  });

}));
