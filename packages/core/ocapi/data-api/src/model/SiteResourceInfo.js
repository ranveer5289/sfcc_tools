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
    define(['ApiClient', 'model/ResourceInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.SiteResourceInfo = factory(root.DataApi.ApiClient, root.DataApi.ResourceInfo);
  }
}(this, function(ApiClient, ResourceInfo) {
  'use strict';



  /**
   * The SiteResourceInfo model module.
   * @module model/SiteResourceInfo
   * @version 20.4
   */

  /**
   * Constructs a new <code>SiteResourceInfo</code>.
   * Object to represent a site configuration and available resources in the site configuration.
   * @alias module:model/SiteResourceInfo
   * @class
   * @param siteConfigs {Array.<module:model/ResourceInfo>} Site configuration
   */
  var exports = function(siteConfigs) {
    var _this = this;

    _this['site_configs'] = siteConfigs;
  };

  /**
   * Constructs a <code>SiteResourceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteResourceInfo} obj Optional instance to populate.
   * @return {module:model/SiteResourceInfo} The populated <code>SiteResourceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('site_configs')) {
        obj['site_configs'] = ApiClient.convertToType(data['site_configs'], [ResourceInfo]);
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Site configuration
   * @member {Array.<module:model/ResourceInfo>} site_configs
   */
  exports.prototype['site_configs'] = undefined;
  /**
   * Site ID
   * @member {String} site_id
   */
  exports.prototype['site_id'] = undefined;



  return exports;
}));


