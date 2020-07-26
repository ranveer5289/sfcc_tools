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
    define(['ApiClient', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.SuggestedProduct = factory(root.ShopApi.ApiClient, root.ShopApi.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';



  /**
   * The SuggestedProduct model module.
   * @module model/SuggestedProduct
   * @version 20.4
   */

  /**
   * Constructs a new <code>SuggestedProduct</code>.
   * Document representing a product search hit.
   * @alias module:model/SuggestedProduct
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SuggestedProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestedProduct} obj Optional instance to populate.
   * @return {module:model/SuggestedProduct} The populated <code>SuggestedProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('product_name')) {
        obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ISO 4217 mnemonic code of the currency.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The URL addressing the product.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The sales price of the product. In the case of complex products like a master or a set, this is the minimum price of  related child products.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The id (SKU) of the product.
   * @member {String} product_id
   */
  exports.prototype['product_id'] = undefined;
  /**
   * The localized name of the product.
   * @member {String} product_name
   */
  exports.prototype['product_name'] = undefined;



  return exports;
}));


