/**
 * Data API
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
    define(['ApiClient', 'model/ContentFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.ContentFolderResult = factory(root.DataApi.ApiClient, root.DataApi.ContentFolder);
  }
}(this, function(ApiClient, ContentFolder) {
  'use strict';



  /**
   * The ContentFolderResult model module.
   * @module model/ContentFolderResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>ContentFolderResult</code>.
   * Result document containing an array of content folders.
   * @alias module:model/ContentFolderResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ContentFolderResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentFolderResult} obj Optional instance to populate.
   * @return {module:model/ContentFolderResult} The populated <code>ContentFolderResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Object]);
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = ApiClient.convertToType(data['hits'], [ContentFolder]);
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
   * The number of search results in the current page.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The returned objects.
   * @member {Array.<Object>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * The sorted array of search hits. This array can be empty.
   * @member {Array.<module:model/ContentFolder>} hits
   */
  exports.prototype['hits'] = undefined;
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
   * The zero-based index of the first search result to include in the document.
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;
  /**
   * The total number of search results.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


