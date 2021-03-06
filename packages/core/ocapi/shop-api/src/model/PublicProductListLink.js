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
    root.ShopApi.PublicProductListLink = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PublicProductListLink model module.
   * @module model/PublicProductListLink
   * @version 20.4
   */

  /**
   * Constructs a new <code>PublicProductListLink</code>.
   * Document representing a link to a public product list.
   * @alias module:model/PublicProductListLink
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PublicProductListLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicProductListLink} obj Optional instance to populate.
   * @return {module:model/PublicProductListLink} The populated <code>PublicProductListLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description of this product list.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The target of the link.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The name of this product list.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The link title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The type of the product list.
   * @member {module:model/PublicProductListLink.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "wish_list"
     * @const
     */
    "wish_list": "wish_list",
    /**
     * value: "gift_registry"
     * @const
     */
    "gift_registry": "gift_registry",
    /**
     * value: "shopping_list"
     * @const
     */
    "shopping_list": "shopping_list",
    /**
     * value: "custom_1"
     * @const
     */
    "custom_1": "custom_1",
    /**
     * value: "custom_2"
     * @const
     */
    "custom_2": "custom_2",
    /**
     * value: "custom_3"
     * @const
     */
    "custom_3": "custom_3"  };


  return exports;
}));


