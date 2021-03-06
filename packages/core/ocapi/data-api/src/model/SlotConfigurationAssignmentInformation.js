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
    define(['ApiClient', 'model/Schedule', 'model/SlotConfigurationAbtestGroupAssignment', 'model/SlotConfigurationCampaignAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Schedule'), require('./SlotConfigurationAbtestGroupAssignment'), require('./SlotConfigurationCampaignAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SlotConfigurationAssignmentInformation = factory(root.DataApi.ApiClient, root.DataApi.Schedule, root.DataApi.SlotConfigurationAbtestGroupAssignment, root.DataApi.SlotConfigurationCampaignAssignment);
  }
}(this, function(ApiClient, Schedule, SlotConfigurationAbtestGroupAssignment, SlotConfigurationCampaignAssignment) {
  'use strict';



  /**
   * The SlotConfigurationAssignmentInformation model module.
   * @module model/SlotConfigurationAssignmentInformation
   * @version 20.4
   */

  /**
   * Constructs a new <code>SlotConfigurationAssignmentInformation</code>.
   * @alias module:model/SlotConfigurationAssignmentInformation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SlotConfigurationAssignmentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SlotConfigurationAssignmentInformation} obj Optional instance to populate.
   * @return {module:model/SlotConfigurationAssignmentInformation} The populated <code>SlotConfigurationAssignmentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('abtest_id')) {
        obj['abtest_id'] = ApiClient.convertToType(data['abtest_id'], 'String');
      }
      if (data.hasOwnProperty('abtest_segment_id')) {
        obj['abtest_segment_id'] = ApiClient.convertToType(data['abtest_segment_id'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('active_abtest_assignments')) {
        obj['active_abtest_assignments'] = ApiClient.convertToType(data['active_abtest_assignments'], [SlotConfigurationAbtestGroupAssignment]);
      }
      if (data.hasOwnProperty('active_campaign_assignments')) {
        obj['active_campaign_assignments'] = ApiClient.convertToType(data['active_campaign_assignments'], [SlotConfigurationCampaignAssignment]);
      }
      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = Schedule.constructFromObject(data['schedule']);
      }
      if (data.hasOwnProperty('schedule_type')) {
        obj['schedule_type'] = ApiClient.convertToType(data['schedule_type'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('upcoming_abtest_assignments')) {
        obj['upcoming_abtest_assignments'] = ApiClient.convertToType(data['upcoming_abtest_assignments'], [SlotConfigurationAbtestGroupAssignment]);
      }
      if (data.hasOwnProperty('upcoming_campaign_assignments')) {
        obj['upcoming_campaign_assignments'] = ApiClient.convertToType(data['upcoming_campaign_assignments'], [SlotConfigurationCampaignAssignment]);
      }
    }
    return obj;
  }

  /**
   * If there is only one assignment, and that assignment is an A/B test segment, the id of the A/B test the segment  belongs to. Otherwise, empty.
   * @member {String} abtest_id
   */
  exports.prototype['abtest_id'] = undefined;
  /**
   * If there is only one assignment, and that assignment is an A/B test segment, the id of the A/B test segment.  Otherwise, empty.
   * @member {String} abtest_segment_id
   */
  exports.prototype['abtest_segment_id'] = undefined;
  /**
   * true if the individual assignment or the multiple assignments are currently active.
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * A list of currently active A/B tests this is assigned to.
   * @member {Array.<module:model/SlotConfigurationAbtestGroupAssignment>} active_abtest_assignments
   */
  exports.prototype['active_abtest_assignments'] = undefined;
  /**
   * A list of currently active campaigns this is assigned to.
   * @member {Array.<module:model/SlotConfigurationCampaignAssignment>} active_campaign_assignments
   */
  exports.prototype['active_campaign_assignments'] = undefined;
  /**
   * If there is only one assignment, and that assignment is a campaign, the id of the campaign. Otherwise, empty.
   * @member {String} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The end date of the container of the assignment (a Campaign or ABTest). If schedule_type is  schedule_type : \"multiple\" or schedule_type : \"none\", then then result will be null. Also, a null  date will also return null.
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {module:model/Schedule} schedule
   */
  exports.prototype['schedule'] = undefined;
  /**
   * If there is only one active assignment, or no active assignments and one upcoming assignment, this is that type  of assignment (schedule_type : \"campaign\" or schedule_type : \"abtest\"). If there are no  assignments, it will be schedule_type : \"none\", otherwise, schedule_type : \"multiple\".
   * @member {module:model/SlotConfigurationAssignmentInformation.ScheduleTypeEnum} schedule_type
   */
  exports.prototype['schedule_type'] = undefined;
  /**
   * The start date of the container of the assignment (a Campaign or ABTest). If schedule_type is  schedule_type : \"multiple\" or schedule_type : \"none\", then then result will be null. Also, a null  date will also return null.
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * A list of upcoming A/B tests this is assigned to.
   * @member {Array.<module:model/SlotConfigurationAbtestGroupAssignment>} upcoming_abtest_assignments
   */
  exports.prototype['upcoming_abtest_assignments'] = undefined;
  /**
   * A list of upcoming campaigns this is assigned to.
   * @member {Array.<module:model/SlotConfigurationCampaignAssignment>} upcoming_campaign_assignments
   */
  exports.prototype['upcoming_campaign_assignments'] = undefined;


  /**
   * Allowed values for the <code>schedule_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScheduleTypeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "campaign"
     * @const
     */
    "campaign": "campaign",
    /**
     * value: "abtest"
     * @const
     */
    "abtest": "abtest",
    /**
     * value: "multiple"
     * @const
     */
    "multiple": "multiple"  };


  return exports;
}));


