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
import Bmpermissions from './Bmpermissions';
import Cscpermissions from './Cscpermissions';

/**
* The ApplicationPermissions model module.
* @module models/ApplicationPermissions
* @version 20.8
*/
export default class ApplicationPermissions {
    /**
    * Constructs a new <code>ApplicationPermissions</code>.
    * Document representing the available applications for retrieving permissions.
    * @alias module:models/ApplicationPermissions
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ApplicationPermissions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ApplicationPermissions} obj Optional instance to populate.
    * @return {module:models/ApplicationPermissions} The populated <code>ApplicationPermissions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationPermissions();
                        
            
            if (data.hasOwnProperty('applications')) {
                obj['applications'] = ApiClient.convertToType(data['applications'], ['String']);
            }
            if (data.hasOwnProperty('bm')) {
                obj['bm'] = Bmpermissions.constructFromObject(data['bm']);
            }
            if (data.hasOwnProperty('csc')) {
                obj['csc'] = Cscpermissions.constructFromObject(data['csc']);
            }
        }
        return obj;
    }

    /**
    * The available applications (e.g. 'bm' for Business Manager).
    * @member {Array.<String>} applications
    */
    applications = undefined;
    /**
    * @member {module:models/Bmpermissions} bm
    */
    bm = undefined;
    /**
    * @member {module:models/Cscpermissions} csc
    */
    csc = undefined;




}