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
    define(['ApiClient', 'model/Campaign', 'model/Promotion', 'model/Schedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Campaign'), require('./Promotion'), require('./Schedule'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.PromotionCampaignAssignment = factory(root.DataApi.ApiClient, root.DataApi.Campaign, root.DataApi.Promotion, root.DataApi.Schedule);
  }
}(this, function(ApiClient, Campaign, Promotion, Schedule) {
  'use strict';



  /**
   * The PromotionCampaignAssignment model module.
   * @module model/PromotionCampaignAssignment
   * @version 20.8
   */

  /**
   * Constructs a new <code>PromotionCampaignAssignment</code>.
   * Document representing a promotion campaign assignment.
   * @alias module:model/PromotionCampaignAssignment
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PromotionCampaignAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionCampaignAssignment} obj Optional instance to populate.
   * @return {module:model/PromotionCampaignAssignment} The populated <code>PromotionCampaignAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('campaign')) {
        obj['campaign'] = Campaign.constructFromObject(data['campaign']);
      }
      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'String');
      }
      if (data.hasOwnProperty('coupons')) {
        obj['coupons'] = ApiClient.convertToType(data['coupons'], ['String']);
      }
      if (data.hasOwnProperty('customer_groups')) {
        obj['customer_groups'] = ApiClient.convertToType(data['customer_groups'], ['String']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('promotion')) {
        obj['promotion'] = Promotion.constructFromObject(data['promotion']);
      }
      if (data.hasOwnProperty('promotion_id')) {
        obj['promotion_id'] = ApiClient.convertToType(data['promotion_id'], 'String');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
      if (data.hasOwnProperty('schedule')) {
        obj['schedule'] = Schedule.constructFromObject(data['schedule']);
      }
      if (data.hasOwnProperty('source_code_groups')) {
        obj['source_code_groups'] = ApiClient.convertToType(data['source_code_groups'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Campaign} campaign
   */
  exports.prototype['campaign'] = undefined;
  /**
   * The id of the campaign.
   * @member {String} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * The sorted array of assigned coupon ids.
   * @member {Array.<String>} coupons
   */
  exports.prototype['coupons'] = undefined;
  /**
   * The sorted array of assigned customer groups.
   * @member {Array.<String>} customer_groups
   */
  exports.prototype['customer_groups'] = undefined;
  /**
   * The description of the promotion campaign assignment.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * True if the assignment resource is enabled
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * link for convenience
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * @member {module:model/Promotion} promotion
   */
  exports.prototype['promotion'] = undefined;
  /**
   * The id of the Promotion.
   * @member {String} promotion_id
   */
  exports.prototype['promotion_id'] = undefined;
  /**
   * The rank of promotion campaign assignment
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * @member {module:model/Schedule} schedule
   */
  exports.prototype['schedule'] = undefined;
  /**
   * The sorted array of assigned source code groups.
   * @member {Array.<String>} source_code_groups
   */
  exports.prototype['source_code_groups'] = undefined;



  return exports;
}));

