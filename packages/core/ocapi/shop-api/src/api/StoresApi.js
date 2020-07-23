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
import Store from '../models/Store';
import StoreResult from '../models/StoreResult';

/**
* Stores service.
* @module api/StoresApi
* @version 20.8
*/
export default class StoresApi {

    /**
    * Constructs a new StoresApi. 
    * @alias module:api/StoresApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * This resource retrieves a list of stores, for the given site, that are within a configured distance of a location on the earth. The stores and their distance from the specified location are returned as a result set of Store objects. The distance is interpreted either in miles or kilometers depending on the distance_unit input parameter.  The location can be specified by either directly providing a latitude/longitude coordinate pair or by providing a country and a postal code:  If a postal code is passed, the resource looks in the system&#x27;s geolocation mappings to find the coordinates for this postal code. If no matching geolocation is found, the resource will return an empty list of stores. If coordinates are passed, the values for country and postal code are ignored. 
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/StoreResult} and HTTP response
     */
    getStoresWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'latitude': opts['latitude'],
        'longitude': opts['longitude'],
        'country_code': opts['countryCode'],
        'postal_code': opts['postalCode'],
        'distance_unit': opts['distanceUnit'],
        'max_distance': opts['maxDistance'],
        'start': opts['start'],
        'count': opts['count']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = StoreResult;

      return this.apiClient.callApi(
        '/stores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * This resource retrieves a list of stores, for the given site, that are within a configured distance of a location on the earth. The stores and their distance from the specified location are returned as a result set of Store objects. The distance is interpreted either in miles or kilometers depending on the distance_unit input parameter.  The location can be specified by either directly providing a latitude/longitude coordinate pair or by providing a country and a postal code:  If a postal code is passed, the resource looks in the system&#x27;s geolocation mappings to find the coordinates for this postal code. If no matching geolocation is found, the resource will return an empty list of stores. If coordinates are passed, the values for country and postal code are ignored. 
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/StoreResult}
     */
    getStores(opts) {
      return this.getStoresWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * To access a store, you construct a URL using the template shown below. This template requires you to specify a  store id. In the response, the server returns a corresponding store document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Store} and HTTP response
     */
    getStoresByIDWithHttpInfo(id) {
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

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = Store;

      return this.apiClient.callApi(
        '/stores/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * To access a store, you construct a URL using the template shown below. This template requires you to specify a  store id. In the response, the server returns a corresponding store document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Store}
     */
    getStoresByID(id) {
      return this.getStoresByIDWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/StoreResult} and HTTP response
     */
    getStoresByIDsWithHttpInfo(ids) {
      let postBody = null;

      let pathParams = {
        'ids': ids
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = StoreResult;

      return this.apiClient.callApi(
        '/stores/({ids})', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/StoreResult}
     */
    getStoresByIDs(ids) {
      return this.getStoresByIDsWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
