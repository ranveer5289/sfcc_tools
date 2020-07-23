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

import ApiClient from '../ApiClient';

/**
* The ResetPasswordRequest model module.
* @module models/ResetPasswordRequest
* @version 20.8
*/
export default class ResetPasswordRequest {
    /**
    * Constructs a new <code>ResetPasswordRequest</code>.
    * @alias module:models/ResetPasswordRequest
    * @class
    * @param newPassword {String} The new password for the customer.
    */

    constructor(newPassword) {
        
        
        this['new_password'] = newPassword;
        
    }

    /**
    * Constructs a <code>ResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ResetPasswordRequest} obj Optional instance to populate.
    * @return {module:models/ResetPasswordRequest} The populated <code>ResetPasswordRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetPasswordRequest();
                        
            
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('new_password')) {
                obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
            }
            if (data.hasOwnProperty('reset_token')) {
                obj['reset_token'] = ApiClient.convertToType(data['reset_token'], 'String');
            }
        }
        return obj;
    }

    /**
    * The login id of the customer.
    * @member {String} login
    */
    login = undefined;
    /**
    * The new password for the customer.
    * @member {String} new_password
    */
    new_password = undefined;
    /**
    * The password reset token for the customer.
    * @member {String} reset_token
    */
    reset_token = undefined;




}
