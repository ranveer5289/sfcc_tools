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
    instance = new DataApi.ProductOptionValue();
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

  describe('ProductOptionValue', function() {
    it('should create an instance of ProductOptionValue', function() {
      // uncomment below and update the code to test ProductOptionValue
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be.a(DataApi.ProductOptionValue);
    });

    it('should have the property defaultProductOptionValue (base name: "default_product_option_value")', function() {
      // uncomment below and update the code to test the property defaultProductOptionValue
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

    it('should have the property optionPrices (base name: "option_prices")', function() {
      // uncomment below and update the code to test the property optionPrices
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

    it('should have the property skuExtension (base name: "sku_extension")', function() {
      // uncomment below and update the code to test the property skuExtension
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new DataApi.ProductOptionValue();
      //expect(instance).to.be();
    });

  });

}));