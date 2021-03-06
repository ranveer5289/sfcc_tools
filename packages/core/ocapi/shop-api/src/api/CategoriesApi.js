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
    define(['ApiClient', 'model/Category', 'model/CategoryResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'), require('../model/CategoryResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.CategoriesApi = factory(root.ShopApi.ApiClient, root.ShopApi.Category, root.ShopApi.CategoryResult);
  }
}(this, function(ApiClient, Category, CategoryResult) {
  'use strict';

  /**
   * Categories service.
   * @module api/CategoriesApi
   * @version 20.4
   */

  /**
   * Constructs a new CategoriesApi. 
   * @alias module:api/CategoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * When you use the URL template below, the server returns a category identified by its id; by default, the server  also returns the first level of subcategories, but you can specify another level by setting the levels  parameter. The server only returns online categories.
     * @param {String} id The id of the requested category.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Category} and HTTP response
     */
    this.getCategoriesByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCategoriesByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'levels': opts['levels'],
        'locale': opts['locale'],
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
      var returnType = Category;
      return this.apiClient.callApi(
        '/categories/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * When you use the URL template below, the server returns a category identified by its id; by default, the server  also returns the first level of subcategories, but you can specify another level by setting the levels  parameter. The server only returns online categories.
     * @param {String} id The id of the requested category.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Category}
     */
    this.getCategoriesByID = function(id, opts) {
      return this.getCategoriesByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CategoryResult} and HTTP response
     */
    this.getCategoriesByIDsWithHttpInfo = function(ids, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getCategoriesByIDs");
      }

      var pathParams = {
        'ids': ids
      };
      var queryParams = {
        'levels': opts['levels'],
        'locale': opts['locale'],
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
      var returnType = CategoryResult;
      return this.apiClient.callApi(
        '/categories/({ids})', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.levels 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CategoryResult}
     */
    this.getCategoriesByIDs = function(ids, opts) {
      return this.getCategoriesByIDsWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
