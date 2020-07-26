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
    root.ShopApi.PasswordChangeRequest = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PasswordChangeRequest model module.
   * @module model/PasswordChangeRequest
   * @version 20.4
   */

  /**
   * Constructs a new <code>PasswordChangeRequest</code>.
   * Document representing a password change request.
   * @alias module:model/PasswordChangeRequest
   * @class
   * @param currentPassword {String} The customer's current password.
   * @param password {String} The customer's new password.
   */
  var exports = function(currentPassword, password) {
    var _this = this;

    _this['current_password'] = currentPassword;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>PasswordChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordChangeRequest} obj Optional instance to populate.
   * @return {module:model/PasswordChangeRequest} The populated <code>PasswordChangeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('current_password')) {
        obj['current_password'] = ApiClient.convertToType(data['current_password'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * The customer's current password.
   * @member {String} current_password
   */
  exports.prototype['current_password'] = undefined;
  /**
   * The customer's new password.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


