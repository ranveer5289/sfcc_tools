/**
 * Data API
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
    define(['ApiClient', 'model/AccountTransaction', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountTransaction'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.GiftCertificate = factory(root.DataApi.ApiClient, root.DataApi.AccountTransaction, root.DataApi.Money);
  }
}(this, function(ApiClient, AccountTransaction, Money) {
  'use strict';



  /**
   * The GiftCertificate model module.
   * @module model/GiftCertificate
   * @version 20.8
   */

  /**
   * Constructs a new <code>GiftCertificate</code>.
   * Document representing a gift certificate
   * @alias module:model/GiftCertificate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GiftCertificate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GiftCertificate} obj Optional instance to populate.
   * @return {module:model/GiftCertificate} The populated <code>GiftCertificate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Money.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = Money.constructFromObject(data['balance']);
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
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('masked_gift_certificate_code')) {
        obj['masked_gift_certificate_code'] = ApiClient.convertToType(data['masked_gift_certificate_code'], 'String');
      }
      if (data.hasOwnProperty('merchant_id')) {
        obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('order_no')) {
        obj['order_no'] = ApiClient.convertToType(data['order_no'], 'String');
      }
      if (data.hasOwnProperty('recipient_email')) {
        obj['recipient_email'] = ApiClient.convertToType(data['recipient_email'], 'String');
      }
      if (data.hasOwnProperty('recipient_name')) {
        obj['recipient_name'] = ApiClient.convertToType(data['recipient_name'], 'String');
      }
      if (data.hasOwnProperty('sender_name')) {
        obj['sender_name'] = ApiClient.convertToType(data['sender_name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [AccountTransaction]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Money} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/Money} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The description of the gift certificate.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The enabled flag of the gift certificate.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * The URL to get the gift certificate.  This is a computed attribute and cannot be modified.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The masked gift certificate code with all but the  last 4 characters replaced with a '*' character.  This is a computed attribute and cannot be modified.
   * @member {String} masked_gift_certificate_code
   */
  exports.prototype['masked_gift_certificate_code'] = undefined;
  /**
   * The merchant ID of the gift certificate.  This is a unique attribute.  This is a computed attribute and cannot be modified.  This is used to get, update and the delete gift certificates.
   * @member {String} merchant_id
   */
  exports.prototype['merchant_id'] = undefined;
  /**
   * The message to the recipient of the gift certificate.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * The order number of the gift certificate.
   * @member {String} order_no
   */
  exports.prototype['order_no'] = undefined;
  /**
   * The email address of the recipient of the gift certificate.
   * @member {String} recipient_email
   */
  exports.prototype['recipient_email'] = undefined;
  /**
   * The recipient of the gift certificate.
   * @member {String} recipient_name
   */
  exports.prototype['recipient_name'] = undefined;
  /**
   * The sender of the gift certificate.
   * @member {String} sender_name
   */
  exports.prototype['sender_name'] = undefined;
  /**
   * The status of the gift certificate.  While creating a gift certificate, user can set the status  to either \"pending\" or \"issued\" only.
   * @member {module:model/GiftCertificate.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The transactions of the gift certificate
   * @member {Array.<module:model/AccountTransaction>} transactions
   */
  exports.prototype['transactions'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "issued"
     * @const
     */
    "issued": "issued",
    /**
     * value: "partially_redeemed"
     * @const
     */
    "partially_redeemed": "partially_redeemed",
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "redeemed"
     * @const
     */
    "redeemed": "redeemed"  };


  return exports;
}));

