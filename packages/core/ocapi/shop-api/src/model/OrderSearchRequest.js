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
    define(['ApiClient', 'model/Sort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Sort'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.OrderSearchRequest = factory(root.ShopApi.ApiClient, root.ShopApi.Sort);
  }
}(this, function(ApiClient, Sort) {
  'use strict';



  /**
   * The OrderSearchRequest model module.
   * @module model/OrderSearchRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>OrderSearchRequest</code>.
   * Document representing an order search request.
   * @alias module:model/OrderSearchRequest
   * @class
   * @param query {Object} Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following: 
   */
  var exports = function(query) {
    var _this = this;

    _this['query'] = query;
  };

  /**
   * Constructs a <code>OrderSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderSearchRequest} obj Optional instance to populate.
   * @return {module:model/OrderSearchRequest} The populated <code>OrderSearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('db_start_record_')) {
        obj['db_start_record_'] = ApiClient.convertToType(data['db_start_record_'], 'Number');
      }
      if (data.hasOwnProperty('expand')) {
        obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], Object);
      }
      if (data.hasOwnProperty('select')) {
        obj['select'] = ApiClient.convertToType(data['select'], 'String');
      }
      if (data.hasOwnProperty('sorts')) {
        obj['sorts'] = ApiClient.convertToType(data['sorts'], [Sort]);
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of returned documents
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * The zero-based index of the record that we want to start with, used to optimize special handling
   * @member {Number} db_start_record_
   */
  exports.prototype['db_start_record_'] = undefined;
  /**
   * List of expansions to be applied to each search results. Expands are optional
   * @member {Array.<String>} expand
   */
  exports.prototype['expand'] = undefined;
  /**
   * Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following: 
   * @member {Object} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The field to be selected.
   * @member {String} select
   */
  exports.prototype['select'] = undefined;
  /**
   * The list of sort clauses configured for the search request. Sort clauses are optional.
   * @member {Array.<module:model/Sort>} sorts
   */
  exports.prototype['sorts'] = undefined;
  /**
   * The zero-based index of the first search hit to include in the result.
   * @member {Number} start
   */
  exports.prototype['start'] = undefined;



  return exports;
}));


