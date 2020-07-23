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
    instance = new ShopApi.ProductSearchRefinementValue();
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

  describe('ProductSearchRefinementValue', function() {
    it('should create an instance of ProductSearchRefinementValue', function() {
      // uncomment below and update the code to test ProductSearchRefinementValue
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be.a(ShopApi.ProductSearchRefinementValue);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property hitCount (base name: "hit_count")', function() {
      // uncomment below and update the code to test the property hitCount
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property presentationId (base name: "presentation_id")', function() {
      // uncomment below and update the code to test the property presentationId
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new ShopApi.ProductSearchRefinementValue();
      //expect(instance).to.be();
    });

  });

}));
