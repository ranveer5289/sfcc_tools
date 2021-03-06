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
    define(['ApiClient', 'model/PaymentBankAccount', 'model/PaymentCard', 'model/Status'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentBankAccount'), require('./PaymentCard'), require('./Status'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.OrderPaymentInstrument = factory(root.ShopApi.ApiClient, root.ShopApi.PaymentBankAccount, root.ShopApi.PaymentCard, root.ShopApi.Status);
  }
}(this, function(ApiClient, PaymentBankAccount, PaymentCard, Status) {
  'use strict';



  /**
   * The OrderPaymentInstrument model module.
   * @module model/OrderPaymentInstrument
   * @version 20.4
   */

  /**
   * Constructs a new <code>OrderPaymentInstrument</code>.
   * Document representing an order payment instrument.
   * @alias module:model/OrderPaymentInstrument
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OrderPaymentInstrument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPaymentInstrument} obj Optional instance to populate.
   * @return {module:model/OrderPaymentInstrument} The populated <code>OrderPaymentInstrument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('authorization_status')) {
        obj['authorization_status'] = Status.constructFromObject(data['authorization_status']);
      }
      if (data.hasOwnProperty('bank_routing_number')) {
        obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String');
      }
      if (data.hasOwnProperty('masked_gift_certificate_code')) {
        obj['masked_gift_certificate_code'] = ApiClient.convertToType(data['masked_gift_certificate_code'], 'String');
      }
      if (data.hasOwnProperty('payment_bank_account')) {
        obj['payment_bank_account'] = PaymentBankAccount.constructFromObject(data['payment_bank_account']);
      }
      if (data.hasOwnProperty('payment_card')) {
        obj['payment_card'] = PaymentCard.constructFromObject(data['payment_card']);
      }
      if (data.hasOwnProperty('payment_instrument_id')) {
        obj['payment_instrument_id'] = ApiClient.convertToType(data['payment_instrument_id'], 'String');
      }
      if (data.hasOwnProperty('payment_method_id')) {
        obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The payment transaction amount.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/Status} authorization_status
   */
  exports.prototype['authorization_status'] = undefined;
  /**
   * The bank routing number.
   * @member {String} bank_routing_number
   */
  exports.prototype['bank_routing_number'] = undefined;
  /**
   * The masked gift certificate code.
   * @member {String} masked_gift_certificate_code
   */
  exports.prototype['masked_gift_certificate_code'] = undefined;
  /**
   * @member {module:model/PaymentBankAccount} payment_bank_account
   */
  exports.prototype['payment_bank_account'] = undefined;
  /**
   * @member {module:model/PaymentCard} payment_card
   */
  exports.prototype['payment_card'] = undefined;
  /**
   * The payment instrument ID.
   * @member {String} payment_instrument_id
   */
  exports.prototype['payment_instrument_id'] = undefined;
  /**
   * The payment method id. Optional if a customer payment instrument id is specified.
   * @member {String} payment_method_id
   */
  exports.prototype['payment_method_id'] = undefined;



  return exports;
}));


