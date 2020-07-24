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
    define(['ApiClient', 'model/CustomerPaymentCardRequest', 'model/PaymentBankAccountRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerPaymentCardRequest'), require('./PaymentBankAccountRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.CustomerPaymentInstrumentRequest = factory(root.ShopApi.ApiClient, root.ShopApi.CustomerPaymentCardRequest, root.ShopApi.PaymentBankAccountRequest);
  }
}(this, function(ApiClient, CustomerPaymentCardRequest, PaymentBankAccountRequest) {
  'use strict';



  /**
   * The CustomerPaymentInstrumentRequest model module.
   * @module model/CustomerPaymentInstrumentRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>CustomerPaymentInstrumentRequest</code>.
   * Document representing a customer payment instrument request.
   * @alias module:model/CustomerPaymentInstrumentRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerPaymentInstrumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerPaymentInstrumentRequest} obj Optional instance to populate.
   * @return {module:model/CustomerPaymentInstrumentRequest} The populated <code>CustomerPaymentInstrumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bank_routing_number')) {
        obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String');
      }
      if (data.hasOwnProperty('gift_certificate_code')) {
        obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
      }
      if (data.hasOwnProperty('payment_bank_account')) {
        obj['payment_bank_account'] = PaymentBankAccountRequest.constructFromObject(data['payment_bank_account']);
      }
      if (data.hasOwnProperty('payment_card')) {
        obj['payment_card'] = CustomerPaymentCardRequest.constructFromObject(data['payment_card']);
      }
      if (data.hasOwnProperty('payment_method_id')) {
        obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The bank routing number.
   * @member {String} bank_routing_number
   */
  exports.prototype['bank_routing_number'] = undefined;
  /**
   * The gift certificate code.
   * @member {String} gift_certificate_code
   */
  exports.prototype['gift_certificate_code'] = undefined;
  /**
   * @member {module:model/PaymentBankAccountRequest} payment_bank_account
   */
  exports.prototype['payment_bank_account'] = undefined;
  /**
   * @member {module:model/CustomerPaymentCardRequest} payment_card
   */
  exports.prototype['payment_card'] = undefined;
  /**
   * The payment method id. Optional if a customer payment instrument id is specified.
   * @member {String} payment_method_id
   */
  exports.prototype['payment_method_id'] = undefined;



  return exports;
}));


