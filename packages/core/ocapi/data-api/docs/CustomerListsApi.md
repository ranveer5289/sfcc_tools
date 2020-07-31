# DataApi.CustomerListsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomerListsByIDCustomersByID**](CustomerListsApi.md#deleteCustomerListsByIDCustomersByID) | **DELETE** /customer_lists/{list_id}/customers/{customer_no} | 
[**deleteCustomerListsByIDCustomersByIDAddressesByID**](CustomerListsApi.md#deleteCustomerListsByIDCustomersByIDAddressesByID) | **DELETE** /customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id} | 
[**getCustomerListsByID**](CustomerListsApi.md#getCustomerListsByID) | **GET** /customer_lists/{list_id} | 
[**getCustomerListsByIDCustomersByID**](CustomerListsApi.md#getCustomerListsByIDCustomersByID) | **GET** /customer_lists/{list_id}/customers/{customer_no} | 
[**getCustomerListsByIDCustomersByIDAddresses**](CustomerListsApi.md#getCustomerListsByIDCustomersByIDAddresses) | **GET** /customer_lists/{list_id}/customers/{customer_no}/addresses | 
[**getCustomerListsByIDCustomersByIDAddressesByID**](CustomerListsApi.md#getCustomerListsByIDCustomersByIDAddressesByID) | **GET** /customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id} | 
[**patchCustomerListsByIDCustomersByID**](CustomerListsApi.md#patchCustomerListsByIDCustomersByID) | **PATCH** /customer_lists/{list_id}/customers/{customer_no} | 
[**patchCustomerListsByIDCustomersByIDAddressesByID**](CustomerListsApi.md#patchCustomerListsByIDCustomersByIDAddressesByID) | **PATCH** /customer_lists/{list_id}/customers/{customer_no}/addresses/{address_id} | 
[**postCustomerListsByIDCustomerSearch**](CustomerListsApi.md#postCustomerListsByIDCustomerSearch) | **POST** /customer_lists/{customer_list_id}/customer_search | 
[**postCustomerListsByIDCustomers**](CustomerListsApi.md#postCustomerListsByIDCustomers) | **POST** /customer_lists/{list_id}/customers | 
[**postCustomerListsByIDCustomersByIDAddresses**](CustomerListsApi.md#postCustomerListsByIDCustomersByIDAddresses) | **POST** /customer_lists/{list_id}/customers/{customer_no}/addresses | 
[**putCustomerListsByIDCustomersByID**](CustomerListsApi.md#putCustomerListsByIDCustomersByID) | **PUT** /customer_lists/{list_id}/customers/{customer_no} | 



## deleteCustomerListsByIDCustomersByID

> deleteCustomerListsByIDCustomersByID(listId, customerNo)



Deletes the customer including all related information like the customer addresses.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
apiInstance.deleteCustomerListsByIDCustomersByID(listId, customerNo).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomerListsByIDCustomersByIDAddressesByID

> deleteCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId)



Action which deletes a customer address.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var addressId = "addressId_example"; // String | The address id
apiInstance.deleteCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **addressId** | **String**| The address id | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomerListsByID

> CustomerList getCustomerListsByID(listId)



Action to read an existing customerlist.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | the id of the customerlist
apiInstance.getCustomerListsByID(listId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| the id of the customerlist | 

### Return type

[**CustomerList**](CustomerList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomerListsByIDCustomersByID

> Customer getCustomerListsByIDCustomersByID(listId, customerNo)



Action to get customer information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
apiInstance.getCustomerListsByIDCustomersByID(listId, customerNo).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomerListsByIDCustomersByIDAddresses

> CustomerAddressResult getCustomerListsByIDCustomersByIDAddresses(listId, customerNo, opts)



Action that returns a pageable list of all customer addresses. The  default page size is 10 customer addresses.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var opts = {
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomerListsByIDCustomersByIDAddresses(listId, customerNo, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**CustomerAddressResult**](CustomerAddressResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomerListsByIDCustomersByIDAddressesByID

> CustomerAddress getCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId)



Action which returns an address of a customer.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var addressId = "addressId_example"; // String | The address id
apiInstance.getCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **addressId** | **String**| The address id | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchCustomerListsByIDCustomersByID

> Customer patchCustomerListsByIDCustomersByID(listId, customerNo, body)



Updates the customer with the specified information. The customer number is allowed to be updated but will result in a  CustomerNumberAlreadyInUseException if there is already another customer with the same customer number existing.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var body = new DataApi.Customer(); // Customer | 
apiInstance.patchCustomerListsByIDCustomersByID(listId, customerNo, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **body** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCustomerListsByIDCustomersByIDAddressesByID

> CustomerAddress patchCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId, body)



Action which updates an address of a customer with the given address information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var addressId = "addressId_example"; // String | The address id
var body = new DataApi.CustomerAddress(); // CustomerAddress | 
apiInstance.patchCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **addressId** | **String**| The address id | 
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomerListsByIDCustomerSearch

> CustomerSearchResult postCustomerListsByIDCustomerSearch(customerListId, body)



Action to search for customers in a customer list.   The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    customer_no - String  first_name - String  second_name - String  last_name - String  suffix - String  salutation - String  title - String  fax - String  phone_home - String  phone_business - String  phone_mobile - String  email - String  gender - Integer  company_name - String  credentials.login - String  credentials.enabled - boolean  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var customerListId = "customerListId_example"; // String | The customer list id to search in
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postCustomerListsByIDCustomerSearch(customerListId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerListId** | **String**| The customer list id to search in | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CustomerSearchResult**](CustomerSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomerListsByIDCustomers

> Customer postCustomerListsByIDCustomers(listId, body)



Action to create a new customer. The customer is created using the specified credentials and customer  information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var body = new DataApi.Customer(); // Customer | 
apiInstance.postCustomerListsByIDCustomers(listId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **body** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomerListsByIDCustomersByIDAddresses

> CustomerAddress postCustomerListsByIDCustomersByIDAddresses(listId, customerNo, body)



The action creates a new customer address with the given address  information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var body = new DataApi.CustomerAddress(); // CustomerAddress | 
apiInstance.postCustomerListsByIDCustomersByIDAddresses(listId, customerNo, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCustomerListsByIDCustomersByID

> Customer putCustomerListsByIDCustomersByID(listId, customerNo, body)



Action to create a new customer. The customer is created using the specified customer number, credentials and  customer information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomerListsApi();
var listId = "listId_example"; // String | The customer list id
var customerNo = "customerNo_example"; // String | The customer number
var body = new DataApi.Customer(); // Customer | 
apiInstance.putCustomerListsByIDCustomersByID(listId, customerNo, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **body** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

