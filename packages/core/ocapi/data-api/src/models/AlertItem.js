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
* The AlertItem model module.
* @module models/AlertItem
* @version 20.8
*/
export default class AlertItem {
    /**
    * Constructs a new <code>AlertItem</code>.
    * Document describing a single alert.
    * @alias module:models/AlertItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AlertItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/AlertItem} obj Optional instance to populate.
    * @return {module:models/AlertItem} The populated <code>AlertItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertItem();
                        
            
            if (data.hasOwnProperty('application_context_path')) {
                obj['application_context_path'] = ApiClient.convertToType(data['application_context_path'], 'String');
            }
            if (data.hasOwnProperty('application_id')) {
                obj['application_id'] = ApiClient.convertToType(data['application_id'], 'String');
            }
            if (data.hasOwnProperty('context_object_id')) {
                obj['context_object_id'] = ApiClient.convertToType(data['context_object_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('display_message')) {
                obj['display_message'] = ApiClient.convertToType(data['display_message'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('message_id')) {
                obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
            }
            if (data.hasOwnProperty('remediation_action')) {
                obj['remediation_action'] = ApiClient.convertToType(data['remediation_action'], 'String');
            }
            if (data.hasOwnProperty('user_priority')) {
                obj['user_priority'] = ApiClient.convertToType(data['user_priority'], 'String');
            }
        }
        return obj;
    }

    /**
    * The application context path.
    * @member {String} application_context_path
    */
    application_context_path = undefined;
    /**
    * The application ID.
    * @member {String} application_id
    */
    application_id = undefined;
    /**
    * The context object id.
    * @member {String} context_object_id
    */
    context_object_id = undefined;
    /**
    * The description.
    * @member {String} description
    */
    description = undefined;
    /**
    * The display message.
    * @member {String} display_message
    */
    display_message = undefined;
    /**
    * URL for this resource.
    * @member {String} link
    */
    link = undefined;
    /**
    * The message ID.
    * @member {String} message_id
    */
    message_id = undefined;
    /**
    * The remediation action.
    * @member {String} remediation_action
    */
    remediation_action = undefined;
    /**
    * The user priority.
    * @member {module:models/AlertItem.UserPriorityEnum} user_priority
    */
    user_priority = undefined;



    /**
    * Allowed values for the <code>user_priority</code> property.
    * @enum {String}
    * @readonly
    */
    static UserPriorityEnum = {
        /**
         * value: "not_allowed"
         * @const
         */
        "not_allowed": "not_allowed",
        /**
         * value: "hidden"
         * @const
         */
        "hidden": "hidden",
        /**
         * value: "informational"
         * @const
         */
        "informational": "informational",
        /**
         * value: "warning"
         * @const
         */
        "warning": "warning",
        /**
         * value: "action_required"
         * @const
         */
        "action_required": "action_required"    };

}