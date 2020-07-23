/**
 * Shop API
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
import GiftCertificate from '../models/GiftCertificate';
import GiftCertificateRequest from '../models/GiftCertificateRequest';

/**
* GiftCertificate service.
* @module api/GiftCertificateApi
* @version 20.8
*/
export default class GiftCertificateApi {

    /**
    * Constructs a new GiftCertificateApi. 
    * @alias module:api/GiftCertificateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Action to retrieve an existing gift certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GiftCertificate} and HTTP response
     */
    postGiftCertificateWithHttpInfo(opts) {
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth', 'oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = GiftCertificate;

      return this.apiClient.callApi(
        '/gift_certificate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to retrieve an existing gift certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GiftCertificate}
     */
    postGiftCertificate(opts) {
      return this.postGiftCertificateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
