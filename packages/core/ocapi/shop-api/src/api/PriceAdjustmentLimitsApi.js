/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import PriceAdjustmentLimits from '../models/PriceAdjustmentLimits';

/**
* PriceAdjustmentLimits service.
* @module api/PriceAdjustmentLimitsApi
* @version 20.8
*/
export default class PriceAdjustmentLimitsApi {

    /**
    * Constructs a new PriceAdjustmentLimitsApi. 
    * @alias module:api/PriceAdjustmentLimitsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a list of price adjustment limits for the authenticated user and the site defined in the URL.    At least one of the following functional permissions must be assigned to the user to be able to access it:  Adjust_Item_Price or Adjust_Shipping_Price or Adjust_Order_Price.  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/PriceAdjustmentLimits} and HTTP response
     */
    getPriceAdjustmentLimitsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['client_id', 'customers_auth', 'oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = PriceAdjustmentLimits;

      return this.apiClient.callApi(
        '/price_adjustment_limits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns a list of price adjustment limits for the authenticated user and the site defined in the URL.    At least one of the following functional permissions must be assigned to the user to be able to access it:  Adjust_Item_Price or Adjust_Shipping_Price or Adjust_Order_Price.  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/PriceAdjustmentLimits}
     */
    getPriceAdjustmentLimits() {
      return this.getPriceAdjustmentLimitsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}
