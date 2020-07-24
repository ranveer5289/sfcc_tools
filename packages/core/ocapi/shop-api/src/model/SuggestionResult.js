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
    define(['ApiClient', 'model/Suggestion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Suggestion'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.SuggestionResult = factory(root.ShopApi.ApiClient, root.ShopApi.Suggestion);
  }
}(this, function(ApiClient, Suggestion) {
  'use strict';



  /**
   * The SuggestionResult model module.
   * @module model/SuggestionResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>SuggestionResult</code>.
   * Document representing a search suggestion result.
   * @alias module:model/SuggestionResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SuggestionResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestionResult} obj Optional instance to populate.
   * @return {module:model/SuggestionResult} The populated <code>SuggestionResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('brand_suggestions')) {
        obj['brand_suggestions'] = Suggestion.constructFromObject(data['brand_suggestions']);
      }
      if (data.hasOwnProperty('category_suggestions')) {
        obj['category_suggestions'] = Suggestion.constructFromObject(data['category_suggestions']);
      }
      if (data.hasOwnProperty('content_suggestions')) {
        obj['content_suggestions'] = Suggestion.constructFromObject(data['content_suggestions']);
      }
      if (data.hasOwnProperty('custom_suggestions')) {
        obj['custom_suggestions'] = Suggestion.constructFromObject(data['custom_suggestions']);
      }
      if (data.hasOwnProperty('product_suggestions')) {
        obj['product_suggestions'] = Suggestion.constructFromObject(data['product_suggestions']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Suggestion} brand_suggestions
   */
  exports.prototype['brand_suggestions'] = undefined;
  /**
   * @member {module:model/Suggestion} category_suggestions
   */
  exports.prototype['category_suggestions'] = undefined;
  /**
   * @member {module:model/Suggestion} content_suggestions
   */
  exports.prototype['content_suggestions'] = undefined;
  /**
   * @member {module:model/Suggestion} custom_suggestions
   */
  exports.prototype['custom_suggestions'] = undefined;
  /**
   * @member {module:model/Suggestion} product_suggestions
   */
  exports.prototype['product_suggestions'] = undefined;
  /**
   * The query phrase to search for.
   * @member {String} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


