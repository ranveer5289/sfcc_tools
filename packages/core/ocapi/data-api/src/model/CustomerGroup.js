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
    define(['ApiClient', 'model/Rule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rule'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.CustomerGroup = factory(root.DataApi.ApiClient, root.DataApi.Rule);
  }
}(this, function(ApiClient, Rule) {
  'use strict';



  /**
   * The CustomerGroup model module.
   * @module model/CustomerGroup
   * @version 20.8
   */

  /**
   * Constructs a new <code>CustomerGroup</code>.
   * Document representing a customer group
   * @alias module:model/CustomerGroup
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>CustomerGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerGroup} obj Optional instance to populate.
   * @return {module:model/CustomerGroup} The populated <code>CustomerGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('in_deletion')) {
        obj['in_deletion'] = ApiClient.convertToType(data['in_deletion'], 'Boolean');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('member_count')) {
        obj['member_count'] = ApiClient.convertToType(data['member_count'], 'Number');
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = Rule.constructFromObject(data['rule']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The description for the customer group.  This property is read-only for system groups.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The user specific identifier for the customer group, which must be unique across the organization.  Property  is read-only.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The deletion status of this customer group.
   * @member {Boolean} in_deletion
   */
  exports.prototype['in_deletion'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * URL that is used to get this instance.  This property is computed and cannot be modified.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The number of members in this customer group.
   * @member {Number} member_count
   */
  exports.prototype['member_count'] = undefined;
  /**
   * @member {module:model/Rule} rule
   */
  exports.prototype['rule'] = undefined;
  /**
   * The type of the customer group.  This property is read-only.
   * @member {module:model/CustomerGroup.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "system"
     * @const
     */
    "system": "system",
    /**
     * value: "dynamic"
     * @const
     */
    "dynamic": "dynamic",
    /**
     * value: "static"
     * @const
     */
    "static": "static"  };


  return exports;
}));


