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
    root.ShopApi.ProductRef = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ProductRef model module.
   * @module model/ProductRef
   * @version 20.4
   */

  /**
   * Constructs a new <code>ProductRef</code>.
   * Document representing a product reference.
   * @alias module:model/ProductRef
   * @class
   * @param id {String} The ID of the product reference.
   * @param link {String} The link to the product reference.
   */
  var exports = function(id, link) {
    var _this = this;

    _this['id'] = id;
    _this['link'] = link;
  };

  /**
   * Constructs a <code>ProductRef</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductRef} obj Optional instance to populate.
   * @return {module:model/ProductRef} The populated <code>ProductRef</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of the product reference.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The link to the product reference.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;



  return exports;
}));


