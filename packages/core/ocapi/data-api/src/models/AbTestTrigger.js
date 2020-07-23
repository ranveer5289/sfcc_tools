/**
 * Data API
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

import ApiClient from '../ApiClient';

/**
* The AbTestTrigger model module.
* @module models/AbTestTrigger
* @version 20.8
*/
export default class AbTestTrigger {
    /**
    * Constructs a new <code>AbTestTrigger</code>.
    * Document representing an A/B Test trigger.
    * @alias module:models/AbTestTrigger
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AbTestTrigger</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AbTestTrigger} obj Optional instance to populate.
    * @return {module:models/AbTestTrigger} The populated <code>AbTestTrigger</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbTestTrigger();
                        
            
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('is_pipeline_based')) {
                obj['is_pipeline_based'] = ApiClient.convertToType(data['is_pipeline_based'], 'Boolean');
            }
            if (data.hasOwnProperty('pipeline_calls')) {
                obj['pipeline_calls'] = ApiClient.convertToType(data['pipeline_calls'], ['String']);
            }
            if (data.hasOwnProperty('trigger_type')) {
                obj['trigger_type'] = ApiClient.convertToType(data['trigger_type'], 'String');
            }
        }
        return obj;
    }

    /**
    * The list of categories. This is a modifiable attribute when trigger type is 'category_page_view' only
    * @member {Array.<String>} categories
    */
    categories = undefined;
    /**
    * The flag indicating if the trigger is based on pipelines. This is a computed attribute and cannot be modified
    * @member {Boolean} is_pipeline_based
    */
    is_pipeline_based = undefined;
    /**
    * The list of pipeline name and start node combinations (for example, Account-Show). This is a modifiable attribute when trigger type is 'pipeline_calls' only
    * @member {Array.<String>} pipeline_calls
    */
    pipeline_calls = undefined;
    /**
    * The type of the trigger. Defaults to 'immediately' if not specified on create
    * @member {module:models/AbTestTrigger.TriggerTypeEnum} trigger_type
    */
    trigger_type = undefined;



    /**
    * Allowed values for the <code>trigger_type</code> property.
    * @enum {String}
    * @readonly
    */
    static TriggerTypeEnum = {
        /**
         * value: "immediately"
         * @const
         */
        "immediately": "immediately",
        /**
         * value: "category_page_view"
         * @const
         */
        "category_page_view": "category_page_view",
        /**
         * value: "home_page_view"
         * @const
         */
        "home_page_view": "home_page_view",
        /**
         * value: "pipeline_call"
         * @const
         */
        "pipeline_call": "pipeline_call"    };

}
