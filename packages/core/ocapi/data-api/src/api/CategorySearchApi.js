/**
 * Data API
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
    define(['ApiClient', 'model/CategorySearchResult', 'model/SearchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CategorySearchResult'), require('../model/SearchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CategorySearchApi = factory(root.DataApi.ApiClient, root.DataApi.CategorySearchResult, root.DataApi.SearchRequest);
  }
}(this, function(ApiClient, CategorySearchResult, SearchRequest) {
  'use strict';

  /**
   * CategorySearch service.
   * @module api/CategorySearchApi
   * @version 20.4
   */

  /**
   * Constructs a new CategorySearchApi. 
   * @alias module:api/CategorySearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Searches for catalog categories anywhere they appear.  By default, the server also returns the first level of subcategories,   but you can specify another level by setting the levels parameter.    Please note, using a large value for levels may cause performance    issues in case of a large and deep category tree.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean  catalog_id - String     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean   position - Double   
     * @param {module:model/SearchRequest} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategorySearchResult} and HTTP response
     */
    this.postCategorySearchWithHttpInfo = function(body, opts) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCategorySearch");
      }

      var pathParams = {
      };
      var queryParams = {
        'levels': opts['levels'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json', 'text/xml', 'application/xml'];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = CategorySearchResult;
      return this.apiClient.callApi(
        '/category_search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Searches for catalog categories anywhere they appear.  By default, the server also returns the first level of subcategories,   but you can specify another level by setting the levels parameter.    Please note, using a large value for levels may cause performance    issues in case of a large and deep category tree.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean  catalog_id - String     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean   position - Double   
     * @param {module:model/SearchRequest} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategorySearchResult}
     */
    this.postCategorySearch = function(body, opts) {
      return this.postCategorySearchWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
