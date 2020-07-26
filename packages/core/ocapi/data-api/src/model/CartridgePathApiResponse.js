/**
 * Data API
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
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CartridgePathApiResponse = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CartridgePathApiResponse model module.
   * @module model/CartridgePathApiResponse
   * @version 20.4
   */

  /**
   * Constructs a new <code>CartridgePathApiResponse</code>.
   * Response of cartridge path related operation
   * @alias module:model/CartridgePathApiResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CartridgePathApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartridgePathApiResponse} obj Optional instance to populate.
   * @return {module:model/CartridgePathApiResponse} The populated <code>CartridgePathApiResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cartridges')) {
        obj['cartridges'] = ApiClient.convertToType(data['cartridges'], 'String');
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Updated cartridge path
   * @member {String} cartridges
   */
  exports.prototype['cartridges'] = undefined;
  /**
   * Site id
   * @member {String} site_id
   */
  exports.prototype['site_id'] = undefined;



  return exports;
}));


