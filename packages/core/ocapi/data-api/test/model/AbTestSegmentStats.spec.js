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
    //instance = new DataApi.AbTestSegmentStats();
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

  describe('AbTestSegmentStats', function() {
    it('should create an instance of AbTestSegmentStats', function() {
      // uncomment below and update the code to test AbTestSegmentStats
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be.a(DataApi.AbTestSegmentStats);
    });

    it('should have the property addsToBaskets (base name: "adds_to_baskets")', function() {
      // uncomment below and update the code to test the property addsToBaskets
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageAddsPerBasket (base name: "average_adds_per_basket")', function() {
      // uncomment below and update the code to test the property averageAddsPerBasket
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageAddsPerBasketStdError (base name: "average_adds_per_basket_std_error")', function() {
      // uncomment below and update the code to test the property averageAddsPerBasketStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmount (base name: "average_discount_amount")', function() {
      // uncomment below and update the code to test the property averageDiscountAmount
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmountStdError (base name: "average_discount_amount_std_error")', function() {
      // uncomment below and update the code to test the property averageDiscountAmountStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmountWithCoupon (base name: "average_discount_amount_with_coupon")', function() {
      // uncomment below and update the code to test the property averageDiscountAmountWithCoupon
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmountWithCouponStdError (base name: "average_discount_amount_with_coupon_std_error")', function() {
      // uncomment below and update the code to test the property averageDiscountAmountWithCouponStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmountWithoutCoupon (base name: "average_discount_amount_without_coupon")', function() {
      // uncomment below and update the code to test the property averageDiscountAmountWithoutCoupon
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageDiscountAmountWithoutCouponStdError (base name: "average_discount_amount_without_coupon_std_error")', function() {
      // uncomment below and update the code to test the property averageDiscountAmountWithoutCouponStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageOrderValue (base name: "average_order_value")', function() {
      // uncomment below and update the code to test the property averageOrderValue
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageOrderValueStdError (base name: "average_order_value_std_error")', function() {
      // uncomment below and update the code to test the property averageOrderValueStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageRevenuePerVisit (base name: "average_revenue_per_visit")', function() {
      // uncomment below and update the code to test the property averageRevenuePerVisit
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageRevenuePerVisitStdError (base name: "average_revenue_per_visit_std_error")', function() {
      // uncomment below and update the code to test the property averageRevenuePerVisitStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitsAddedPerBasket (base name: "average_units_added_per_basket")', function() {
      // uncomment below and update the code to test the property averageUnitsAddedPerBasket
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitsAdderPerBasketStdError (base name: "average_units_adder_per_basket_std_error")', function() {
      // uncomment below and update the code to test the property averageUnitsAdderPerBasketStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitsPerOrderStdError (base name: "average_units_per_order_std_error")', function() {
      // uncomment below and update the code to test the property averageUnitsPerOrderStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitsPerVisit (base name: "average_units_per_visit")', function() {
      // uncomment below and update the code to test the property averageUnitsPerVisit
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property averageUnitsPerVisitStdError (base name: "average_units_per_visit_std_error")', function() {
      // uncomment below and update the code to test the property averageUnitsPerVisitStdError
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property basketRate (base name: "basket_rate")', function() {
      // uncomment below and update the code to test the property basketRate
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property baskets (base name: "baskets")', function() {
      // uncomment below and update the code to test the property baskets
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property checkoutRate (base name: "checkout_rate")', function() {
      // uncomment below and update the code to test the property checkoutRate
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property checkouts (base name: "checkouts")', function() {
      // uncomment below and update the code to test the property checkouts
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property conversionRate (base name: "conversion_rate")', function() {
      // uncomment below and update the code to test the property conversionRate
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property discountAmountWithCoupon (base name: "discount_amount_with_coupon")', function() {
      // uncomment below and update the code to test the property discountAmountWithCoupon
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property discountAmountWithoutCoupon (base name: "discount_amount_without_coupon")', function() {
      // uncomment below and update the code to test the property discountAmountWithoutCoupon
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property revenue (base name: "revenue")', function() {
      // uncomment below and update the code to test the property revenue
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property totalDiscountAmount (base name: "total_discount_amount")', function() {
      // uncomment below and update the code to test the property totalDiscountAmount
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property unitsAddedToBaskets (base name: "units_added_to_baskets")', function() {
      // uncomment below and update the code to test the property unitsAddedToBaskets
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property visitors (base name: "visitors")', function() {
      // uncomment below and update the code to test the property visitors
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

    it('should have the property visits (base name: "visits")', function() {
      // uncomment below and update the code to test the property visits
      //var instance = new DataApi.AbTestSegmentStats();
      //expect(instance).to.be();
    });

  });

}));
