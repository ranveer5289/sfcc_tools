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
    define(['ApiClient', 'model/ProductSearchResult', 'model/SearchRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProductSearchResult'), require('../model/SearchRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.ProductSearchApi = factory(root.DataApi.ApiClient, root.DataApi.ProductSearchResult, root.DataApi.SearchRequest);
  }
}(this, function(ApiClient, ProductSearchResult, SearchRequest) {
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
     * Searches for products.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     name - String     online - SiteSpecific Boolean     searchable - SiteSpecific Boolean      valid_from - SiteSpefic DateTime      valid_to - SiteSpecfic DateTime      type - ProductType      creation_date - DateTime    Catalog:       catalog_id - String    Category:       category_id - String    Special:       type - {\"item\", \"set, \"bundle\", \"master\", \"part_of_product_set\", \"bundled\", \"variant\", \"variation_group\", \"option\", \"retail_set\", \"part_of_retail_set\"}     The sortable properties are:    id - String  name - String  creation_date - DateTime     Note that catalog_id is the id of the catalog to which products are assigned to.   Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining id and catalog_id above, only a conjunction is allowed (AND), whereas id  and searchable can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The product search retrieves additional properties of the product when expansions are used.  The available expand attribute values are:            'all' will retrieve all the product properties.           'availability' will retrieve the following properties:             ats             in_stock             online                  'categories' will retrieve the following properties:             assigned_categories               'images' will retrieve the following properties:             image        'all_images' used with images will retrieve the following properties:             image             image_groups               'prices' will retrieve the following properties:             price             price_currency               'sets' will retrieve the following properties:             set_products             product_sets               'bundles' will retrieve the following properties:             product_bundles             bundled_products                    
     * @param {Object} opts Optional parameters
     * @param {String} opts.siteId The site context.
     * @param {module:model/SearchRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductSearchResult} and HTTP response
     */
    this.postProductSearchWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];

      var pathParams = {
      };
      var queryParams = {
        'site_id': opts['siteId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json', 'text/xml', 'application/xml'];
      var accepts = ['application/json', 'text/xml', 'application/xml'];
      var returnType = ProductSearchResult;
      return this.apiClient.callApi(
        '/product_search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Searches for products.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     name - String     online - SiteSpecific Boolean     searchable - SiteSpecific Boolean      valid_from - SiteSpefic DateTime      valid_to - SiteSpecfic DateTime      type - ProductType      creation_date - DateTime    Catalog:       catalog_id - String    Category:       category_id - String    Special:       type - {\"item\", \"set, \"bundle\", \"master\", \"part_of_product_set\", \"bundled\", \"variant\", \"variation_group\", \"option\", \"retail_set\", \"part_of_retail_set\"}     The sortable properties are:    id - String  name - String  creation_date - DateTime     Note that catalog_id is the id of the catalog to which products are assigned to.   Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining id and catalog_id above, only a conjunction is allowed (AND), whereas id  and searchable can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The product search retrieves additional properties of the product when expansions are used.  The available expand attribute values are:            'all' will retrieve all the product properties.           'availability' will retrieve the following properties:             ats             in_stock             online                  'categories' will retrieve the following properties:             assigned_categories               'images' will retrieve the following properties:             image        'all_images' used with images will retrieve the following properties:             image             image_groups               'prices' will retrieve the following properties:             price             price_currency               'sets' will retrieve the following properties:             set_products             product_sets               'bundles' will retrieve the following properties:             product_bundles             bundled_products                    
     * @param {Object} opts Optional parameters
     * @param {String} opts.siteId The site context.
     * @param {module:model/SearchRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductSearchResult}
     */
    this.postProductSearch = function(opts) {
      return this.postProductSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
