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
    define(['ApiClient', 'model/VariationAttributeValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VariationAttributeValue'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.VariationAttributeValues = factory(root.DataApi.ApiClient, root.DataApi.VariationAttributeValue);
  }
}(this, function(ApiClient, VariationAttributeValue) {
  'use strict';



  /**
   * The VariationAttributeValues model module.
   * @module model/VariationAttributeValues
   * @version 20.8
   */

  /**
   * Constructs a new <code>VariationAttributeValues</code>.
   * Document representing an unfiltered list of variation attribute values.
   * @alias module:model/VariationAttributeValues
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>VariationAttributeValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationAttributeValues} obj Optional instance to populate.
   * @return {module:model/VariationAttributeValues} The populated <code>VariationAttributeValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [VariationAttributeValue]);
      }
      if (data.hasOwnProperty('expand')) {
        obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('select')) {
        obj['select'] = ApiClient.convertToType(data['select'], 'String');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of returned documents.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * 
   * @member {Array.<module:model/VariationAttributeValue>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The list of expands set for the search request. Expands are optional.
   * @member {Array.<String>} expand
   */
  exports.prototype['expand'] = undefined;
  /**
   * The URL of the next result page.
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * The URL of the previous result page.
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * The fields that you want to select.
   * @member {String} select
   */
  exports.prototype['select'] = undefined;
  /**
   * The zero-based index of the first search hit to include in the result.
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * The total number of documents.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


