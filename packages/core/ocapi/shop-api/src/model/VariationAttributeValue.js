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
    define(['ApiClient', 'model/Image'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.VariationAttributeValue = factory(root.ShopApi.ApiClient, root.ShopApi.Image);
  }
}(this, function(ApiClient, Image) {
  'use strict';



  /**
   * The VariationAttributeValue model module.
   * @module model/VariationAttributeValue
   * @version 20.8
   */

  /**
   * Constructs a new <code>VariationAttributeValue</code>.
   * Document representing a variation attribute value.
   * @alias module:model/VariationAttributeValue
   * @class
   * @param value {String} The actual variation value.
   */
  var exports = function(value) {
    var _this = this;

    _this['value'] = value;
  };

  /**
   * Constructs a <code>VariationAttributeValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationAttributeValue} obj Optional instance to populate.
   * @return {module:model/VariationAttributeValue} The populated <code>VariationAttributeValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('image_swatch')) {
        obj['image_swatch'] = Image.constructFromObject(data['image_swatch']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('orderable')) {
        obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * The localized description of the variation value.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/Image} image_swatch
   */
  exports.prototype['image_swatch'] = undefined;
  /**
   * The localized display name of the variation value.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A flag indicating whether at least one variant with this variation attribute value is available to sell.
   * @member {Boolean} orderable
   */
  exports.prototype['orderable'] = undefined;
  /**
   * The actual variation value.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


