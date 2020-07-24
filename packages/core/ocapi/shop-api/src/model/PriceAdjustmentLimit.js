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
    root.ShopApi.PriceAdjustmentLimit = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PriceAdjustmentLimit model module.
   * @module model/PriceAdjustmentLimit
   * @version 20.8
   */

  /**
   * Constructs a new <code>PriceAdjustmentLimit</code>.
   *   A price adjustment limit specifies the amount of manual adjustment that can be applied by a user at the specified  level.  
   * @alias module:model/PriceAdjustmentLimit
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PriceAdjustmentLimit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PriceAdjustmentLimit} obj Optional instance to populate.
   * @return {module:model/PriceAdjustmentLimit} The populated <code>PriceAdjustmentLimit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('percent')) {
        obj['percent'] = ApiClient.convertToType(data['percent'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The value for the currency or null if no currency value is specified.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Returns the currency of the Price Adjustment Limit or null if not applicable.    Will be null if this is a percent limit only.    Price adjustment limits can be given up to a fixed amount (unit=a currency unit).
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Returns percentage value of the Price Adjustment Limit or null if not applicable.    Will be null if this is a currency limit only.  
   * @member {Number} percent
   */
  exports.prototype['percent'] = undefined;
  /**
   * The Price Adjustment Limit type - ITEM, SHIPPING or ORDER. It identifies the level at which the Price Adjustment  is applicable.
   * @member {module:model/PriceAdjustmentLimit.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "item"
     * @const
     */
    "item": "item",
    /**
     * value: "shipping"
     * @const
     */
    "shipping": "shipping",
    /**
     * value: "order"
     * @const
     */
    "order": "order"  };


  return exports;
}));


