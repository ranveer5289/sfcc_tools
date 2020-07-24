/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
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
    define(['ApiClient', 'model/Product', 'model/ProductResult', 'model/ShippingMethodResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Product'), require('../model/ProductResult'), require('../model/ShippingMethodResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductsApi = factory(root.ShopApi.ApiClient, root.ShopApi.Product, root.ShopApi.ProductResult, root.ShopApi.ShippingMethodResult);
  }
}(this, function(ApiClient, Product, ProductResult, ShippingMethodResult) {
  'use strict';

  /**
   * Products service.
   * @module api/ProductsApi
   * @version 20.8
   */

  /**
   * Constructs a new ProductsApi. 
   * @alias module:api/ProductsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * To access single products resource, you construct a URL using the template shown below. This template requires  you to specify an Id (typically a SKU) for a product. In response, the server returns a corresponding Product  document, provided the product is online and assigned to site catalog. The document contains variation attributes  (including values) and the variant matrix; this data is provided for both the master and for the variant.
     * @param {String} id The id of the requested product.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @param {Boolean} opts.allImages 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByID");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'currency': opts['currency'],
        'locale': opts['locale'],
        'all_images': opts['allImages'],
      };
      var collectionQueryParams = {
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
        'inventory_ids': {
          value: opts['inventoryIds'],
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
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * To access single products resource, you construct a URL using the template shown below. This template requires  you to specify an Id (typically a SKU) for a product. In response, the server returns a corresponding Product  document, provided the product is online and assigned to site catalog. The document contains variation attributes  (including values) and the variant matrix; this data is provided for both the master and for the variant.
     * @param {String} id The id of the requested product.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @param {Boolean} opts.allImages 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByID = function(id, opts) {
      return this.getProductsByIDWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product availability information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDAvailabilityWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDAvailability");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'inventory_ids': {
          value: opts['inventoryIds'],
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
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/availability', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product availability information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDAvailability = function(id, opts) {
      return this.getProductsByIDAvailabilityWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access bundled product information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDBundledProductsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDBundledProducts");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/bundled_products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access bundled product information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDBundledProducts = function(id, opts) {
      return this.getProductsByIDBundledProductsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product image information of products that are online and assigned to site catalog. Filter the result by  view type and variation values.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.viewType 
     * @param {Boolean} opts.allImages 
     * @param {String} opts.variationAttribute 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDImagesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDImages");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'all_images': opts['allImages'],
        'variation_attribute': opts['variationAttribute'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
        'view_type': {
          value: opts['viewType'],
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
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/images', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product image information of products that are online and assigned to site catalog. Filter the result by  view type and variation values.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.viewType 
     * @param {Boolean} opts.allImages 
     * @param {String} opts.variationAttribute 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDImages = function(id, opts) {
      return this.getProductsByIDImagesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product link information of products that are online and assigned to site catalog. Filter the result by  link type and link direction.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @param {String} opts.direction 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDLinksWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDLinks");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'type': opts['type'],
        'direction': opts['direction'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/links', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product link information of products that are online and assigned to site catalog. Filter the result by  link type and link direction.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type 
     * @param {String} opts.direction 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDLinks = function(id, opts) {
      return this.getProductsByIDLinksWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product option information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDOptionsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDOptions");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product option information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDOptions = function(id, opts) {
      return this.getProductsByIDOptionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product price information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDPricesWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDPrices");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product price information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDPrices = function(id, opts) {
      return this.getProductsByIDPricesWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product promotion information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDPromotionsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDPromotions");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'currency': opts['currency'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/promotions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product promotion information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDPromotions = function(id, opts) {
      return this.getProductsByIDPromotionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product recommendation information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.recommendationType 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDRecommendationsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDRecommendations");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'recommendation_type': opts['recommendationType'],
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/recommendations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product recommendation information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.recommendationType 
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDRecommendations = function(id, opts) {
      return this.getProductsByIDRecommendationsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product set information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDSetProductsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDSetProducts");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/set_products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product set information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDSetProducts = function(id, opts) {
      return this.getProductsByIDSetProductsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves the applicable shipping methods for a certain product.
     * @param {String} id the requested product id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShippingMethodResult} and HTTP response
     */
    this.getProductsByIDShippingMethodsWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDShippingMethods");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth', 'oauth2_application'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ShippingMethodResult;
      return this.apiClient.callApi(
        '/products/{id}/shipping_methods', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the applicable shipping methods for a certain product.
     * @param {String} id the requested product id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShippingMethodResult}
     */
    this.getProductsByIDShippingMethods = function(id) {
      return this.getProductsByIDShippingMethodsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Access product variation information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Product} and HTTP response
     */
    this.getProductsByIDVariationsWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductsByIDVariations");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'locale': opts['locale'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['client_id', 'customers_auth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = Product;
      return this.apiClient.callApi(
        '/products/{id}/variations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Access product variation information of products that are online and assigned to site catalog.
     * @param {String} id The requested product id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Product}
     */
    this.getProductsByIDVariations = function(id, opts) {
      return this.getProductsByIDVariationsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @param {Boolean} opts.allImages 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductResult} and HTTP response
     */
    this.getProductsByIDsWithHttpInfo = function(ids, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getProductsByIDs");
      }

      var pathParams = {
        'ids': ids
      };
      var queryParams = {
        'currency': opts['currency'],
        'locale': opts['locale'],
        'all_images': opts['allImages'],
      };
      var collectionQueryParams = {
        'expand': {
          value: opts['expand'],
          collectionFormat: 'csv'
        },
        'inventory_ids': {
          value: opts['inventoryIds'],
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
      var returnType = ProductResult;
      return this.apiClient.callApi(
        '/products/({ids})', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Array.<String>} ids 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand 
     * @param {Array.<String>} opts.inventoryIds 
     * @param {String} opts.currency 
     * @param {String} opts.locale 
     * @param {Boolean} opts.allImages 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductResult}
     */
    this.getProductsByIDs = function(ids, opts) {
      return this.getProductsByIDsWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
