/**
 * Data API
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
    define(['ApiClient', 'model/Money'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Money'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.AccountTransaction = factory(root.DataApi.ApiClient, root.DataApi.Money);
  }
}(this, function(ApiClient, Money) {
  'use strict';



  /**
   * The AccountTransaction model module.
   * @module model/AccountTransaction
   * @version 20.8
   */

  /**
   * Constructs a new <code>AccountTransaction</code>.
   * Document representing an account transaction
   * @alias module:model/AccountTransaction
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AccountTransaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountTransaction} obj Optional instance to populate.
   * @return {module:model/AccountTransaction} The populated <code>AccountTransaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Money.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('order_no')) {
        obj['order_no'] = ApiClient.convertToType(data['order_no'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
      }
      if (data.hasOwnProperty('type_code')) {
        obj['type_code'] = ApiClient.convertToType(data['type_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Money} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The order number of the gift certificate
   * @member {String} order_no
   */
  exports.prototype['order_no'] = undefined;
  /**
   * The timestamp of the transaction of the gift certificate
   * @member {Date} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * The type code of the gift certificate
   * @member {module:model/AccountTransaction.TypeCodeEnum} type_code
   */
  exports.prototype['type_code'] = undefined;


  /**
   * Allowed values for the <code>type_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeCodeEnum = {
    /**
     * value: "create"
     * @const
     */
    "create": "create",
    /**
     * value: "redeem"
     * @const
     */
    "redeem": "redeem",
    /**
     * value: "delete"
     * @const
     */
    "delete": "delete",
    /**
     * value: "enable"
     * @const
     */
    "enable": "enable",
    /**
     * value: "disable"
     * @const
     */
    "disable": "disable"  };


  return exports;
}));


