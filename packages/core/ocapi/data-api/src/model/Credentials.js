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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Credentials = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Credentials model module.
   * @module model/Credentials
   * @version 20.8
   */

  /**
   * Constructs a new <code>Credentials</code>.
   * Document representing the credentials of a customer.
   * @alias module:model/Credentials
   * @class
   * @param login {String} The login of the customer.
   */
  var exports = function(login) {
    var _this = this;

    _this['login'] = login;
  };

  /**
   * Constructs a <code>Credentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Credentials} obj Optional instance to populate.
   * @return {module:model/Credentials} The populated <code>Credentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('password_question')) {
        obj['password_question'] = ApiClient.convertToType(data['password_question'], 'String');
      }
    }
    return obj;
  }

  /**
   * A flag indicating whether the customer is enabled and can log.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * A flag indicating whether the customer account is locked.
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The login of the customer.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * The password question.
   * @member {String} password_question
   */
  exports.prototype['password_question'] = undefined;



  return exports;
}));


