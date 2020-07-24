/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MarkupText', 'model/Schedule', 'model/SlotConfigurationAssignmentInformation', 'model/SlotContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MarkupText'), require('./Schedule'), require('./SlotConfigurationAssignmentInformation'), require('./SlotContent'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SlotConfiguration = factory(root.DataApi.ApiClient, root.DataApi.MarkupText, root.DataApi.Schedule, root.DataApi.SlotConfigurationAssignmentInformation, root.DataApi.SlotContent);
  }
}(this, function(ApiClient, MarkupText, Schedule, SlotConfigurationAssignmentInformation, SlotContent) {
  'use strict';



  /**
   * The SlotConfiguration model module.
   * @module model/SlotConfiguration
   * @version 20.8
   */

  /**
   * Constructs a new <code>SlotConfiguration</code>.
   * Document representing a slot configuration.
   * @alias module:model/SlotConfiguration
   * @class
   * @param configurationId {String} The id of this configuration.
   * @param context {module:model/SlotConfiguration.ContextEnum} The context of the slot. Ignored in input documents.
   * @param slotContent {module:model/SlotContent} 
   * @param slotId {String} The ID of the slot. Ignored in input documents.
   */
  var exports = function(configurationId, context, slotContent, slotId) {
    var _this = this;

    _this['configuration_id'] = configurationId;
    _this['context'] = context;
    _this['slot_content'] = slotContent;
    _this['slot_id'] = slotId;
  };

  /**
   * Constructs a <code>SlotConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlotConfiguration} obj Optional instance to populate.
   * @return {module:model/SlotConfiguration} The populated <code>SlotConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assignment_information')) {
        obj['assignment_information'] = SlotConfigurationAssignmentInformation.constructFromObject(data['assignment_information']);
      }
      if (data.hasOwnProperty('callout_msg')) {
        obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], {'String': MarkupText});
      }
      if (data.hasOwnProperty('configuration_id')) {
        obj['configuration_id'] = ApiClient.convertToType(data['configuration_id'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], 'String');
      }
      if (data.hasOwnProperty('context_id')) {
        obj['context_id'] = ApiClient.convertToType(data['context_id'], 'String');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('customer_groups')) {
        obj['customer_groups'] = ApiClient.convertToType(data['customer_groups'], ['String']);
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = Schedule.constructFromObject(data['schedule']);
      }
      if (data.hasOwnProperty('slot_content')) {
        obj['slot_content'] = SlotContent.constructFromObject(data['slot_content']);
      }
      if (data.hasOwnProperty('slot_id')) {
        obj['slot_id'] = ApiClient.convertToType(data['slot_id'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SlotConfigurationAssignmentInformation} assignment_information
   */
  exports.prototype['assignment_information'] = undefined;
  /**
   * The call out message.
   * @member {Object.<String, module:model/MarkupText>} callout_msg
   */
  exports.prototype['callout_msg'] = undefined;
  /**
   * The id of this configuration.
   * @member {String} configuration_id
   */
  exports.prototype['configuration_id'] = undefined;
  /**
   * The context of the slot. Ignored in input documents.
   * @member {module:model/SlotConfiguration.ContextEnum} context
   */
  exports.prototype['context'] = undefined;
  /**
   * When the context is category, this is a category_id; when  the context is folder, this is a folder_id; and when the  context is global, this is obsolete. This is ignored in input documents.
   * @member {String} context_id
   */
  exports.prototype['context_id'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The customer groups ids.
   * @member {Array.<String>} customer_groups
   */
  exports.prototype['customer_groups'] = undefined;
  /**
   * A flag indicating whether the configuration is the default one for the slot.
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * The configuration description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * A flag indicating whether the slot is enabled.
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * The link.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The rank of the slot configuration on its slot. This rank has nothing to do with the rank  on any campaign-assignment, because these are completely different objects. These must be  updated separately.
   * @member {module:model/SlotConfiguration.RankEnum} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * @member {module:model/Schedule} schedule
   */
  exports.prototype['schedule'] = undefined;
  /**
   * @member {module:model/SlotContent} slot_content
   */
  exports.prototype['slot_content'] = undefined;
  /**
   * The ID of the slot. Ignored in input documents.
   * @member {String} slot_id
   */
  exports.prototype['slot_id'] = undefined;
  /**
   * The template.
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * The uuid of the slot configuration. This property cannot be written  and is ignored in input documents.
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;


  /**
   * Allowed values for the <code>context</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ContextEnum = {
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

  /**
   * Allowed values for the <code>rank</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.RankEnum = {
    /**
     * value: 10
     * @const
     */
    "10": 10,
    /**
     * value: 20
     * @const
     */
    "20": 20,
    /**
     * value: 30
     * @const
     */
    "30": 30,
    /**
     * value: 40
     * @const
     */
    "40": 40,
    /**
     * value: 50
     * @const
     */
    "50": 50,
    /**
     * value: 60
     * @const
     */
    "60": 60,
    /**
     * value: 70
     * @const
     */
    "70": 70,
    /**
     * value: 80
     * @const
     */
    "80": 80,
    /**
     * value: 90
     * @const
     */
    "90": 90,
    /**
     * value: 100
     * @const
     */
    "100": 100  };


  return exports;
}));

