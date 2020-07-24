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
    define(['ApiClient', 'model/SearchRequest', 'model/SiteSearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SearchRequest'), require('../model/SiteSearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SiteSearchApi = factory(root.DataApi.ApiClient, root.DataApi.SearchRequest, root.DataApi.SiteSearchResult);
  }
}(this, function(ApiClient, SearchRequest, SiteSearchResult) {
  'use strict';

  /**
   * SiteSearch service.
   * @module api/SiteSearchApi
   * @version 20.8
   */

  /**
   * Constructs a new SiteSearchApi. 
   * @alias module:api/SiteSearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized <String>  description - Localized <String>  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized <String>  description - Localized <String>  in_deletion - Boolean  
     * @param {module:model/SearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SiteSearchResult} and HTTP response
     */
    this.postSiteSearchWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postSiteSearch");
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
      var returnType = SiteSearchResult;
      return this.apiClient.callApi(
        '/site_search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized <String>  description - Localized <String>  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized <String>  description - Localized <String>  in_deletion - Boolean  
     * @param {module:model/SearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SiteSearchResult}
     */
    this.postSiteSearch = function(body) {
      return this.postSiteSearchWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
