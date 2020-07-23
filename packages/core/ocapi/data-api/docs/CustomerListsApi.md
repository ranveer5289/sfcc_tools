# DataApi.CustomerListsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteCustomerListsByIDCustomersByID"></a>
# **deleteCustomerListsByIDCustomersByID**
> deleteCustomerListsByIDCustomersByID(listId, customerNo)



Deletes the customer including all related information like the customer addresses.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number

apiInstance.deleteCustomerListsByIDCustomersByID(listId, customerNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomerListsByIDCustomersByIDAddressesByID"></a>
# **deleteCustomerListsByIDCustomersByIDAddressesByID**
> deleteCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId)



Action which deletes a customer address.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number
let addressId = "addressId_example"; // String | The address id

apiInstance.deleteCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getCustomerListsByID"></a>
# **getCustomerListsByID**
> CustomerList getCustomerListsByID(listId)



Action to read an existing customerlist.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | the id of the customerlist

apiInstance.getCustomerListsByID(listId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomerListsByIDCustomersByID"></a>
# **getCustomerListsByIDCustomersByID**
> Customer getCustomerListsByIDCustomersByID(listId, customerNo)



Action to get customer information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number

apiInstance.getCustomerListsByIDCustomersByID(listId, customerNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomerListsByIDCustomersByIDAddresses"></a>
# **getCustomerListsByIDCustomersByIDAddresses**
> CustomerAddressResult getCustomerListsByIDCustomersByIDAddresses(listId, customerNo, opts)



Action that returns a pageable list of all customer addresses. The  default page size is 10 customer addresses.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number
let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomerListsByIDCustomersByIDAddresses(listId, customerNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomerListsByIDCustomersByIDAddressesByID"></a>
# **getCustomerListsByIDCustomersByIDAddressesByID**
> CustomerAddress getCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId)



Action which returns an address of a customer.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number
let addressId = "addressId_example"; // String | The address id

apiInstance.getCustomerListsByIDCustomersByIDAddressesByID(listId, customerNo, addressId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchCustomerListsByIDCustomersByID"></a>
# **patchCustomerListsByIDCustomersByID**
> Customer patchCustomerListsByIDCustomersByID(bodylistIdcustomerNo)



Updates the customer with the specified information. The customer number is allowed to be updated but will result in a  CustomerNumberAlreadyInUseException if there is already another customer with the same customer number existing.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.Customer(); // Customer | 
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number

apiInstance.patchCustomerListsByIDCustomersByID(bodylistIdcustomerNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)|  | 
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomerListsByIDCustomersByIDAddressesByID"></a>
# **patchCustomerListsByIDCustomersByIDAddressesByID**
> CustomerAddress patchCustomerListsByIDCustomersByIDAddressesByID(bodylistIdcustomerNoaddressId)



Action which updates an address of a customer with the given address information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.CustomerAddress(); // CustomerAddress | 
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number
let addressId = "addressId_example"; // String | The address id

apiInstance.patchCustomerListsByIDCustomersByIDAddressesByID(bodylistIdcustomerNoaddressId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 
 **addressId** | **String**| The address id | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomerListsByIDCustomerSearch"></a>
# **postCustomerListsByIDCustomerSearch**
> CustomerSearchResult postCustomerListsByIDCustomerSearch(bodycustomerListId)



Action to search for customers in a customer list.   The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    customer_no - String  first_name - String  second_name - String  last_name - String  suffix - String  salutation - String  title - String  fax - String  phone_home - String  phone_business - String  phone_mobile - String  email - String  gender - Integer  company_name - String  credentials.login - String  credentials.enabled - boolean  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let customerListId = "customerListId_example"; // String | The customer list id to search in

apiInstance.postCustomerListsByIDCustomerSearch(bodycustomerListId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **customerListId** | **String**| The customer list id to search in | 

### Return type

[**CustomerSearchResult**](CustomerSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomerListsByIDCustomers"></a>
# **postCustomerListsByIDCustomers**
> Customer postCustomerListsByIDCustomers(bodylistId)



Action to create a new customer. The customer is created using the specified credentials and customer  information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.Customer(); // Customer | 
let listId = "listId_example"; // String | The customer list id

apiInstance.postCustomerListsByIDCustomers(bodylistId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)|  | 
 **listId** | **String**| The customer list id | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomerListsByIDCustomersByIDAddresses"></a>
# **postCustomerListsByIDCustomersByIDAddresses**
> CustomerAddress postCustomerListsByIDCustomersByIDAddresses(bodylistIdcustomerNo)



The action creates a new customer address with the given address  information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.CustomerAddress(); // CustomerAddress | 
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number

apiInstance.postCustomerListsByIDCustomersByIDAddresses(bodylistIdcustomerNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putCustomerListsByIDCustomersByID"></a>
# **putCustomerListsByIDCustomersByID**
> Customer putCustomerListsByIDCustomersByID(bodylistIdcustomerNo)



Action to create a new customer. The customer is created using the specified customer number, credentials and  customer information.This action verifies the following:    Login acceptance criteria and uniqueness  Mandatory customer properties    If the action fails to create the customer, it returns a 400 fault with an appropriate message.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomerListsApi();
let body = new DataApi.Customer(); // Customer | 
let listId = "listId_example"; // String | The customer list id
let customerNo = "customerNo_example"; // String | The customer number

apiInstance.putCustomerListsByIDCustomersByID(bodylistIdcustomerNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)|  | 
 **listId** | **String**| The customer list id | 
 **customerNo** | **String**| The customer number | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

