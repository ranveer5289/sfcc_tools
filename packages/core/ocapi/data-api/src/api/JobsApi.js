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
import JobExecution from '../models/JobExecution';
import JobExecutionRequest from '../models/JobExecutionRequest';

/**
* Jobs service.
* @module api/JobsApi
* @version 20.8
*/
export default class JobsApi {

    /**
    * Constructs a new JobsApi. 
    * @alias module:api/JobsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes job execution information using the specified ID for the job having the specified job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteJobsByIDExecutionsByIDWithHttpInfo(jobId, id) {
      let postBody = null;

      let pathParams = {
        'job_id': jobId,
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
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/jobs/{job_id}/executions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes job execution information using the specified ID for the job having the specified job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteJobsByIDExecutionsByID(jobId, id) {
      return this.deleteJobsByIDExecutionsByIDWithHttpInfo(jobId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns job execution information using the specified ID for the job having the specified job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/JobExecution} and HTTP response
     */
    getJobsByIDExecutionsByIDWithHttpInfo(jobId, id) {
      let postBody = null;

      let pathParams = {
        'job_id': jobId,
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
      let returnType = JobExecution;

      return this.apiClient.callApi(
        '/jobs/{job_id}/executions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns job execution information using the specified ID for the job having the specified job ID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/JobExecution}
     */
    getJobsByIDExecutionsByID(jobId, id) {
      return this.getJobsByIDExecutionsByIDWithHttpInfo(jobId, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Executes the job with the given job ID by creating and returning a job execution for it. The job might still be  executed when the job execution is returned. Note that this resource is also intended for running system jobs.    See Global Jobs for information on available system jobs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/JobExecution} and HTTP response
     */
    postJobsByIDExecutionsWithHttpInfo(jobId, opts) {
      let postBody = opts['body'];

      let pathParams = {
        'job_id': jobId
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
      let returnType = JobExecution;

      return this.apiClient.callApi(
        '/jobs/{job_id}/executions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Executes the job with the given job ID by creating and returning a job execution for it. The job might still be  executed when the job execution is returned. Note that this resource is also intended for running system jobs.    See Global Jobs for information on available system jobs.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/JobExecution}
     */
    postJobsByIDExecutions(jobId, opts) {
      return this.postJobsByIDExecutionsWithHttpInfo(jobId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}