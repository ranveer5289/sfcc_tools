/**
 * Data API
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
    define(['ApiClient', 'model/MediaFile', 'model/VariationAttribute'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaFile'), require('./VariationAttribute'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.ImageGroup = factory(root.DataApi.ApiClient, root.DataApi.MediaFile, root.DataApi.VariationAttribute);
  }
}(this, function(ApiClient, MediaFile, VariationAttribute) {
  'use strict';



  /**
   * The ImageGroup model module.
   * @module model/ImageGroup
   * @version 20.8
   */

  /**
   * Constructs a new <code>ImageGroup</code>.
   * Document representing an image group containing a list of images for a particular view type and an optional variation value.
   * @alias module:model/ImageGroup
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ImageGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageGroup} obj Optional instance to populate.
   * @return {module:model/ImageGroup} The populated <code>ImageGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [MediaFile]);
      }
      if (data.hasOwnProperty('variation_attributes')) {
        obj['variation_attributes'] = ApiClient.convertToType(data['variation_attributes'], [VariationAttribute]);
      }
      if (data.hasOwnProperty('view_type')) {
        obj['view_type'] = ApiClient.convertToType(data['view_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * The images of the image group.
   * @member {Array.<module:model/MediaFile>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * Returns a list of variation attributes applying to this image group.
   * @member {Array.<module:model/VariationAttribute>} variation_attributes
   */
  exports.prototype['variation_attributes'] = undefined;
  /**
   * The image view type.
   * @member {String} view_type
   */
  exports.prototype['view_type'] = undefined;



  return exports;
}));


