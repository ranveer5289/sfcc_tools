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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ResetPasswordTokenRequest = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ResetPasswordTokenRequest model module.
   * @module model/ResetPasswordTokenRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>ResetPasswordTokenRequest</code>.
   * @alias module:model/ResetPasswordTokenRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ResetPasswordTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResetPasswordTokenRequest} obj Optional instance to populate.
   * @return {module:model/ResetPasswordTokenRequest} The populated <code>ResetPasswordTokenRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
    }
    return obj;
  }

  /**
   * The login id of the customer.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;



  return exports;
}));


