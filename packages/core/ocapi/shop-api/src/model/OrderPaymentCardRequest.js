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
    root.ShopApi.OrderPaymentCardRequest = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The OrderPaymentCardRequest model module.
   * @module model/OrderPaymentCardRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>OrderPaymentCardRequest</code>.
   * Document representing an order payment card request.
   * @alias module:model/OrderPaymentCardRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OrderPaymentCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPaymentCardRequest} obj Optional instance to populate.
   * @return {module:model/OrderPaymentCardRequest} The populated <code>OrderPaymentCardRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }
      if (data.hasOwnProperty('credit_card_token')) {
        obj['credit_card_token'] = ApiClient.convertToType(data['credit_card_token'], 'String');
      }
      if (data.hasOwnProperty('expiration_month')) {
        obj['expiration_month'] = ApiClient.convertToType(data['expiration_month'], 'Number');
      }
      if (data.hasOwnProperty('expiration_year')) {
        obj['expiration_year'] = ApiClient.convertToType(data['expiration_year'], 'Number');
      }
      if (data.hasOwnProperty('holder')) {
        obj['holder'] = ApiClient.convertToType(data['holder'], 'String');
      }
      if (data.hasOwnProperty('issue_number')) {
        obj['issue_number'] = ApiClient.convertToType(data['issue_number'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('security_code')) {
        obj['security_code'] = ApiClient.convertToType(data['security_code'], 'String');
      }
      if (data.hasOwnProperty('valid_from_month')) {
        obj['valid_from_month'] = ApiClient.convertToType(data['valid_from_month'], 'Number');
      }
      if (data.hasOwnProperty('valid_from_year')) {
        obj['valid_from_year'] = ApiClient.convertToType(data['valid_from_year'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} card_type
   */
  exports.prototype['card_type'] = undefined;
  /**
   * 
   * @member {String} credit_card_token
   */
  exports.prototype['credit_card_token'] = undefined;
  /**
   * 
   * @member {Number} expiration_month
   */
  exports.prototype['expiration_month'] = undefined;
  /**
   * 
   * @member {Number} expiration_year
   */
  exports.prototype['expiration_year'] = undefined;
  /**
   * 
   * @member {String} holder
   */
  exports.prototype['holder'] = undefined;
  /**
   * 
   * @member {String} issue_number
   */
  exports.prototype['issue_number'] = undefined;
  /**
   * 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * The security code for the payment card.
   * @member {String} security_code
   */
  exports.prototype['security_code'] = undefined;
  /**
   * 
   * @member {Number} valid_from_month
   */
  exports.prototype['valid_from_month'] = undefined;
  /**
   * 
   * @member {Number} valid_from_year
   */
  exports.prototype['valid_from_year'] = undefined;



  return exports;
}));


