/**
 * Data API
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CouponCode = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CouponCode model module.
   * @module model/CouponCode
   * @version 20.4
   */

  /**
   * Constructs a new <code>CouponCode</code>.
   * A coupon code with accompanying stats for redemptions and issued.
   * @alias module:model/CouponCode
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CouponCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CouponCode} obj Optional instance to populate.
   * @return {module:model/CouponCode} The populated <code>CouponCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('issued')) {
        obj['issued'] = ApiClient.convertToType(data['issued'], 'Boolean');
      }
      if (data.hasOwnProperty('redemption_count')) {
        obj['redemption_count'] = ApiClient.convertToType(data['redemption_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The code used to redeem the coupon
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Flag indicating if the coupon code has been issued
   * @member {Boolean} issued
   */
  exports.prototype['issued'] = undefined;
  /**
   * The count of the number of redemptions associated with the code
   * @member {Number} redemption_count
   */
  exports.prototype['redemption_count'] = undefined;



  return exports;
}));


