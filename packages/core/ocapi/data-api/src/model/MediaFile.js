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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.MediaFile = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MediaFile model module.
   * @module model/MediaFile
   * @version 20.8
   */

  /**
   * Constructs a new <code>MediaFile</code>.
   * @alias module:model/MediaFile
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MediaFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaFile} obj Optional instance to populate.
   * @return {module:model/MediaFile} The populated <code>MediaFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('abs_url')) {
        obj['abs_url'] = ApiClient.convertToType(data['abs_url'], 'String');
      }
      if (data.hasOwnProperty('alt')) {
        obj['alt'] = ApiClient.convertToType(data['alt'], {'String': 'String'});
      }
      if (data.hasOwnProperty('dis_base_url')) {
        obj['dis_base_url'] = ApiClient.convertToType(data['dis_base_url'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The absolute URL with request protocol
   * @member {String} abs_url
   */
  exports.prototype['abs_url'] = undefined;
  /**
   * The alternative image text
   * @member {Object.<String, String>} alt
   */
  exports.prototype['alt'] = undefined;
  /**
   * The DIS base URL only for product images
   * @member {String} dis_base_url
   */
  exports.prototype['dis_base_url'] = undefined;
  /**
   * The raw media file path
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * The image title
   * @member {Object.<String, String>} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));

