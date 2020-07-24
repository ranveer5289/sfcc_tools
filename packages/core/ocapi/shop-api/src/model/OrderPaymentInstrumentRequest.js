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
    define(['ApiClient', 'model/OrderPaymentCardRequest', 'model/PaymentBankAccountRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderPaymentCardRequest'), require('./PaymentBankAccountRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.OrderPaymentInstrumentRequest = factory(root.ShopApi.ApiClient, root.ShopApi.OrderPaymentCardRequest, root.ShopApi.PaymentBankAccountRequest);
  }
}(this, function(ApiClient, OrderPaymentCardRequest, PaymentBankAccountRequest) {
  'use strict';



  /**
   * The OrderPaymentInstrumentRequest model module.
   * @module model/OrderPaymentInstrumentRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>OrderPaymentInstrumentRequest</code>.
   * Document representing an order payment instrument request.
   * @alias module:model/OrderPaymentInstrumentRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>OrderPaymentInstrumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPaymentInstrumentRequest} obj Optional instance to populate.
   * @return {module:model/OrderPaymentInstrumentRequest} The populated <code>OrderPaymentInstrumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('bank_routing_number')) {
        obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String');
      }
      if (data.hasOwnProperty('create_customer_payment_instrument')) {
        obj['create_customer_payment_instrument'] = ApiClient.convertToType(data['create_customer_payment_instrument'], 'Boolean');
      }
      if (data.hasOwnProperty('customer_payment_instrument_id')) {
        obj['customer_payment_instrument_id'] = ApiClient.convertToType(data['customer_payment_instrument_id'], 'String');
      }
      if (data.hasOwnProperty('gift_certificate_code')) {
        obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
      }
      if (data.hasOwnProperty('payment_bank_account')) {
        obj['payment_bank_account'] = PaymentBankAccountRequest.constructFromObject(data['payment_bank_account']);
      }
      if (data.hasOwnProperty('payment_card')) {
        obj['payment_card'] = OrderPaymentCardRequest.constructFromObject(data['payment_card']);
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
   * The bank routing number.
   * @member {String} bank_routing_number
   */
  exports.prototype['bank_routing_number'] = undefined;
  /**
   * A flag indicating whether a related customer payment instrument should be created. The CustomerPaymentInstrument  is only created when the OrderPaymentInstrument was authorized successfully.
   * @member {Boolean} create_customer_payment_instrument
   */
  exports.prototype['create_customer_payment_instrument'] = undefined;
  /**
   * The id of a customer payment instrument.
   * @member {String} customer_payment_instrument_id
   */
  exports.prototype['customer_payment_instrument_id'] = undefined;
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
   * @member {module:model/OrderPaymentCardRequest} payment_card
   */
  exports.prototype['payment_card'] = undefined;
  /**
   * The payment method id. Optional if a customer payment instrument id is specified.
   * @member {String} payment_method_id
   */
  exports.prototype['payment_method_id'] = undefined;



  return exports;
}));


