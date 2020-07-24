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
    define(['ApiClient', 'model/PaymentCardSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentCardSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.PaymentMethod = factory(root.ShopApi.ApiClient, root.ShopApi.PaymentCardSpec);
  }
}(this, function(ApiClient, PaymentCardSpec) {
  'use strict';



  /**
   * The PaymentMethod model module.
   * @module model/PaymentMethod
   * @version 20.8
   */

  /**
   * Constructs a new <code>PaymentMethod</code>.
   * Document representing a payment method.
   * @alias module:model/PaymentMethod
   * @class
   * @param id {String} The id of the payment method or card.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentMethod} obj Optional instance to populate.
   * @return {module:model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cards')) {
        obj['cards'] = ApiClient.convertToType(data['cards'], [PaymentCardSpec]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('payment_processor_id')) {
        obj['payment_processor_id'] = ApiClient.convertToType(data['payment_processor_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The sorted array of payment cards (included only when the system payment method is CREDIT_CARD).
   * @member {Array.<module:model/PaymentCardSpec>} cards
   */
  exports.prototype['cards'] = undefined;
  /**
   * The localized description of the payment method or card.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The id of the payment method or card.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The URL to the image that represents the payment method or card.
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The localized name of the payment method or card.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The payment processor ID.
   * @member {String} payment_processor_id
   */
  exports.prototype['payment_processor_id'] = undefined;



  return exports;
}));


