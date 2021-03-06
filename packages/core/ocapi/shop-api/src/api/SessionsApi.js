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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.SessionsApi = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Sessions service.
   * @module api/SessionsApi
   * @version 20.4
   */

  /**
   * Constructs a new SessionsApi. 
   * @alias module:api/SessionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     *   Exchanges a valid JWT into a new session, which is associated with the authenticated or anonymous customer. All  Set-Cookie headers for handling the session are applied on the response.      Only the JWT is used to create the new session. Any session IDs included in the request are ignored.      Once you create a session from a JWT, you can use it in parallel with stateless OCAPI calls that use the JWT.  There is no need to call the bridging resources again.      If the customer is authenticated and has a storefront basket, that basket is transferred into the session and can  be retrieved using BasketMgr.getCurrentBasket(), along with sensitive data such as addresses and payment  information. The following examples show why this behavior is important to understand as it relates to guest  customers:      Basket created after the session is created:      POST /customers/auth with type “guest”  POST /sessions  POST /baskets  Storefront request (controller with BasketMgr.getCurrentBasket())  -> Sensitive data is erased from the basket due to security considerations        Basket created before the session is created:      POST /customers/auth with type “guest”  POST /baskets  POST /sessions  Storefront request (controller with BasketMgr.getCurrentBasket())  -> Sensitive data is accessible because the basket is marked as secured for this session    
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.postSessionsWithHttpInfo = function() {
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

      var authNames = ['customers_auth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/sessions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     *   Exchanges a valid JWT into a new session, which is associated with the authenticated or anonymous customer. All  Set-Cookie headers for handling the session are applied on the response.      Only the JWT is used to create the new session. Any session IDs included in the request are ignored.      Once you create a session from a JWT, you can use it in parallel with stateless OCAPI calls that use the JWT.  There is no need to call the bridging resources again.      If the customer is authenticated and has a storefront basket, that basket is transferred into the session and can  be retrieved using BasketMgr.getCurrentBasket(), along with sensitive data such as addresses and payment  information. The following examples show why this behavior is important to understand as it relates to guest  customers:      Basket created after the session is created:      POST /customers/auth with type “guest”  POST /sessions  POST /baskets  Storefront request (controller with BasketMgr.getCurrentBasket())  -> Sensitive data is erased from the basket due to security considerations        Basket created before the session is created:      POST /customers/auth with type “guest”  POST /baskets  POST /sessions  Storefront request (controller with BasketMgr.getCurrentBasket())  -> Sensitive data is accessible because the basket is marked as secured for this session    
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.postSessions = function() {
      return this.postSessionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
