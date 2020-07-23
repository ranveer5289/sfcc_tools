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

import ApiClient from "../ApiClient";
import Customer from '../models/Customer';
import CustomerAddress from '../models/CustomerAddress';
import CustomerAddressResult from '../models/CustomerAddressResult';
import CustomerList from '../models/CustomerList';
import CustomerSearchResult from '../models/CustomerSearchResult';
import SearchRequest from '../models/SearchRequest';

/**
* CustomerLists service.
* @module api/CustomerListsApi
* @version 20.8
*/
export default class CustomerListsApi {

    /**
    * Constructs a new CustomerListsApi. 
    * @alias module:api/CustomerListsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deletes the customer including all related information like the customer addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomerListsByIDCustomersByIDWithHttpInfo(listId, customerNo) {
      let postBody = null;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes the customer including all related information like the customer addresses.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomerListsByIDCustomersByID(listId, customerNo) {
      return this.deleteCustomerListsByIDCustomersByIDWithHttpInfo(listId, customerNo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action which deletes a customer address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(listId, customerNo, addressId) {
      let postBody = null;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo,
        'address_id': addressId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action which deletes a customer address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId) {
      return this.deleteCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(listId, customerNo, addressId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to read an existing customerlist.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerList} and HTTP response
     */
    getCustomerListsByIDWithHttpInfo(listId) {
      let postBody = null;

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerList;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to read an existing customerlist.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerList}
     */
    getCustomerListsByID(listId) {
      return this.getCustomerListsByIDWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to get customer information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Customer} and HTTP response
     */
    getCustomerListsByIDCustomersByIDWithHttpInfo(listId, customerNo) {
      let postBody = null;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = Customer;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to get customer information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Customer}
     */
    getCustomerListsByIDCustomersByID(listId, customerNo) {
      return this.getCustomerListsByIDCustomersByIDWithHttpInfo(listId, customerNo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action that returns a pageable list of all customer addresses. The  default page size is 10 customer addresses.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerAddressResult} and HTTP response
     */
    getCustomerListsByIDCustomersByIDAddressesWithHttpInfo(listId, customerNo, opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
        'start': opts['start'],
        'count': opts['count']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerAddressResult;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action that returns a pageable list of all customer addresses. The  default page size is 10 customer addresses.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerAddressResult}
     */
    getCustomerListsByIDCustomersByIDAddresses(listId, customerNo, opts) {
      return this.getCustomerListsByIDCustomersByIDAddressesWithHttpInfo(listId, customerNo, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action which returns an address of a customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerAddress} and HTTP response
     */
    getCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(listId, customerNo, addressId) {
      let postBody = null;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo,
        'address_id': addressId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = [];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerAddress;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action which returns an address of a customer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerAddress}
     */
    getCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId) {
      return this.getCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(listId, customerNo, addressId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the customer with the specified information. The customer number is allowed to be updated but will result in a  CustomerNumberAlreadyInUseException if there is already another customer with the same customer number existing.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Customer} and HTTP response
     */
    patchCustomerListsByIDCustomersByIDWithHttpInfo(body, listId, customerNo) {
      let postBody = body;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = Customer;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the customer with the specified information. The customer number is allowed to be updated but will result in a  CustomerNumberAlreadyInUseException if there is already another customer with the same customer number existing.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Customer}
     */
    patchCustomerListsByIDCustomersByID(body, listId, customerNo) {
      return this.patchCustomerListsByIDCustomersByIDWithHttpInfo(body, listId, customerNo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action which updates an address of a customer with the given address information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerAddress} and HTTP response
     */
    patchCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(body, listId, customerNo, addressId) {
      let postBody = body;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo,
        'address_id': addressId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerAddress;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action which updates an address of a customer with the given address information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerAddress}
     */
    patchCustomerListsByIDCustomersByIDAddressesByID(body, listId, customerNo, addressId) {
      return this.patchCustomerListsByIDCustomersByIDAddressesByIDWithHttpInfo(body, listId, customerNo, addressId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to search for customers in a customer list.   The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    customer_no - String  first_name - String  second_name - String  last_name - String  suffix - String  salutation - String  title - String  fax - String  phone_home - String  phone_business - String  phone_mobile - String  email - String  gender - Integer  company_name - String  credentials.login - String  credentials.enabled - boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerSearchResult} and HTTP response
     */
    postCustomerListsByIDCustomerSearchWithHttpInfo(body, customerListId) {
      let postBody = body;

      let pathParams = {
        'customer_list_id': customerListId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerSearchResult;

      return this.apiClient.callApi(
        '/customer_lists/{customer_list_id}/customer_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to search for customers in a customer list.   The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    customer_no - String  first_name - String  second_name - String  last_name - String  suffix - String  salutation - String  title - String  fax - String  phone_home - String  phone_business - String  phone_mobile - String  email - String  gender - Integer  company_name - String  credentials.login - String  credentials.enabled - boolean  
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerSearchResult}
     */
    postCustomerListsByIDCustomerSearch(body, customerListId) {
      return this.postCustomerListsByIDCustomerSearchWithHttpInfo(body, customerListId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to create a new customer. The customer is created using the specified credentials and customer  information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Customer} and HTTP response
     */
    postCustomerListsByIDCustomersWithHttpInfo(body, listId) {
      let postBody = body;

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = Customer;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to create a new customer. The customer is created using the specified credentials and customer  information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Customer}
     */
    postCustomerListsByIDCustomers(body, listId) {
      return this.postCustomerListsByIDCustomersWithHttpInfo(body, listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * The action creates a new customer address with the given address  information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/CustomerAddress} and HTTP response
     */
    postCustomerListsByIDCustomersByIDAddressesWithHttpInfo(body, listId, customerNo) {
      let postBody = body;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = CustomerAddress;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * The action creates a new customer address with the given address  information.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/CustomerAddress}
     */
    postCustomerListsByIDCustomersByIDAddresses(body, listId, customerNo) {
      return this.postCustomerListsByIDCustomersByIDAddressesWithHttpInfo(body, listId, customerNo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Action to create a new customer. The customer is created using the specified customer number, credentials and  customer information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Customer} and HTTP response
     */
    putCustomerListsByIDCustomersByIDWithHttpInfo(body, listId, customerNo) {
      let postBody = body;

      let pathParams = {
        'list_id': listId,
        'customer_no': customerNo
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2_application'];
      let contentTypes = ['application/json', 'text/xml', 'application/xml'];
      let accepts = ['application/json', 'text/xml', 'application/xml'];
      let returnType = Customer;

      return this.apiClient.callApi(
        '/customer_lists/{list_id}/customers/{customer_no}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Action to create a new customer. The customer is created using the specified customer number, credentials and  customer information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Customer}
     */
    putCustomerListsByIDCustomersByID(body, listId, customerNo) {
      return this.putCustomerListsByIDCustomersByIDWithHttpInfo(body, listId, customerNo)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}