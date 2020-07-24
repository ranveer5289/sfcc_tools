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
    define(['ApiClient', 'model/ProductSearchRefinementValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductSearchRefinementValue'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.ProductSearchRefinement = factory(root.ShopApi.ApiClient, root.ShopApi.ProductSearchRefinementValue);
  }
}(this, function(ApiClient, ProductSearchRefinementValue) {
  'use strict';



  /**
   * The ProductSearchRefinement model module.
   * @module model/ProductSearchRefinement
   * @version 20.8
   */

  /**
   * Constructs a new <code>ProductSearchRefinement</code>.
   * Document representing a product search refinement attribute.
   * @alias module:model/ProductSearchRefinement
   * @class
   * @param attributeId {String} The id of the search refinement attribute. In the case of an attribute refinement, this is the attribute id.  Custom attributes are marked by the prefix \"c_\" (for example, \"c_refinementColor\"). In the case of a  category refinement, the id must be \"cgid\". In the case of a price refinement, the id must be \"price\".
   */
  var exports = function(attributeId) {
    var _this = this;

    _this['attribute_id'] = attributeId;
  };

  /**
   * Constructs a <code>ProductSearchRefinement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductSearchRefinement} obj Optional instance to populate.
   * @return {module:model/ProductSearchRefinement} The populated <code>ProductSearchRefinement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attribute_id')) {
        obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [ProductSearchRefinementValue]);
      }
    }
    return obj;
  }

  /**
   * The id of the search refinement attribute. In the case of an attribute refinement, this is the attribute id.  Custom attributes are marked by the prefix \"c_\" (for example, \"c_refinementColor\"). In the case of a  category refinement, the id must be \"cgid\". In the case of a price refinement, the id must be \"price\".
   * @member {String} attribute_id
   */
  exports.prototype['attribute_id'] = undefined;
  /**
   * The localized label of the refinement.
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * The sorted array of refinement values. This array can be empty.
   * @member {Array.<module:model/ProductSearchRefinementValue>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


