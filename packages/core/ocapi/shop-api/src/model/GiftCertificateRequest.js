/**
 * Shop API
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.GiftCertificateRequest = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GiftCertificateRequest model module.
   * @module model/GiftCertificateRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>GiftCertificateRequest</code>.
   * Document representing a gift certificate request data.
   * @alias module:model/GiftCertificateRequest
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GiftCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GiftCertificateRequest} obj Optional instance to populate.
   * @return {module:model/GiftCertificateRequest} The populated <code>GiftCertificateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('gift_certificate_code')) {
        obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * The gift certificate code.
   * @member {String} gift_certificate_code
   */
  exports.prototype['gift_certificate_code'] = undefined;



  return exports;
}));


