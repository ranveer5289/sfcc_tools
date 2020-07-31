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
    root.ShopApi.Content = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Content model module.
   * @module model/Content
   * @version 20.4
   */

  /**
   * Constructs a new <code>Content</code>.
   * Document representing a content asset.
   * @alias module:model/Content
   * @class
   * @param id {String} The id of the content asset.
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Content} obj Optional instance to populate.
   * @return {module:model/Content} The populated <code>Content</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('c_Year')) {
        obj['c_Year'] = ApiClient.convertToType(data['c_Year'], 'String');
      }
      if (data.hasOwnProperty('c_body')) {
        obj['c_body'] = ApiClient.convertToType(data['c_body'], 'String');
      }
      if (data.hasOwnProperty('c_customCSSFile')) {
        obj['c_customCSSFile'] = ApiClient.convertToType(data['c_customCSSFile'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('page_description')) {
        obj['page_description'] = ApiClient.convertToType(data['page_description'], 'String');
      }
      if (data.hasOwnProperty('page_keywords')) {
        obj['page_keywords'] = ApiClient.convertToType(data['page_keywords'], 'String');
      }
      if (data.hasOwnProperty('page_title')) {
        obj['page_title'] = ApiClient.convertToType(data['page_title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} c_Year
   */
  exports.prototype['c_Year'] = undefined;
  /**
   * @member {String} c_body
   */
  exports.prototype['c_body'] = undefined;
  /**
   * Use this attribute to apply custom styles for this content asset.
   * @member {String} c_customCSSFile
   */
  exports.prototype['c_customCSSFile'] = undefined;
  /**
   * The localized content asset description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The id of the content asset.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The localized content asset name.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The localized content asset page description.
   * @member {String} page_description
   */
  exports.prototype['page_description'] = undefined;
  /**
   * The localized content asset page description.
   * @member {String} page_keywords
   */
  exports.prototype['page_keywords'] = undefined;
  /**
   * The localized content asset page title.
   * @member {String} page_title
   */
  exports.prototype['page_title'] = undefined;



  return exports;
}));


