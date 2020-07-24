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
    root.ShopApi.Image = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Image model module.
   * @module model/Image
   * @version 20.8
   */

  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @class
   * @param link {String} 
   */
  var exports = function(link) {
    var _this = this;

    _this['link'] = link;
  };

  /**
   * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Image} obj Optional instance to populate.
   * @return {module:model/Image} The populated <code>Image</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('alt')) {
        obj['alt'] = ApiClient.convertToType(data['alt'], 'String');
      }
      if (data.hasOwnProperty('dis_base_link')) {
        obj['dis_base_link'] = ApiClient.convertToType(data['dis_base_link'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} alt
   */
  exports.prototype['alt'] = undefined;
  /**
   * @member {String} dis_base_link
   */
  exports.prototype['dis_base_link'] = undefined;
  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


