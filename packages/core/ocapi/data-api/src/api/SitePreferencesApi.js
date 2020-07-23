/**
 * Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import PreferenceValue from '../models/PreferenceValue';
import PreferenceValueSearchResult from '../models/PreferenceValueSearchResult';
import SearchRequest from '../models/SearchRequest';

/**
* SitePreferences service.
* @module api/SitePreferencesApi
* @version 20.8
*/
export default class SitePreferencesApi {

    /**
    * Constructs a new SitePreferencesApi. 
    * @alias module:api/SitePreferencesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a preference across sites in the specified preference group and instance.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/PreferenceValue} and HTTP response
     */
    getSitePreferencesPreferenceGroupsByIDByIDPreferencesByIDWithHttpInfo(instanceType, groupId, preferenceId, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'instance_type': instanceType,
        'group_id': groupId,
        'preference_id': preferenceId
      };
      let queryParams = {
        'mask_passwords': opts['maskPasswords']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = PreferenceValue;

      return this.apiClient.callApi(
        '/site_preferences/preference_groups/{group_id}/{instance_type}/preferences/{preference_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a preference across sites in the specified preference group and instance.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/PreferenceValue}
     */
    getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID(instanceType, groupId, preferenceId, opts) {
      return this.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByIDWithHttpInfo(instanceType, groupId, preferenceId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/PreferenceValueSearchResult} and HTTP response
     */
    postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearchWithHttpInfo(body, instanceType, groupId, opts) {
      opts = opts || {};
      let postBody = body;

      let pathParams = {
        'instance_type': instanceType,
        'group_id': groupId
      };
      let queryParams = {
        'mask_passwords': opts['maskPasswords'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = PreferenceValueSearchResult;

      return this.apiClient.callApi(
        '/site_preferences/preference_groups/{group_id}/{instance_type}/preference_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/PreferenceValueSearchResult}
     */
    postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch(body, instanceType, groupId, opts) {
      return this.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearchWithHttpInfo(body, instanceType, groupId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
