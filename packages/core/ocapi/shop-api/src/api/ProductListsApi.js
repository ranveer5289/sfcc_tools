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
    define(['ApiClient', 'model/PublicProductList', 'model/PublicProductListItem', 'model/PublicProductListItemResult', 'model/PublicProductListResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PublicProductList'), require('../model/PublicProductListItem'), require('../model/PublicProductListItemResult'), require('../model/PublicProductListResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductListsApi = factory(root.ShopApi.ApiClient, root.ShopApi.PublicProductList, root.ShopApi.PublicProductListItem, root.ShopApi.PublicProductListItemResult, root.ShopApi.PublicProductListResult);
  }
}(this, function(ApiClient, PublicProductList, PublicProductListItem, PublicProductListItemResult, PublicProductListResult) {
  'use strict';

  /**
   * ProductLists service.
   * @module api/ProductListsApi
   * @version 20.8
   */

  /**
   * Constructs a new ProductListsApi. 
   * @alias module:api/ProductListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieves all public product lists as defined by the given search term (email, first name, last name).
     * @param {Object} opts Optional parameters
     * @param {String} opts.email The email address of the customer, the product lists belong to.
     * @param {String} opts.firstname The first name of the customer, the product lists belong to.
     * @param {String} opts.lastname The last name of the customer, the product lists belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicProductListResult} and HTTP response
     */
    this.getProductListsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'email': opts['email'],
        'firstname': opts['firstname'],
        'lastname': opts['lastname'],
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
      var returnType = PublicProductListResult;
      return this.apiClient.callApi(
        '/product_lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves all public product lists as defined by the given search term (email, first name, last name).
     * @param {Object} opts Optional parameters
     * @param {String} opts.email The email address of the customer, the product lists belong to.
     * @param {String} opts.firstname The first name of the customer, the product lists belong to.
     * @param {String} opts.lastname The last name of the customer, the product lists belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicProductListResult}
     */
    this.getProductLists = function(opts) {
      return this.getProductListsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a public product list by id.
     * @param {String} listId The id of the list.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicProductList} and HTTP response
     */
    this.getProductListsByIDWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getProductListsByID");
      }

      var pathParams = {
        'list_id': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = PublicProductList;
      return this.apiClient.callApi(
        '/product_lists/{list_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a public product list by id.
     * @param {String} listId The id of the list.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicProductList}
     */
    this.getProductListsByID = function(listId, opts) {
      return this.getProductListsByIDWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves the items of a public product list.
     * @param {String} listId The id of the list.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicProductListItemResult} and HTTP response
     */
    this.getProductListsByIDItemsWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getProductListsByIDItems");
      }

      var pathParams = {
        'list_id': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = PublicProductListItemResult;
      return this.apiClient.callApi(
        '/product_lists/{list_id}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the items of a public product list.
     * @param {String} listId The id of the list.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicProductListItemResult}
     */
    this.getProductListsByIDItems = function(listId, opts) {
      return this.getProductListsByIDItemsWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves an item from a public product list.
     * @param {String} listId The id of the list.
     * @param {String} itemId The id of the item.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicProductListItem} and HTTP response
     */
    this.getProductListsByIDItemsByIDWithHttpInfo = function(listId, itemId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getProductListsByIDItemsByID");
      }
      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling getProductListsByIDItemsByID");
      }

      var pathParams = {
        'list_id': listId,
        'item_id': itemId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = PublicProductListItem;
      return this.apiClient.callApi(
        '/product_lists/{list_id}/items/{item_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves an item from a public product list.
     * @param {String} listId The id of the list.
     * @param {String} itemId The id of the item.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicProductListItem}
     */
    this.getProductListsByIDItemsByID = function(listId, itemId, opts) {
      return this.getProductListsByIDItemsByIDWithHttpInfo(listId, itemId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
