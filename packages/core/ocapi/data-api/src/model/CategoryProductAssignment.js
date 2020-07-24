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
    define(['ApiClient', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CategoryProductAssignment = factory(root.DataApi.ApiClient, root.DataApi.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';



  /**
   * The CategoryProductAssignment model module.
   * @module model/CategoryProductAssignment
   * @version 20.8
   */

  /**
   * Constructs a new <code>CategoryProductAssignment</code>.
   * Document representing a category product assignment.
   * @alias module:model/CategoryProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CategoryProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CategoryProductAssignment} obj Optional instance to populate.
   * @return {module:model/CategoryProductAssignment} The populated <code>CategoryProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('catalog_id')) {
        obj['catalog_id'] = ApiClient.convertToType(data['catalog_id'], 'String');
      }
      if (data.hasOwnProperty('category_id')) {
        obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('owning_catalog_name')) {
        obj['owning_catalog_name'] = ApiClient.convertToType(data['owning_catalog_name'], {'String': 'String'});
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = Product.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('product_name')) {
        obj['product_name'] = ApiClient.convertToType(data['product_name'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The id of the catalog.
   * @member {String} catalog_id
   */
  exports.prototype['catalog_id'] = undefined;
  /**
   * The id of the category.
   * @member {String} category_id
   */
  exports.prototype['category_id'] = undefined;
  /**
   * The URL used to get the product category assignment.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The name of the catalog that owns the product.
   * @member {Object.<String, String>} owning_catalog_name
   */
  exports.prototype['owning_catalog_name'] = undefined;
  /**
   * The position of product category assignment.
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {module:model/Product} product
   */
  exports.prototype['product'] = undefined;
  /**
   * The id of the Product.
   * @member {String} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The name of the product.
   * @member {Object.<String, String>} product_name
   */
  exports.prototype['product_name'] = undefined;



  return exports;
}));

