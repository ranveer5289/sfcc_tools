/**
 * Shop API
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
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new ShopApi.CustomerProductListItem();
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

  describe('CustomerProductListItem', function() {
    it('should create an instance of CustomerProductListItem', function() {
      // uncomment below and update the code to test CustomerProductListItem
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be.a(ShopApi.CustomerProductListItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property product (base name: "product")', function() {
      // uncomment below and update the code to test the property product
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property productDetailsLink (base name: "product_details_link")', function() {
      // uncomment below and update the code to test the property productDetailsLink
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property purchasedQuantity (base name: "purchased_quantity")', function() {
      // uncomment below and update the code to test the property purchasedQuantity
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ShopApi.CustomerProductListItem();
      //expect(instance).to.be();
    });

  });

}));
