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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.AlertItem = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AlertItem model module.
   * @module model/AlertItem
   * @version 20.8
   */

  /**
   * Constructs a new <code>AlertItem</code>.
   * Document describing a single alert.
   * @alias module:model/AlertItem
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AlertItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertItem} obj Optional instance to populate.
   * @return {module:model/AlertItem} The populated <code>AlertItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('application_context_path')) {
        obj['application_context_path'] = ApiClient.convertToType(data['application_context_path'], 'String');
      }
      if (data.hasOwnProperty('application_id')) {
        obj['application_id'] = ApiClient.convertToType(data['application_id'], 'String');
      }
      if (data.hasOwnProperty('context_object_id')) {
        obj['context_object_id'] = ApiClient.convertToType(data['context_object_id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('display_message')) {
        obj['display_message'] = ApiClient.convertToType(data['display_message'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('remediation_action')) {
        obj['remediation_action'] = ApiClient.convertToType(data['remediation_action'], 'String');
      }
      if (data.hasOwnProperty('user_priority')) {
        obj['user_priority'] = ApiClient.convertToType(data['user_priority'], 'String');
      }
    }
    return obj;
  }

  /**
   * The application context path.
   * @member {String} application_context_path
   */
  exports.prototype['application_context_path'] = undefined;
  /**
   * The application ID.
   * @member {String} application_id
   */
  exports.prototype['application_id'] = undefined;
  /**
   * The context object id.
   * @member {String} context_object_id
   */
  exports.prototype['context_object_id'] = undefined;
  /**
   * The description.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The display message.
   * @member {String} display_message
   */
  exports.prototype['display_message'] = undefined;
  /**
   * URL for this resource.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The message ID.
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * The remediation action.
   * @member {String} remediation_action
   */
  exports.prototype['remediation_action'] = undefined;
  /**
   * The user priority.
   * @member {module:model/AlertItem.UserPriorityEnum} user_priority
   */
  exports.prototype['user_priority'] = undefined;


  /**
   * Allowed values for the <code>user_priority</code> property.
   * @enum {String}
   * @readonly
   */
  exports.UserPriorityEnum = {
    /**
     * value: "not_allowed"
     * @const
     */
    "not_allowed": "not_allowed",
    /**
     * value: "hidden"
     * @const
     */
    "hidden": "hidden",
    /**
     * value: "informational"
     * @const
     */
    "informational": "informational",
    /**
     * value: "warning"
     * @const
     */
    "warning": "warning",
    /**
     * value: "action_required"
     * @const
     */
    "action_required": "action_required"  };


  return exports;
}));


