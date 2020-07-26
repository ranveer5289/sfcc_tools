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
    define(['ApiClient', 'model/SuggestedCategory', 'model/SuggestedContent', 'model/SuggestedPhrase', 'model/SuggestedProduct', 'model/SuggestedTerms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuggestedCategory'), require('./SuggestedContent'), require('./SuggestedPhrase'), require('./SuggestedProduct'), require('./SuggestedTerms'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.Suggestion = factory(root.ShopApi.ApiClient, root.ShopApi.SuggestedCategory, root.ShopApi.SuggestedContent, root.ShopApi.SuggestedPhrase, root.ShopApi.SuggestedProduct, root.ShopApi.SuggestedTerms);
  }
}(this, function(ApiClient, SuggestedCategory, SuggestedContent, SuggestedPhrase, SuggestedProduct, SuggestedTerms) {
  'use strict';



  /**
   * The Suggestion model module.
   * @module model/Suggestion
   * @version 20.4
   */

  /**
   * Constructs a new <code>Suggestion</code>.
   * Document representing a suggestion.
   * @alias module:model/Suggestion
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Suggestion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Suggestion} obj Optional instance to populate.
   * @return {module:model/Suggestion} The populated <code>Suggestion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('brands')) {
        obj['brands'] = ApiClient.convertToType(data['brands'], ['String']);
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [SuggestedCategory]);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [SuggestedContent]);
      }
      if (data.hasOwnProperty('custom_suggestions')) {
        obj['custom_suggestions'] = ApiClient.convertToType(data['custom_suggestions'], ['String']);
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [SuggestedProduct]);
      }
      if (data.hasOwnProperty('suggested_phrases')) {
        obj['suggested_phrases'] = ApiClient.convertToType(data['suggested_phrases'], [SuggestedPhrase]);
      }
      if (data.hasOwnProperty('suggested_terms')) {
        obj['suggested_terms'] = ApiClient.convertToType(data['suggested_terms'], [SuggestedTerms]);
      }
    }
    return obj;
  }

  /**
   * The sorted list of suggested brands. This list can be empty.
   * @member {Array.<String>} brands
   */
  exports.prototype['brands'] = undefined;
  /**
   * The sorted list of suggested categories. This list can be empty.
   * @member {Array.<module:model/SuggestedCategory>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * The sorted list of suggested content. This list can be empty.
   * @member {Array.<module:model/SuggestedContent>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The sorted list of suggested custom suggestions. This list can be empty.
   * @member {Array.<String>} custom_suggestions
   */
  exports.prototype['custom_suggestions'] = undefined;
  /**
   * The sorted list of suggested products. This list can be empty.
   * @member {Array.<module:model/SuggestedProduct>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * A list of suggested phrases. This list can be empty.
   * @member {Array.<module:model/SuggestedPhrase>} suggested_phrases
   */
  exports.prototype['suggested_phrases'] = undefined;
  /**
   * A list of suggested terms. This list can be empty.
   * @member {Array.<module:model/SuggestedTerms>} suggested_terms
   */
  exports.prototype['suggested_terms'] = undefined;



  return exports;
}));


