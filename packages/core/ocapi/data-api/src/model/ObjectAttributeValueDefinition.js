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
    root.DataApi.ObjectAttributeValueDefinition = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ObjectAttributeValueDefinition model module.
   * @module model/ObjectAttributeValueDefinition
   * @version 20.4
   */

  /**
   * Constructs a new <code>ObjectAttributeValueDefinition</code>.
   * Document representing a attribute definition
   * @alias module:model/ObjectAttributeValueDefinition
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ObjectAttributeValueDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectAttributeValueDefinition} obj Optional instance to populate.
   * @return {module:model/ObjectAttributeValueDefinition} The populated <code>ObjectAttributeValueDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
      }
      if (data.hasOwnProperty('display_value')) {
        obj['display_value'] = ApiClient.convertToType(data['display_value'], {'String': 'String'});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * A description of the attribute value.
   * @member {Object.<String, String>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A display name that can be used to present this value in  the user interface. For example, the value might be '1' but the display  name might be 'Order Exported'.
   * @member {Object.<String, String>} display_value
   */
  exports.prototype['display_value'] = undefined;
  /**
   * The ID of the attribute value.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The position of the attribute value within the set of attribute values.
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * The value of the attribute.
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


