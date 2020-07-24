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
    define(['ApiClient', 'model/PaymentBankAccount', 'model/PaymentCard'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentBankAccount'), require('./PaymentCard'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.CustomerPaymentInstrument = factory(root.ShopApi.ApiClient, root.ShopApi.PaymentBankAccount, root.ShopApi.PaymentCard);
  }
}(this, function(ApiClient, PaymentBankAccount, PaymentCard) {
  'use strict';



  /**
   * The CustomerPaymentInstrument model module.
   * @module model/CustomerPaymentInstrument
   * @version 20.8
   */

  /**
   * Constructs a new <code>CustomerPaymentInstrument</code>.
   * Document representing a customer payment instrument.
   * @alias module:model/CustomerPaymentInstrument
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerPaymentInstrument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerPaymentInstrument} obj Optional instance to populate.
   * @return {module:model/CustomerPaymentInstrument} The populated <code>CustomerPaymentInstrument</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bank_routing_number')) {
        obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
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
   * The bank routing number.
   * @member {String} bank_routing_number
   */
  exports.prototype['bank_routing_number'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
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


