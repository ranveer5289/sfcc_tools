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
import EcdnLogFetchRequest from '../models/EcdnLogFetchRequest';
import EcdnLogFetchResponse from '../models/EcdnLogFetchResponse';

/**
* LogRequests service.
* @module api/LogRequestsApi
* @version 20.8
*/
export default class LogRequestsApi {

    /**
    * Constructs a new LogRequestsApi. 
    * @alias module:api/LogRequestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves the current execution status of the log file fetching.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/EcdnLogFetchResponse} and HTTP response
     */
    getLogRequestsEcdnByIDWithHttpInfo(id) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = EcdnLogFetchResponse;

      return this.apiClient.callApi(
        '/log_requests/ecdn/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieves the current execution status of the log file fetching.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/EcdnLogFetchResponse}
     */
    getLogRequestsEcdnByID(id) {
      return this.getLogRequestsEcdnByIDWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests a LogFile-Fetching for the passed zone and time frame.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/EcdnLogFetchResponse} and HTTP response
     */
    postLogRequestsEcdnWithHttpInfo(body) {
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
      let returnType = EcdnLogFetchResponse;

      return this.apiClient.callApi(
        '/log_requests/ecdn', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Requests a LogFile-Fetching for the passed zone and time frame.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/EcdnLogFetchResponse}
     */
    postLogRequestsEcdn(body) {
      return this.postLogRequestsEcdnWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
