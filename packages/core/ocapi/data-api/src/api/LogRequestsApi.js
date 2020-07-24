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
    define(['ApiClient', 'model/EcdnLogFetchRequest', 'model/EcdnLogFetchResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EcdnLogFetchRequest'), require('../model/EcdnLogFetchResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.LogRequestsApi = factory(root.DataApi.ApiClient, root.DataApi.EcdnLogFetchRequest, root.DataApi.EcdnLogFetchResponse);
  }
}(this, function(ApiClient, EcdnLogFetchRequest, EcdnLogFetchResponse) {
  'use strict';

  /**
   * LogRequests service.
   * @module api/LogRequestsApi
   * @version 20.8
   */

  /**
   * Constructs a new LogRequestsApi. 
   * @alias module:api/LogRequestsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves the current execution status of the log file fetching.
     * @param {String} id ID of the log fetching execution
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcdnLogFetchResponse} and HTTP response
     */
    this.getLogRequestsEcdnByIDWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLogRequestsEcdnByID");
      }

      var pathParams = {
        'id': id
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = EcdnLogFetchResponse;
      return this.apiClient.callApi(
        '/log_requests/ecdn/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the current execution status of the log file fetching.
     * @param {String} id ID of the log fetching execution
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcdnLogFetchResponse}
     */
    this.getLogRequestsEcdnByID = function(id) {
      return this.getLogRequestsEcdnByIDWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests a LogFile-Fetching for the passed zone and time frame.
     * @param {module:model/EcdnLogFetchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EcdnLogFetchResponse} and HTTP response
     */
    this.postLogRequestsEcdnWithHttpInfo = function(body) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postLogRequestsEcdn");
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
      var returnType = EcdnLogFetchResponse;
      return this.apiClient.callApi(
        '/log_requests/ecdn', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Requests a LogFile-Fetching for the passed zone and time frame.
     * @param {module:model/EcdnLogFetchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EcdnLogFetchResponse}
     */
    this.postLogRequestsEcdn = function(body) {
      return this.postLogRequestsEcdnWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
