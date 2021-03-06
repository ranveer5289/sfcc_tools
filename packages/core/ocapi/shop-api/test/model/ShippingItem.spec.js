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
    //instance = new ShopApi.ShippingItem();
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

  describe('ShippingItem', function() {
    it('should create an instance of ShippingItem', function() {
      // uncomment below and update the code to test ShippingItem
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be.a(ShopApi.ShippingItem);
    });

    it('should have the property adjustedTax (base name: "adjusted_tax")', function() {
      // uncomment below and update the code to test the property adjustedTax
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property basePrice (base name: "base_price")', function() {
      // uncomment below and update the code to test the property basePrice
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property itemText (base name: "item_text")', function() {
      // uncomment below and update the code to test the property itemText
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property priceAdjustments (base name: "price_adjustments")', function() {
      // uncomment below and update the code to test the property priceAdjustments
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property priceAfterItemDiscount (base name: "price_after_item_discount")', function() {
      // uncomment below and update the code to test the property priceAfterItemDiscount
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property shipmentId (base name: "shipment_id")', function() {
      // uncomment below and update the code to test the property shipmentId
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property taxBasis (base name: "tax_basis")', function() {
      // uncomment below and update the code to test the property taxBasis
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property taxClassId (base name: "tax_class_id")', function() {
      // uncomment below and update the code to test the property taxClassId
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "tax_rate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instance = new ShopApi.ShippingItem();
      //expect(instance).to.be();
    });

  });

}));
