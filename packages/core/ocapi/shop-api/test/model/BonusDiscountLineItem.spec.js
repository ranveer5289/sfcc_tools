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
    instance = new ShopApi.BonusDiscountLineItem();
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

  describe('BonusDiscountLineItem', function() {
    it('should create an instance of BonusDiscountLineItem', function() {
      // uncomment below and update the code to test BonusDiscountLineItem
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be.a(ShopApi.BonusDiscountLineItem);
    });

    it('should have the property bonusProducts (base name: "bonus_products")', function() {
      // uncomment below and update the code to test the property bonusProducts
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be();
    });

    it('should have the property couponCode (base name: "coupon_code")', function() {
      // uncomment below and update the code to test the property couponCode
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be();
    });

    it('should have the property maxBonusItems (base name: "max_bonus_items")', function() {
      // uncomment below and update the code to test the property maxBonusItems
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be();
    });

    it('should have the property promotionId (base name: "promotion_id")', function() {
      // uncomment below and update the code to test the property promotionId
      //var instane = new ShopApi.BonusDiscountLineItem();
      //expect(instance).to.be();
    });

  });

}));
