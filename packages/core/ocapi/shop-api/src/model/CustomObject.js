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
    root.ShopApi.CustomObject = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CustomObject model module.
   * @module model/CustomObject
   * @version 20.4
   */

  /**
   * Constructs a new <code>CustomObject</code>.
   * Document representing a custom object that contains all defined custom attributes for its  object type.
   * @alias module:model/CustomObject
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomObject} obj Optional instance to populate.
   * @return {module:model/CustomObject} The populated <code>CustomObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key_property')) {
        obj['key_property'] = ApiClient.convertToType(data['key_property'], 'String');
      }
      if (data.hasOwnProperty('key_value_integer')) {
        obj['key_value_integer'] = ApiClient.convertToType(data['key_value_integer'], 'Number');
      }
      if (data.hasOwnProperty('key_value_string')) {
        obj['key_value_string'] = ApiClient.convertToType(data['key_value_string'], 'String');
      }
      if (data.hasOwnProperty('object_type')) {
        obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the key property for the custom object.
   * @member {String} key_property
   */
  exports.prototype['key_property'] = undefined;
  /**
   * The id of the custom object when the type of the key is Integer.
   * @member {Number} key_value_integer
   */
  exports.prototype['key_value_integer'] = undefined;
  /**
   * The id of the custom object when the type of the key is String.
   * @member {String} key_value_string
   */
  exports.prototype['key_value_string'] = undefined;
  /**
   * The id of the object type.
   * @member {String} object_type
   */
  exports.prototype['object_type'] = undefined;



  return exports;
}));


