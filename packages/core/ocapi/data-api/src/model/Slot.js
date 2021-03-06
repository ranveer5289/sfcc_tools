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
    define(['ApiClient', 'model/SlotConfiguration'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SlotConfiguration'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Slot = factory(root.DataApi.ApiClient, root.DataApi.SlotConfiguration);
  }
}(this, function(ApiClient, SlotConfiguration) {
  'use strict';



  /**
   * The Slot model module.
   * @module model/Slot
   * @version 20.4
   */

  /**
   * Constructs a new <code>Slot</code>.
   * Document representing a slot
   * @alias module:model/Slot
   * @class
   * @param slotId {String} The id for the slot
   */
  var exports = function(slotId) {
    var _this = this;

    _this['slot_id'] = slotId;
  };

  /**
   * Constructs a <code>Slot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Slot} obj Optional instance to populate.
   * @return {module:model/Slot} The populated <code>Slot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('context_type')) {
        obj['context_type'] = ApiClient.convertToType(data['context_type'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('preview_url')) {
        obj['preview_url'] = ApiClient.convertToType(data['preview_url'], 'String');
      }
      if (data.hasOwnProperty('slot_configurations')) {
        obj['slot_configurations'] = ApiClient.convertToType(data['slot_configurations'], [SlotConfiguration]);
      }
      if (data.hasOwnProperty('slot_id')) {
        obj['slot_id'] = ApiClient.convertToType(data['slot_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * A slot context
   * @member {module:model/Slot.ContextTypeEnum} context_type
   */
  exports.prototype['context_type'] = undefined;
  /**
   * The user supplied description of the slot
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A link to the slot
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * A preview URL the slot
   * @member {String} preview_url
   */
  exports.prototype['preview_url'] = undefined;
  /**
   * A list of slotconfigurations this slot has
   * @member {Array.<module:model/SlotConfiguration>} slot_configurations
   */
  exports.prototype['slot_configurations'] = undefined;
  /**
   * The id for the slot
   * @member {String} slot_id
   */
  exports.prototype['slot_id'] = undefined;


  /**
   * Allowed values for the <code>context_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContextTypeEnum = {
    /**
     * value: "global"
     * @const
     */
    "global": "global",
    /**
     * value: "category"
     * @const
     */
    "category": "category",
    /**
     * value: "folder"
     * @const
     */
    "folder": "folder"  };


  return exports;
}));


