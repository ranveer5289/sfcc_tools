/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.4
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApproachingDiscount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApproachingDiscount'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ApproachingDiscountResult = factory(root.ShopApi.ApiClient, root.ShopApi.ApproachingDiscount);
  }
}(this, function(ApiClient, ApproachingDiscount) {
  'use strict';



  /**
   * The ApproachingDiscountResult model module.
   * @module model/ApproachingDiscountResult
   * @version 20.4
   */

  /**
   * Constructs a new <code>ApproachingDiscountResult</code>.
   * A result of a approaching discount request.
   * @alias module:model/ApproachingDiscountResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ApproachingDiscountResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApproachingDiscountResult} obj Optional instance to populate.
   * @return {module:model/ApproachingDiscountResult} The populated <code>ApproachingDiscountResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('approaching_discounts')) {
        obj['approaching_discounts'] = ApiClient.convertToType(data['approaching_discounts'], [ApproachingDiscount]);
      }
    }
    return obj;
  }

  /**
   * Lists approaching discounts.
   * @member {Array.<module:model/ApproachingDiscount>} approaching_discounts
   */
  exports.prototype['approaching_discounts'] = undefined;



  return exports;
}));


