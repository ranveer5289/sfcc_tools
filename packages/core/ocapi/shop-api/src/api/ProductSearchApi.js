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
import ProductSearchResult from '../models/ProductSearchResult';

/**
* ProductSearch service.
* @module api/ProductSearchApi
* @version 20.8
*/
export default class ProductSearchApi {

    /**
    * Constructs a new ProductSearchApi. 
    * @alias module:api/ProductSearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link and name in  the product search hit. Other search hit properties can be added by using the expand parameter. The search result  contains only products that are online and assigned to site catalog.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'expand': this.apiClient.buildCollectionParam(opts['expand'], 'csv'),
        'currency': opts['currency'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link and name in  the product search hit. Other search hit properties can be added by using the expand parameter. The search result  contains only products that are online and assigned to site catalog.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearch(opts) {
      return this.getProductSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  availability information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchAvailabilityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search/availability', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  availability information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchAvailability(opts) {
      return this.getProductSearchAvailabilityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  image information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchImagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  image information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchImages(opts) {
      return this.getProductSearchImagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchPricesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'currency': opts['currency'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search/prices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchPrices(opts) {
      return this.getProductSearchPricesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  represented product information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchRepresentedProductsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search/represented_products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  represented product information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchRepresentedProducts(opts) {
      return this.getProductSearchRepresentedProductsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.  This resource does not return detailed information about variation products. Use the   products resource to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ProductSearchResult} and HTTP response
     */
    getProductSearchVariationsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'refine': this.apiClient.buildCollectionParam(opts['refine'], 'csv'),
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = ProductSearchResult;

      return this.apiClient.callApi(
        '/product_search/variations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.  This resource does not return detailed information about variation products. Use the   products resource to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ProductSearchResult}
     */
    getProductSearchVariations(opts) {
      return this.getProductSearchVariationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}