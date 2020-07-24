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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShopApi) {
      root.ShopApi = {};
    }
    root.ShopApi.BoolQuery = factory(root.ShopApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BoolQuery model module.
   * @module model/BoolQuery
   * @version 20.8
   */

  /**
   * Constructs a new <code>BoolQuery</code>.
   * A boolean query allows construction of full logical expression trees consisting of other queries (usually term and text queries). A boolean query basically has 3 sets of clauses that &#39;must&#39;, &#39;should&#39; and / or &#39;must not&#39; match.  If &#39;must&#39;, &#39;must_not&#39;, or &#39;should&#39; appear in the same boolean query, they are combined logically using the AND operator. 
   * @alias module:model/BoolQuery
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BoolQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoolQuery} obj Optional instance to populate.
   * @return {module:model/BoolQuery} The populated <code>BoolQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('must')) {
        obj['must'] = ApiClient.convertToType(data['must'], [Object]);
      }
      if (data.hasOwnProperty('must_not')) {
        obj['must_not'] = ApiClient.convertToType(data['must_not'], [Object]);
      }
      if (data.hasOwnProperty('should')) {
        obj['should'] = ApiClient.convertToType(data['should'], [Object]);
      }
    }
    return obj;
  }

  /**
   * List of queries that must match.
   * @member {Array.<Object>} must
   */
  exports.prototype['must'] = undefined;
  /**
   * List of queries that must not match.
   * @member {Array.<Object>} must_not
   */
  exports.prototype['must_not'] = undefined;
  /**
   * List of queries that should match.
   * @member {Array.<Object>} should
   */
  exports.prototype['should'] = undefined;



  return exports;
}));


