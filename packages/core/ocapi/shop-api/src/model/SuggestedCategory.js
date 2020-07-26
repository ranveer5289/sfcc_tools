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
    root.ShopApi.SuggestedCategory = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SuggestedCategory model module.
   * @module model/SuggestedCategory
   * @version 20.4
   */

  /**
   * Constructs a new <code>SuggestedCategory</code>.
   * @alias module:model/SuggestedCategory
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SuggestedCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestedCategory} obj Optional instance to populate.
   * @return {module:model/SuggestedCategory} The populated <code>SuggestedCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent_category_name')) {
        obj['parent_category_name'] = ApiClient.convertToType(data['parent_category_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the category.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The URL addressing the category.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The localized name of the category.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The name of the parent category.
   * @member {String} parent_category_name
   */
  exports.prototype['parent_category_name'] = undefined;



  return exports;
}));


