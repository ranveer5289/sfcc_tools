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
    define(['ApiClient', 'model/SuggestedTerm'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuggestedTerm'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.SuggestedTerms = factory(root.ShopApi.ApiClient, root.ShopApi.SuggestedTerm);
  }
}(this, function(ApiClient, SuggestedTerm) {
  'use strict';



  /**
   * The SuggestedTerms model module.
   * @module model/SuggestedTerms
   * @version 20.4
   */

  /**
   * Constructs a new <code>SuggestedTerms</code>.
   * Document representing a list of suggested terms for each term of a search phrase.
   * @alias module:model/SuggestedTerms
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SuggestedTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestedTerms} obj Optional instance to populate.
   * @return {module:model/SuggestedTerms} The populated <code>SuggestedTerms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('original_term')) {
        obj['original_term'] = ApiClient.convertToType(data['original_term'], 'String');
      }
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = ApiClient.convertToType(data['terms'], [SuggestedTerm]);
      }
    }
    return obj;
  }

  /**
   * Returns the original term that the suggested terms relates to.
   * @member {String} original_term
   */
  exports.prototype['original_term'] = undefined;
  /**
   * Returns the suggested terms.
   * @member {Array.<module:model/SuggestedTerm>} terms
   */
  exports.prototype['terms'] = undefined;



  return exports;
}));


