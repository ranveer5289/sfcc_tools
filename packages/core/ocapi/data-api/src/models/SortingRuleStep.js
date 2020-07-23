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
* The SortingRuleStep model module.
* @module models/SortingRuleStep
* @version 20.8
*/
export default class SortingRuleStep {
    /**
    * Constructs a new <code>SortingRuleStep</code>.
    * Document representing a product sorting rule step
    * @alias module:models/SortingRuleStep
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SortingRuleStep</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SortingRuleStep} obj Optional instance to populate.
    * @return {module:models/SortingRuleStep} The populated <code>SortingRuleStep</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SortingRuleStep();
                        
            
            if (data.hasOwnProperty('attribute_id')) {
                obj['attribute_id'] = ApiClient.convertToType(data['attribute_id'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('is_system')) {
                obj['is_system'] = ApiClient.convertToType(data['is_system'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('text_relevance_included')) {
                obj['text_relevance_included'] = ApiClient.convertToType(data['text_relevance_included'], 'Boolean');
            }
            if (data.hasOwnProperty('type_id')) {
                obj['type_id'] = ApiClient.convertToType(data['type_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * the id for sorting attribute.
    * @member {String} attribute_id
    */
    attribute_id = undefined;
    /**
    * the direction of the sorting attribute
    * @member {module:models/SortingRuleStep.DirectionEnum} direction
    */
    direction = undefined;
    /**
    * whether or not the attribute is a system attribute.
    * @member {Boolean} is_system
    */
    is_system = undefined;
    /**
    * the position of product sorting rule step.
    * @member {Number} position
    */
    position = undefined;
    /**
    * The text relevance included.
    * @member {Boolean} text_relevance_included
    */
    text_relevance_included = undefined;
    /**
    * the sorting type for sorting attribute.
    * @member {String} type_id
    */
    type_id = undefined;



    /**
    * Allowed values for the <code>direction</code> property.
    * @enum {String}
    * @readonly
    */
    static DirectionEnum = {
        /**
         * value: "asc"
         * @const
         */
        "asc": "asc",
        /**
         * value: "desc"
         * @const
         */
        "desc": "desc"    };

}
