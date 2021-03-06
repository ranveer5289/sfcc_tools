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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ResetPasswordTokenResult = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ResetPasswordTokenResult model module.
   * @module model/ResetPasswordTokenResult
   * @version 20.4
   */

  /**
   * Constructs a new <code>ResetPasswordTokenResult</code>.
   * @alias module:model/ResetPasswordTokenResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ResetPasswordTokenResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetPasswordTokenResult} obj Optional instance to populate.
   * @return {module:model/ResetPasswordTokenResult} The populated <code>ResetPasswordTokenResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('expires_in_minutes')) {
        obj['expires_in_minutes'] = ApiClient.convertToType(data['expires_in_minutes'], 'Number');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('reset_token')) {
        obj['reset_token'] = ApiClient.convertToType(data['reset_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The email address of the customer.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The password reset token expire time in minutes.
   * @member {Number} expires_in_minutes
   */
  exports.prototype['expires_in_minutes'] = undefined;
  /**
   * The login id of the customer.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * The password reset token for the customer.
   * @member {String} reset_token
   */
  exports.prototype['reset_token'] = undefined;



  return exports;
}));


