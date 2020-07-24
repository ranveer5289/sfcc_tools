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
    define(['ApiClient', 'model/ProductSearchHit', 'model/ProductSearchRefinement', 'model/ProductSearchSortingOption', 'model/Suggestion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductSearchHit'), require('./ProductSearchRefinement'), require('./ProductSearchSortingOption'), require('./Suggestion'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductSearchResult = factory(root.ShopApi.ApiClient, root.ShopApi.ProductSearchHit, root.ShopApi.ProductSearchRefinement, root.ShopApi.ProductSearchSortingOption, root.ShopApi.Suggestion);
  }
}(this, function(ApiClient, ProductSearchHit, ProductSearchRefinement, ProductSearchSortingOption, Suggestion) {
  'use strict';



  /**
   * The ProductSearchResult model module.
   * @module model/ProductSearchResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>ProductSearchResult</code>.
   * Document representing a product search result.
   * @alias module:model/ProductSearchResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSearchResult} obj Optional instance to populate.
   * @return {module:model/ProductSearchResult} The populated <code>ProductSearchResult</code> instance.
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
      if (data.hasOwnProperty('fetch_date')) {
        obj['fetch_date'] = ApiClient.convertToType(data['fetch_date'], 'Number');
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = ApiClient.convertToType(data['hits'], [ProductSearchHit]);
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('refinements')) {
        obj['refinements'] = ApiClient.convertToType(data['refinements'], [ProductSearchRefinement]);
      }
      if (data.hasOwnProperty('search_phrase_suggestions')) {
        obj['search_phrase_suggestions'] = Suggestion.constructFromObject(data['search_phrase_suggestions']);
      }
      if (data.hasOwnProperty('selected_refinements')) {
        obj['selected_refinements'] = ApiClient.convertToType(data['selected_refinements'], {'String': 'String'});
      }
      if (data.hasOwnProperty('selected_sorting_option')) {
        obj['selected_sorting_option'] = ApiClient.convertToType(data['selected_sorting_option'], 'String');
      }
      if (data.hasOwnProperty('sorting_options')) {
        obj['sorting_options'] = ApiClient.convertToType(data['sorting_options'], [ProductSearchSortingOption]);
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
   * @member {Array.<Object>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Number} fetch_date
   */
  exports.prototype['fetch_date'] = undefined;
  /**
   * The sorted array of search hits. This array can be empty.
   * @member {Array.<module:model/ProductSearchHit>} hits
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
   * The query String that was searched for.
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The sorted array of search refinements. This array can be empty.
   * @member {Array.<module:model/ProductSearchRefinement>} refinements
   */
  exports.prototype['refinements'] = undefined;
  /**
   * @member {module:model/Suggestion} search_phrase_suggestions
   */
  exports.prototype['search_phrase_suggestions'] = undefined;
  /**
   * A map of selected refinement attribute id/value(s) pairs. The sorting order is the same as in request URL.
   * @member {Object.<String, String>} selected_refinements
   */
  exports.prototype['selected_refinements'] = undefined;
  /**
   * The id of the applied sorting option.
   * @member {String} selected_sorting_option
   */
  exports.prototype['selected_sorting_option'] = undefined;
  /**
   * The sorted array of search sorting options. This array can be empty.
   * @member {Array.<module:model/ProductSearchSortingOption>} sorting_options
   */
  exports.prototype['sorting_options'] = undefined;
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


