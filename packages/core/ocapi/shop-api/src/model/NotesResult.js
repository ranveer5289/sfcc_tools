/**
 * Shop API
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
    define(['ApiClient', 'model/Note'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Note'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.NotesResult = factory(root.ShopApi.ApiClient, root.ShopApi.Note);
  }
}(this, function(ApiClient, Note) {
  'use strict';



  /**
   * The NotesResult model module.
   * @module model/NotesResult
   * @version 20.8
   */

  /**
   * Constructs a new <code>NotesResult</code>.
   * A result of a note request.   Contains notes for an object - for example, for a basket.
   * @alias module:model/NotesResult
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>NotesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotesResult} obj Optional instance to populate.
   * @return {module:model/NotesResult} The populated <code>NotesResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('notes')) {
        obj['notes'] = ApiClient.convertToType(data['notes'], [Note]);
      }
    }
    return obj;
  }

  /**
   * The notes for an object.
   * @member {Array.<module:model/Note>} notes
   */
  exports.prototype['notes'] = undefined;



  return exports;
}));


