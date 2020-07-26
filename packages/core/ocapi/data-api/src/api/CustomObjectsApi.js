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
    define(['ApiClient', 'model/CustomObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CustomObject'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CustomObjectsApi = factory(root.DataApi.ApiClient, root.DataApi.CustomObject);
  }
}(this, function(ApiClient, CustomObject) {
  'use strict';

  /**
   * CustomObjects service.
   * @module api/CustomObjectsApi
   * @version 20.4
   */

  /**
   * Constructs a new CustomObjectsApi. 
   * @alias module:api/CustomObjectsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Deletes a global Custom Object. If the Custom Object does not exist, this will do nothing. Note that the customization scripts are only called, if the Custom Object does exist.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCustomObjectsByIDByIDWithHttpInfo = function(objectType, key) {
      var postBody = null;
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling deleteCustomObjectsByIDByID");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling deleteCustomObjectsByIDByID");
      }

      var pathParams = {
        'object_type': objectType,
        'key': key
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/custom_objects/{object_type}/{key}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a global Custom Object. If the Custom Object does not exist, this will do nothing. Note that the customization scripts are only called, if the Custom Object does exist.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCustomObjectsByIDByID = function(objectType, key) {
      return this.deleteCustomObjectsByIDByIDWithHttpInfo(objectType, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reads a global Custom Object with a given object type ID and a value for the key attribute of the object which represents its unique identifier.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomObject} and HTTP response
     */
    this.getCustomObjectsByIDByIDWithHttpInfo = function(objectType, key) {
      var postBody = null;
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getCustomObjectsByIDByID");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getCustomObjectsByIDByID");
      }

      var pathParams = {
        'object_type': objectType,
        'key': key
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
      var returnType = CustomObject;
      return this.apiClient.callApi(
        '/custom_objects/{object_type}/{key}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reads a global Custom Object with a given object type ID and a value for the key attribute of the object which represents its unique identifier.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomObject}
     */
    this.getCustomObjectsByIDByID = function(objectType, key) {
      return this.getCustomObjectsByIDByIDWithHttpInfo(objectType, key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a global Custom Object with information from request body. Note that only mentioned attributes will be updated and the key attribute is ignored. All other attributes will be left unattended.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @param {module:model/CustomObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomObject} and HTTP response
     */
    this.patchCustomObjectsByIDByIDWithHttpInfo = function(objectType, key, body) {
      var postBody = body;
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling patchCustomObjectsByIDByID");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling patchCustomObjectsByIDByID");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchCustomObjectsByIDByID");
      }

      var pathParams = {
        'object_type': objectType,
        'key': key
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
      var returnType = CustomObject;
      return this.apiClient.callApi(
        '/custom_objects/{object_type}/{key}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates a global Custom Object with information from request body. Note that only mentioned attributes will be updated and the key attribute is ignored. All other attributes will be left unattended.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @param {module:model/CustomObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomObject}
     */
    this.patchCustomObjectsByIDByID = function(objectType, key, body) {
      return this.patchCustomObjectsByIDByIDWithHttpInfo(objectType, key, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a global Custom Object from request body. Note that an existing global Custom Object with the same key will be overwritten by this action.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomObject} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomObject} and HTTP response
     */
    this.putCustomObjectsByIDByIDWithHttpInfo = function(objectType, key, opts) {
      opts = opts || {};
      var postBody = opts['body'];
      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling putCustomObjectsByIDByID");
      }
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling putCustomObjectsByIDByID");
      }

      var pathParams = {
        'object_type': objectType,
        'key': key
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
      var returnType = CustomObject;
      return this.apiClient.callApi(
        '/custom_objects/{object_type}/{key}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a global Custom Object from request body. Note that an existing global Custom Object with the same key will be overwritten by this action.
     * @param {String} objectType the ID of the object type
     * @param {String} key the key attribute value of the Custom Object
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomObject} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomObject}
     */
    this.putCustomObjectsByIDByID = function(objectType, key, opts) {
      return this.putCustomObjectsByIDByIDWithHttpInfo(objectType, key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
