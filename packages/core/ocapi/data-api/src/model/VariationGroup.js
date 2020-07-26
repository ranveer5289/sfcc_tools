/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.4
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.VariationGroup = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The VariationGroup model module.
   * @module model/VariationGroup
   * @version 20.4
   */

  /**
   * Constructs a new <code>VariationGroup</code>.
   * Document representing a variation group.
   * @alias module:model/VariationGroup
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>VariationGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationGroup} obj Optional instance to populate.
   * @return {module:model/VariationGroup} The populated <code>VariationGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('orderable')) {
        obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('variation_values')) {
        obj['variation_values'] = ApiClient.convertToType(data['variation_values'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The URL addressing the product.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * A flag indicating whether the variation group is orderable.
   * @member {Boolean} orderable
   */
  exports.prototype['orderable'] = undefined;
  /**
   * The sales price of the variation group.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The id (SKU) of the variation group.
   * @member {String} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The actual variation attribute id - value pairs.
   * @member {Object.<String, String>} variation_values
   */
  exports.prototype['variation_values'] = undefined;



  return exports;
}));


