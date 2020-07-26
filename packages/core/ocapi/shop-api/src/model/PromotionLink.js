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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.PromotionLink = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PromotionLink model module.
   * @module model/PromotionLink
   * @version 20.4
   */

  /**
   * Constructs a new <code>PromotionLink</code>.
   * Document representing a promotion link.
   * @alias module:model/PromotionLink
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PromotionLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionLink} obj Optional instance to populate.
   * @return {module:model/PromotionLink} The populated <code>PromotionLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('c_dontApplyLoyalty')) {
        obj['c_dontApplyLoyalty'] = ApiClient.convertToType(data['c_dontApplyLoyalty'], 'Boolean');
      }
      if (data.hasOwnProperty('callout_msg')) {
        obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('promotion_id')) {
        obj['promotion_id'] = ApiClient.convertToType(data['promotion_id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} c_dontApplyLoyalty
   */
  exports.prototype['c_dontApplyLoyalty'] = undefined;
  /**
   * The localized call-out message of the promotion.
   * @member {String} callout_msg
   */
  exports.prototype['callout_msg'] = undefined;
  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The localized name of the promotion.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The unique id of the promotion.
   * @member {String} promotion_id
   */
  exports.prototype['promotion_id'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


