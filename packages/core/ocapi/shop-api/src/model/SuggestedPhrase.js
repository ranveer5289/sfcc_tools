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
    root.ShopApi.SuggestedPhrase = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SuggestedPhrase model module.
   * @module model/SuggestedPhrase
   * @version 20.8
   */

  /**
   * Constructs a new <code>SuggestedPhrase</code>.
   * Document representing a suggested search phrase.
   * @alias module:model/SuggestedPhrase
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SuggestedPhrase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestedPhrase} obj Optional instance to populate.
   * @return {module:model/SuggestedPhrase} The populated <code>SuggestedPhrase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exact_match')) {
        obj['exact_match'] = ApiClient.convertToType(data['exact_match'], 'Boolean');
      }
      if (data.hasOwnProperty('phrase')) {
        obj['phrase'] = ApiClient.convertToType(data['phrase'], 'String');
      }
    }
    return obj;
  }

  /**
   * Returns whether this suggested phrase exactly matches the user input search phrase.
   * @member {Boolean} exact_match
   */
  exports.prototype['exact_match'] = undefined;
  /**
   * Returns the suggested search phrase.
   * @member {String} phrase
   */
  exports.prototype['phrase'] = undefined;



  return exports;
}));

