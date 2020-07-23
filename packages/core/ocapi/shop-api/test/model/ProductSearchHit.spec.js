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
    instance = new ShopApi.ProductSearchHit();
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

  describe('ProductSearchHit', function() {
    it('should create an instance of ProductSearchHit', function() {
      // uncomment below and update the code to test ProductSearchHit
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be.a(ShopApi.ProductSearchHit);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property hitType (base name: "hit_type")', function() {
      // uncomment below and update the code to test the property hitType
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property orderable (base name: "orderable")', function() {
      // uncomment below and update the code to test the property orderable
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property priceMax (base name: "price_max")', function() {
      // uncomment below and update the code to test the property priceMax
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnit (base name: "price_per_unit")', function() {
      // uncomment below and update the code to test the property pricePerUnit
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property pricePerUnitMax (base name: "price_per_unit_max")', function() {
      // uncomment below and update the code to test the property pricePerUnitMax
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property prices (base name: "prices")', function() {
      // uncomment below and update the code to test the property prices
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "product_name")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "product_type")', function() {
      // uncomment below and update the code to test the property productType
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property representedProduct (base name: "represented_product")', function() {
      // uncomment below and update the code to test the property representedProduct
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property representedProducts (base name: "represented_products")', function() {
      // uncomment below and update the code to test the property representedProducts
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

    it('should have the property variationAttributes (base name: "variation_attributes")', function() {
      // uncomment below and update the code to test the property variationAttributes
      //var instane = new ShopApi.ProductSearchHit();
      //expect(instance).to.be();
    });

  });

}));