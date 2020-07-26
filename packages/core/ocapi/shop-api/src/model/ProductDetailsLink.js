/**
 * Shop API
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
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductDetailsLink = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductDetailsLink model module.
   * @module model/ProductDetailsLink
   * @version 20.4
   */

  /**
   * Constructs a new <code>ProductDetailsLink</code>.
   * Document representing a link to the resource for product details.
   * @alias module:model/ProductDetailsLink
   * @class
   * @param productId {String} The id of the product.
   */
  var exports = function(productId) {
    var _this = this;

    _this['product_id'] = productId;
  };

  /**
   * Constructs a <code>ProductDetailsLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductDetailsLink} obj Optional instance to populate.
   * @return {module:model/ProductDetailsLink} The populated <code>ProductDetailsLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('product_description')) {
        obj['product_description'] = ApiClient.convertToType(data['product_description'], 'String');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('product_name')) {
        obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * The target of the link.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The description of the product.
   * @member {String} product_description
   */
  exports.prototype['product_description'] = undefined;
  /**
   * The id of the product.
   * @member {String} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The name of the product.
   * @member {String} product_name
   */
  exports.prototype['product_name'] = undefined;
  /**
   * The link title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


