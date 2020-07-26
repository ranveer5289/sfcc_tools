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
    define(['ApiClient', 'model/Image', 'model/ProductRef', 'model/ProductType', 'model/VariationAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./ProductRef'), require('./ProductType'), require('./VariationAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductSearchHit = factory(root.ShopApi.ApiClient, root.ShopApi.Image, root.ShopApi.ProductRef, root.ShopApi.ProductType, root.ShopApi.VariationAttribute);
  }
}(this, function(ApiClient, Image, ProductRef, ProductType, VariationAttribute) {
  'use strict';



  /**
   * The ProductSearchHit model module.
   * @module model/ProductSearchHit
   * @version 20.4
   */

  /**
   * Constructs a new <code>ProductSearchHit</code>.
   * Document representing a product search hit.
   * @alias module:model/ProductSearchHit
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ProductSearchHit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSearchHit} obj Optional instance to populate.
   * @return {module:model/ProductSearchHit} The populated <code>ProductSearchHit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('hit_type')) {
        obj['hit_type'] = ApiClient.convertToType(data['hit_type'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('orderable')) {
        obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_max')) {
        obj['price_max'] = ApiClient.convertToType(data['price_max'], 'Number');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('product_id')) {
        obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
      }
      if (data.hasOwnProperty('product_name')) {
        obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
      }
      if (data.hasOwnProperty('product_type')) {
        obj['product_type'] = ProductType.constructFromObject(data['product_type']);
      }
      if (data.hasOwnProperty('represented_product')) {
        obj['represented_product'] = ProductRef.constructFromObject(data['represented_product']);
      }
      if (data.hasOwnProperty('represented_products')) {
        obj['represented_products'] = ApiClient.convertToType(data['represented_products'], [ProductRef]);
      }
      if (data.hasOwnProperty('variation_attributes')) {
        obj['variation_attributes'] = ApiClient.convertToType(data['variation_attributes'], [VariationAttribute]);
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
   * The type information for the search hit.
   * @member {String} hit_type
   */
  exports.prototype['hit_type'] = undefined;
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
   * A flag indicating whether the product is orderable.
   * @member {Boolean} orderable
   */
  exports.prototype['orderable'] = undefined;
  /**
   * The sales price of the product. In case of complex products like master or set this is the minimum price of  related child products.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * The maximum sales of related child products in case of complex products like master or set.
   * @member {Number} price_max
   */
  exports.prototype['price_max'] = undefined;
  /**
   * The prices map with price book ids and their values.
   * @member {Object.<String, Number>} prices
   */
  exports.prototype['prices'] = undefined;
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
  /**
   * @member {module:model/ProductType} product_type
   */
  exports.prototype['product_type'] = undefined;
  /**
   * @member {module:model/ProductRef} represented_product
   */
  exports.prototype['represented_product'] = undefined;
  /**
   * All the represented products.
   * @member {Array.<module:model/ProductRef>} represented_products
   */
  exports.prototype['represented_products'] = undefined;
  /**
   * The array of represented variation attributes (for the master product only). This array can be empty.
   * @member {Array.<module:model/VariationAttribute>} variation_attributes
   */
  exports.prototype['variation_attributes'] = undefined;



  return exports;
}));


