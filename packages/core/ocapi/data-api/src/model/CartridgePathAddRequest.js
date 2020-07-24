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
    root.DataApi.CartridgePathAddRequest = factory(root.DataApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CartridgePathAddRequest model module.
   * @module model/CartridgePathAddRequest
   * @version 20.8
   */

  /**
   * Constructs a new <code>CartridgePathAddRequest</code>.
   * Request body for post operation
   * @alias module:model/CartridgePathAddRequest
   * @class
   * @param name {String} Name of the cartridge.
   * @param position {module:model/CartridgePathAddRequest.PositionEnum} Position of the cartridge.
   */
  var exports = function(name, position) {
    var _this = this;

    _this['name'] = name;
    _this['position'] = position;
  };

  /**
   * Constructs a <code>CartridgePathAddRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CartridgePathAddRequest} obj Optional instance to populate.
   * @return {module:model/CartridgePathAddRequest} The populated <code>CartridgePathAddRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the cartridge.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Position of the cartridge.
   * @member {module:model/CartridgePathAddRequest.PositionEnum} position
   */
  exports.prototype['position'] = undefined;
  /**
   * When position is 'before' or 'after', need to specify the target cartridge
   * @member {String} target
   */
  exports.prototype['target'] = undefined;


  /**
   * Allowed values for the <code>position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PositionEnum = {
    /**
     * value: "first"
     * @const
     */
    "first": "first",
    /**
     * value: "last"
     * @const
     */
    "last": "last",
    /**
     * value: "before"
     * @const
     */
    "before": "before",
    /**
     * value: "after"
     * @const
     */
    "after": "after"  };


  return exports;
}));

