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
    define(['ApiClient', 'model/CatalogSearchResult', 'model/SearchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CatalogSearchResult'), require('../model/SearchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CatalogSearchApi = factory(root.DataApi.ApiClient, root.DataApi.CatalogSearchResult, root.DataApi.SearchRequest);
  }
}(this, function(ApiClient, CatalogSearchResult, SearchRequest) {
  'use strict';

  /**
   * CatalogSearch service.
   * @module api/CatalogSearchApi
   * @version 20.8
   */

  /**
   * Constructs a new CatalogSearchApi. 
   * @alias module:api/CatalogSearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Searches for catalogs.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime      There are two additional fields that can be used as search filters. They are not attributes in CatalogWO object,   but can be used as filters to query catalogs based on site assignments.    is_master_catalog - Boolean  is_storefront_catalog - Boolean      On using is_master_catalog in the search query, catalogs without any site assignments are returned.   On using is_storefront_catalog in the search query, catalogs with one or more site assignments are returned.    The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  
     * @param {module:model/SearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CatalogSearchResult} and HTTP response
     */
    this.postCatalogSearchWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postCatalogSearch");
      }

      var pathParams = {
      };
      var queryParams = {
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
      var returnType = CatalogSearchResult;
      return this.apiClient.callApi(
        '/catalog_search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Searches for catalogs.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime      There are two additional fields that can be used as search filters. They are not attributes in CatalogWO object,   but can be used as filters to query catalogs based on site assignments.    is_master_catalog - Boolean  is_storefront_catalog - Boolean      On using is_master_catalog in the search query, catalogs without any site assignments are returned.   On using is_storefront_catalog in the search query, catalogs with one or more site assignments are returned.    The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  
     * @param {module:model/SearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CatalogSearchResult}
     */
    this.postCatalogSearch = function(body) {
      return this.postCatalogSearchWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
