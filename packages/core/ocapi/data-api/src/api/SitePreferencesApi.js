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
    define(['ApiClient', 'model/PreferenceValue', 'model/PreferenceValueSearchResult', 'model/SearchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PreferenceValue'), require('../model/PreferenceValueSearchResult'), require('../model/SearchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SitePreferencesApi = factory(root.DataApi.ApiClient, root.DataApi.PreferenceValue, root.DataApi.PreferenceValueSearchResult, root.DataApi.SearchRequest);
  }
}(this, function(ApiClient, PreferenceValue, PreferenceValueSearchResult, SearchRequest) {
  'use strict';

  /**
   * SitePreferences service.
   * @module api/SitePreferencesApi
   * @version 20.8
   */

  /**
   * Constructs a new SitePreferencesApi. 
   * @alias module:api/SitePreferencesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a preference across sites in the specified preference group and instance.
     * @param {String} instanceType An instance type, one of {staging,development,sandbox,production}.
     * @param {String} groupId The ID of the preference group.
     * @param {String} preferenceId The ID of the preference to retrieve.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.maskPasswords 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PreferenceValue} and HTTP response
     */
    this.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByIDWithHttpInfo = function(instanceType, groupId, preferenceId, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'instanceType' is set
      if (instanceType === undefined || instanceType === null) {
        throw new Error("Missing the required parameter 'instanceType' when calling getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID");
      }
      // verify the required parameter 'preferenceId' is set
      if (preferenceId === undefined || preferenceId === null) {
        throw new Error("Missing the required parameter 'preferenceId' when calling getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID");
      }

      var pathParams = {
        'instance_type': instanceType,
        'group_id': groupId,
        'preference_id': preferenceId
      };
      var queryParams = {
        'mask_passwords': opts['maskPasswords'],
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
      var returnType = PreferenceValue;
      return this.apiClient.callApi(
        '/site_preferences/preference_groups/{group_id}/{instance_type}/preferences/{preference_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a preference across sites in the specified preference group and instance.
     * @param {String} instanceType An instance type, one of {staging,development,sandbox,production}.
     * @param {String} groupId The ID of the preference group.
     * @param {String} preferenceId The ID of the preference to retrieve.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.maskPasswords 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PreferenceValue}
     */
    this.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID = function(instanceType, groupId, preferenceId, opts) {
      return this.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByIDWithHttpInfo(instanceType, groupId, preferenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.
     * @param {String} instanceType An instance type, one of {staging,development,sandbox,production}.
     * @param {String} groupId The ID of the preference group.
     * @param {module:model/SearchRequest} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.maskPasswords 
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PreferenceValueSearchResult} and HTTP response
     */
    this.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearchWithHttpInfo = function(instanceType, groupId, body, opts) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'instanceType' is set
      if (instanceType === undefined || instanceType === null) {
        throw new Error("Missing the required parameter 'instanceType' when calling postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch");
      }
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch");
      }

      var pathParams = {
        'instance_type': instanceType,
        'group_id': groupId
      };
      var queryParams = {
        'mask_passwords': opts['maskPasswords'],
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

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json', 'text/xml', 'application/xml'];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = PreferenceValueSearchResult;
      return this.apiClient.callApi(
        '/site_preferences/preference_groups/{group_id}/{instance_type}/preference_search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.
     * @param {String} instanceType An instance type, one of {staging,development,sandbox,production}.
     * @param {String} groupId The ID of the preference group.
     * @param {module:model/SearchRequest} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.maskPasswords 
     * @param {Array.<String>} opts.expand 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PreferenceValueSearchResult}
     */
    this.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch = function(instanceType, groupId, body, opts) {
      return this.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearchWithHttpInfo(instanceType, groupId, body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
