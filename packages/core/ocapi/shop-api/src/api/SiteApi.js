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
    define(['ApiClient', 'model/Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Site'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.SiteApi = factory(root.ShopApi.ApiClient, root.ShopApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';

  /**
   * Site service.
   * @module api/SiteApi
   * @version 20.4
   */

  /**
   * Constructs a new SiteApi. 
   * @alias module:api/SiteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Access site information, like site status and site content URLs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Site} and HTTP response
     */
    this.getSiteWithHttpInfo = function() {
      var postBody = null;

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

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Site;
      return this.apiClient.callApi(
        '/site', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access site information, like site status and site content URLs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Site}
     */
    this.getSite = function() {
      return this.getSiteWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
