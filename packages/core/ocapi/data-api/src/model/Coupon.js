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
    define(['ApiClient', 'model/CouponSystemCodeConfig', 'model/RedemptionLimits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CouponSystemCodeConfig'), require('./RedemptionLimits'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Coupon = factory(root.DataApi.ApiClient, root.DataApi.CouponSystemCodeConfig, root.DataApi.RedemptionLimits);
  }
}(this, function(ApiClient, CouponSystemCodeConfig, RedemptionLimits) {
  'use strict';



  /**
   * The Coupon model module.
   * @module model/Coupon
   * @version 20.4
   */

  /**
   * Constructs a new <code>Coupon</code>.
   * Document representing a coupon.
   * @alias module:model/Coupon
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Coupon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Coupon} obj Optional instance to populate.
   * @return {module:model/Coupon} The populated <code>Coupon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('coupon_id')) {
        obj['coupon_id'] = ApiClient.convertToType(data['coupon_id'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('exported_code_count')) {
        obj['exported_code_count'] = ApiClient.convertToType(data['exported_code_count'], 'Number');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('redemption_count')) {
        obj['redemption_count'] = ApiClient.convertToType(data['redemption_count'], 'Number');
      }
      if (data.hasOwnProperty('redemption_limits')) {
        obj['redemption_limits'] = RedemptionLimits.constructFromObject(data['redemption_limits']);
      }
      if (data.hasOwnProperty('single_code')) {
        obj['single_code'] = ApiClient.convertToType(data['single_code'], 'String');
      }
      if (data.hasOwnProperty('system_codes_config')) {
        obj['system_codes_config'] = CouponSystemCodeConfig.constructFromObject(data['system_codes_config']);
      }
      if (data.hasOwnProperty('total_codes_count')) {
        obj['total_codes_count'] = ApiClient.convertToType(data['total_codes_count'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the coupon.
   * @member {String} coupon_id
   */
  exports.prototype['coupon_id'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The description of the coupon.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A flag indicating whether the coupon is enabled.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The number of coupon codes attached to the coupon that have been issued (request search only).
   * @member {Number} exported_code_count
   */
  exports.prototype['exported_code_count'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * A link to the coupon.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The number of times the coupon has been redeemed (request search only).
   * @member {Number} redemption_count
   */
  exports.prototype['redemption_count'] = undefined;
  /**
   * @member {module:model/RedemptionLimits} redemption_limits
   */
  exports.prototype['redemption_limits'] = undefined;
  /**
   * Single coupon code, only valid for Single Code type
   * @member {String} single_code
   */
  exports.prototype['single_code'] = undefined;
  /**
   * @member {module:model/CouponSystemCodeConfig} system_codes_config
   */
  exports.prototype['system_codes_config'] = undefined;
  /**
   * The total number of coupon codes associated with this coupon
   * @member {Number} total_codes_count
   */
  exports.prototype['total_codes_count'] = undefined;
  /**
   * The type of the coupon code.
   * @member {module:model/Coupon.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "single_code"
     * @const
     */
    "single_code": "single_code",
    /**
     * value: "multiple_codes"
     * @const
     */
    "multiple_codes": "multiple_codes",
    /**
     * value: "system_codes"
     * @const
     */
    "system_codes": "system_codes"  };


  return exports;
}));


