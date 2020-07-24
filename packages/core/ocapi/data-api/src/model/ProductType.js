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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.ProductType = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductType model module.
   * @module model/ProductType
   * @version 20.8
   */

  /**
   * Constructs a new <code>ProductType</code>.
   * Document representing a product type.
   * @alias module:model/ProductType
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductType} obj Optional instance to populate.
   * @return {module:model/ProductType} The populated <code>ProductType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bundle')) {
        obj['bundle'] = ApiClient.convertToType(data['bundle'], 'Boolean');
      }
      if (data.hasOwnProperty('bundled')) {
        obj['bundled'] = ApiClient.convertToType(data['bundled'], 'Boolean');
      }
      if (data.hasOwnProperty('item')) {
        obj['item'] = ApiClient.convertToType(data['item'], 'Boolean');
      }
      if (data.hasOwnProperty('master')) {
        obj['master'] = ApiClient.convertToType(data['master'], 'Boolean');
      }
      if (data.hasOwnProperty('option')) {
        obj['option'] = ApiClient.convertToType(data['option'], 'Boolean');
      }
      if (data.hasOwnProperty('part_of_product_set')) {
        obj['part_of_product_set'] = ApiClient.convertToType(data['part_of_product_set'], 'Boolean');
      }
      if (data.hasOwnProperty('part_of_retail_set')) {
        obj['part_of_retail_set'] = ApiClient.convertToType(data['part_of_retail_set'], 'Boolean');
      }
      if (data.hasOwnProperty('retail_set')) {
        obj['retail_set'] = ApiClient.convertToType(data['retail_set'], 'Boolean');
      }
      if (data.hasOwnProperty('set')) {
        obj['set'] = ApiClient.convertToType(data['set'], 'Boolean');
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'Boolean');
      }
      if (data.hasOwnProperty('variation_group')) {
        obj['variation_group'] = ApiClient.convertToType(data['variation_group'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A flag indicating whether the product is a bundle.
   * @member {Boolean} bundle
   */
  exports.prototype['bundle'] = undefined;
  /**
   * A flag indicating whether the product is bundled.
   * @member {Boolean} bundled
   */
  exports.prototype['bundled'] = undefined;
  /**
   * A flag indicating whether the product is a standard item.
   * @member {Boolean} item
   */
  exports.prototype['item'] = undefined;
  /**
   * A flag indicating whether the product is a master.
   * @member {Boolean} master
   */
  exports.prototype['master'] = undefined;
  /**
   * A flag indicating whether the product is an option.
   * @member {Boolean} option
   */
  exports.prototype['option'] = undefined;
  /**
   * A flag indicating whether the product is part of product set.
   * @member {Boolean} part_of_product_set
   */
  exports.prototype['part_of_product_set'] = undefined;
  /**
   * A flag indicating whether the product is part of retail set.
   * @member {Boolean} part_of_retail_set
   */
  exports.prototype['part_of_retail_set'] = undefined;
  /**
   * A flag indicating whether the product is a retail set.
   * @member {Boolean} retail_set
   */
  exports.prototype['retail_set'] = undefined;
  /**
   * A flag indicating whether the product is a set.
   * @member {Boolean} set
   */
  exports.prototype['set'] = undefined;
  /**
   * A flag indicating whether the product is a variant.
   * @member {Boolean} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * A flag indicating whether the product is a variation group.
   * @member {Boolean} variation_group
   */
  exports.prototype['variation_group'] = undefined;



  return exports;
}));


