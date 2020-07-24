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
    define(['ApiClient', 'model/Image', 'model/RecommendationType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Image'), require('./RecommendationType'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.Recommendation = factory(root.ShopApi.ApiClient, root.ShopApi.Image, root.ShopApi.RecommendationType);
  }
}(this, function(ApiClient, Image, RecommendationType) {
  'use strict';



  /**
   * The Recommendation model module.
   * @module model/Recommendation
   * @version 20.8
   */

  /**
   * Constructs a new <code>Recommendation</code>.
   * Document representing a product recommendation.
   * @alias module:model/Recommendation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Recommendation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recommendation} obj Optional instance to populate.
   * @return {module:model/Recommendation} The populated <code>Recommendation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('callout_msg')) {
        obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = Image.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recommendation_type')) {
        obj['recommendation_type'] = RecommendationType.constructFromObject(data['recommendation_type']);
      }
      if (data.hasOwnProperty('recommended_item_id')) {
        obj['recommended_item_id'] = ApiClient.convertToType(data['recommended_item_id'], 'String');
      }
      if (data.hasOwnProperty('recommended_item_link')) {
        obj['recommended_item_link'] = ApiClient.convertToType(data['recommended_item_link'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
    }
    return obj;
  }

  /**
   * The localized callout message of the recommendation.
   * @member {String} callout_msg
   */
  exports.prototype['callout_msg'] = undefined;
  /**
   * @member {module:model/Image} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The localized long description of the recommendation.
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The localized name of the recommendation.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/RecommendationType} recommendation_type
   */
  exports.prototype['recommendation_type'] = undefined;
  /**
   * The recommended item id of the recommendation.
   * @member {String} recommended_item_id
   */
  exports.prototype['recommended_item_id'] = undefined;
  /**
   * The recommended item link of the recommendation.
   * @member {String} recommended_item_link
   */
  exports.prototype['recommended_item_link'] = undefined;
  /**
   * The localized short description of the recommendation.
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;



  return exports;
}));


