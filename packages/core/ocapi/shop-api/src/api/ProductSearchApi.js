/**
 * Shop API
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
    define(['ApiClient', 'model/ProductSearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductSearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductSearchApi = factory(root.ShopApi.ApiClient, root.ShopApi.ProductSearchResult);
  }
}(this, function(ApiClient, ProductSearchResult) {
  'use strict';

  /**
   * ProductSearch service.
   * @module api/ProductSearchApi
   * @version 20.8
   */

  /**
   * Constructs a new ProductSearchApi. 
   * @alias module:api/ProductSearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link and name in  the product search hit. Other search hit properties can be added by using the expand parameter. The search result  contains only products that are online and assigned to site catalog.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             htypes: Allow to refine by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {Array.<String>} opts.expand The expand parameter. A comma separated list with the allowed values (availability, images,             prices, represented_products, variations)
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'currency': opts['currency'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link and name in  the product search hit. Other search hit properties can be added by using the expand parameter. The search result  contains only products that are online and assigned to site catalog.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             htypes: Allow to refine by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {Array.<String>} opts.expand The expand parameter. A comma separated list with the allowed values (availability, images,             prices, represented_products, variations)
     * @param {String} opts.currency The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearch = function(opts) {
      return this.getProductSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  availability information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchAvailabilityWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search/availability', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  availability information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearchAvailability = function(opts) {
      return this.getProductSearchAvailabilityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  image information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchImagesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  image information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearchImages = function(opts) {
      return this.getProductSearchImagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.currency The currency mnemonic specified for price.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchPricesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'currency': opts['currency'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.currency The currency mnemonic specified for price.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearchPrices = function(opts) {
      return this.getProductSearchPricesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  represented product information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchRepresentedProductsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search/represented_products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  represented product information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearchRepresentedProducts = function(opts) {
      return this.getProductSearchRepresentedProductsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.  This resource does not return detailed information about variation products. Use the   products resource to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.getProductSearchVariationsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort'],
        'start': opts['start'],
        'count': opts['count'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'refine': {
          value: opts['refine'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search/variations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.  This resource does not return detailed information about variation products. Use the   products resource to retrieve more details about a variation product.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q The query phrase to search for.
     * @param {Array.<String>} opts.refine Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
     * @param {String} opts.sort The id of the sorting option to sort the search hits.
     * @param {Number} opts.start The result set index to return the first instance for. Default value is 0.
     * @param {Number} opts.count The maximum number of instances per request. Default value is 25.
     * @param {String} opts.locale The locale context.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.getProductSearchVariations = function(opts) {
      return this.getProductSearchVariationsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
