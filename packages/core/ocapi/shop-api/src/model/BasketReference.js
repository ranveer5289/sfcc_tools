/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
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
    root.ShopApi.BasketReference = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BasketReference model module.
   * @module model/BasketReference
   * @version 20.8
   */

  /**
   * Constructs a new <code>BasketReference</code>.
   * Reference to a basket.
   * @alias module:model/BasketReference
   * @class
   * @param basketId {String} The unique identifier for the basket.
   * @param customerId {String} The unique identifier for the customer.
   */
  var exports = function(basketId, customerId) {
    var _this = this;

    _this['basket_id'] = basketId;
    _this['customer_id'] = customerId;
  };

  /**
   * Constructs a <code>BasketReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasketReference} obj Optional instance to populate.
   * @return {module:model/BasketReference} The populated <code>BasketReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('basket_id')) {
        obj['basket_id'] = ApiClient.convertToType(data['basket_id'], 'String');
      }
      if (data.hasOwnProperty('customer_id')) {
        obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier for the basket.
   * @member {String} basket_id
   */
  exports.prototype['basket_id'] = undefined;
  /**
   * The unique identifier for the customer.
   * @member {String} customer_id
   */
  exports.prototype['customer_id'] = undefined;



  return exports;
}));


