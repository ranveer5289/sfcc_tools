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
    define(['ApiClient', 'model/Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.Catalog = factory(root.DataApi.ApiClient, root.DataApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';



  /**
   * The Catalog model module.
   * @module model/Catalog
   * @version 20.4
   */

  /**
   * Constructs a new <code>Catalog</code>.
   * Document representing a catalog
   * @alias module:model/Catalog
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Catalog} obj Optional instance to populate.
   * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assigned_product_count')) {
        obj['assigned_product_count'] = ApiClient.convertToType(data['assigned_product_count'], 'Number');
      }
      if (data.hasOwnProperty('assigned_sites')) {
        obj['assigned_sites'] = ApiClient.convertToType(data['assigned_sites'], [Site]);
      }
      if (data.hasOwnProperty('category_count')) {
        obj['category_count'] = ApiClient.convertToType(data['category_count'], 'Number');
      }
      if (data.hasOwnProperty('creation_date')) {
        obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], {'String': 'String'});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('last_modified')) {
        obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], {'String': 'String'});
      }
      if (data.hasOwnProperty('online')) {
        obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
      }
      if (data.hasOwnProperty('owned_product_count')) {
        obj['owned_product_count'] = ApiClient.convertToType(data['owned_product_count'], 'Number');
      }
      if (data.hasOwnProperty('recommendation_count')) {
        obj['recommendation_count'] = ApiClient.convertToType(data['recommendation_count'], 'Number');
      }
      if (data.hasOwnProperty('root_category')) {
        obj['root_category'] = ApiClient.convertToType(data['root_category'], 'String');
      }
    }
    return obj;
  }

  /**
   * The count of products assigned to the catalog. It is read only.
   * @member {Number} assigned_product_count
   */
  exports.prototype['assigned_product_count'] = undefined;
  /**
   * The sites assigned to the catalog. It is read only.
   * @member {Array.<module:model/Site>} assigned_sites
   */
  exports.prototype['assigned_sites'] = undefined;
  /**
   * The category count of catalog. It is read only.
   * @member {Number} category_count
   */
  exports.prototype['category_count'] = undefined;
  /**
   * Returns the value of attribute 'creationDate'.
   * @member {Date} creation_date
   */
  exports.prototype['creation_date'] = undefined;
  /**
   * The description of catalog
   * @member {Object.<String, String>} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The catalog Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Returns the value of attribute 'lastModified'.
   * @member {Date} last_modified
   */
  exports.prototype['last_modified'] = undefined;
  /**
   * URL that is used to get this instance. It is read only.
   * @member {String} link
   */
  exports.prototype['link'] = undefined;
  /**
   * The catalog name
   * @member {Object.<String, String>} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The online status of catalog
   * @member {Boolean} online
   */
  exports.prototype['online'] = undefined;
  /**
   * The count of products owned by the catalog. It is read only.
   * @member {Number} owned_product_count
   */
  exports.prototype['owned_product_count'] = undefined;
  /**
   * The recommendation count of the catalog. It is read only.
   * @member {Number} recommendation_count
   */
  exports.prototype['recommendation_count'] = undefined;
  /**
   * The root category of the catalog.  It is read only
   * @member {String} root_category
   */
  exports.prototype['root_category'] = undefined;



  return exports;
}));


