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
    root.DataApi.Master = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Master model module.
   * @module model/Master
   * @version 20.8
   */

  /**
   * Constructs a new <code>Master</code>.
   * @alias module:model/Master
   * @class
   * @param link {String} 
   * @param masterId {String} 
   */
  var exports = function(link, masterId) {
    var _this = this;

    _this['link'] = link;
    _this['master_id'] = masterId;
  };

  /**
   * Constructs a <code>Master</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Master} obj Optional instance to populate.
   * @return {module:model/Master} The populated <code>Master</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('master_id')) {
        obj['master_id'] = ApiClient.convertToType(data['master_id'], 'String');
      }
      if (data.hasOwnProperty('orderable')) {
        obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('price_max')) {
        obj['price_max'] = ApiClient.convertToType(data['price_max'], 'Number');
      }
      if (data.hasOwnProperty('price_per_unit')) {
        obj['price_per_unit'] = ApiClient.convertToType(data['price_per_unit'], 'Number');
      }
      if (data.hasOwnProperty('price_per_unit_max')) {
        obj['price_per_unit_max'] = ApiClient.convertToType(data['price_per_unit_max'], 'Number');
      }
      if (data.hasOwnProperty('prices')) {
        obj['prices'] = ApiClient.convertToType(data['prices'], {'String': 'Number'});
      }
    }
    return obj;
  }

  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * @member {String} master_id
   */
  exports.prototype['master_id'] = undefined;
  /**
   * @member {Boolean} orderable
   */
  exports.prototype['orderable'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} price_max
   */
  exports.prototype['price_max'] = undefined;
  /**
   * @member {Number} price_per_unit
   */
  exports.prototype['price_per_unit'] = undefined;
  /**
   * @member {Number} price_per_unit_max
   */
  exports.prototype['price_per_unit_max'] = undefined;
  /**
   * @member {Object.<String, Number>} prices
   */
  exports.prototype['prices'] = undefined;



  return exports;
}));


