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
import SearchRequest from '../models/SearchRequest';
import SiteSearchResult from '../models/SiteSearchResult';

/**
* SiteSearch service.
* @module api/SiteSearchApi
* @version 20.8
*/
export default class SiteSearchApi {

    /**
    * Constructs a new SiteSearchApi. 
    * @alias module:api/SiteSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SiteSearchResult} and HTTP response
     */
    postSiteSearchWithHttpInfo(body) {
      let postBody = body;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = SiteSearchResult;

      return this.apiClient.callApi(
        '/site_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SiteSearchResult}
     */
    postSiteSearch(body) {
      return this.postSiteSearchWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
