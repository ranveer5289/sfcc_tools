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
import CustomerPaymentCardRequest from './CustomerPaymentCardRequest';
import PaymentBankAccountRequest from './PaymentBankAccountRequest';

/**
* The CustomerPaymentInstrumentRequest model module.
* @module models/CustomerPaymentInstrumentRequest
* @version 20.8
*/
export default class CustomerPaymentInstrumentRequest {
    /**
    * Constructs a new <code>CustomerPaymentInstrumentRequest</code>.
    * Document representing a customer payment instrument request.
    * @alias module:models/CustomerPaymentInstrumentRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CustomerPaymentInstrumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerPaymentInstrumentRequest} obj Optional instance to populate.
    * @return {module:models/CustomerPaymentInstrumentRequest} The populated <code>CustomerPaymentInstrumentRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPaymentInstrumentRequest();
                        
            
            if (data.hasOwnProperty('bank_routing_number')) {
                obj['bank_routing_number'] = ApiClient.convertToType(data['bank_routing_number'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_code')) {
                obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
            }
            if (data.hasOwnProperty('payment_bank_account')) {
                obj['payment_bank_account'] = PaymentBankAccountRequest.constructFromObject(data['payment_bank_account']);
            }
            if (data.hasOwnProperty('payment_card')) {
                obj['payment_card'] = CustomerPaymentCardRequest.constructFromObject(data['payment_card']);
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * The bank routing number.
    * @member {String} bank_routing_number
    */
    bank_routing_number = undefined;
    /**
    * The gift certificate code.
    * @member {String} gift_certificate_code
    */
    gift_certificate_code = undefined;
    /**
    * @member {module:models/PaymentBankAccountRequest} payment_bank_account
    */
    payment_bank_account = undefined;
    /**
    * @member {module:models/CustomerPaymentCardRequest} payment_card
    */
    payment_card = undefined;
    /**
    * The payment method id. Optional if a customer payment instrument id is specified.
    * @member {String} payment_method_id
    */
    payment_method_id = undefined;




}
