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
    root.DataApi.CouponMultiCodesRequest = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CouponMultiCodesRequest model module.
   * @module model/CouponMultiCodesRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>CouponMultiCodesRequest</code>.
   * A request object to add and remove coupon codes from a document
   * @alias module:model/CouponMultiCodesRequest
   * @class
   * @param codes {Array.<String>} The list of coupon codes to add or delete
   */
  var exports = function(codes) {
    var _this = this;

    _this['codes'] = codes;
  };

  /**
   * Constructs a <code>CouponMultiCodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CouponMultiCodesRequest} obj Optional instance to populate.
   * @return {module:model/CouponMultiCodesRequest} The populated <code>CouponMultiCodesRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('codes')) {
        obj['codes'] = ApiClient.convertToType(data['codes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The list of coupon codes to add or delete
   * @member {Array.<String>} codes
   */
  exports.prototype['codes'] = undefined;



  return exports;
}));


