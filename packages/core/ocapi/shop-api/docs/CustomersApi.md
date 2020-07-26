# ShopApi.CustomersApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomersAuth**](CustomersApi.md#deleteCustomersAuth) | **DELETE** /customers/auth | 
[**deleteCustomersByIDAddressesByID**](CustomersApi.md#deleteCustomersByIDAddressesByID) | **DELETE** /customers/{customer_id}/addresses/{address_name} | 
[**deleteCustomersByIDPaymentInstrumentsByID**](CustomersApi.md#deleteCustomersByIDPaymentInstrumentsByID) | **DELETE** /customers/{customer_id}/payment_instruments/{payment_instrument_id} | 
[**deleteCustomersByIDProductListsByID**](CustomersApi.md#deleteCustomersByIDProductListsByID) | **DELETE** /customers/{customer_id}/product_lists/{list_id} | 
[**deleteCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#deleteCustomersByIDProductListsByIDItemsByID) | **DELETE** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**getCustomersByID**](CustomersApi.md#getCustomersByID) | **GET** /customers/{customer_id} | 
[**getCustomersByIDAddresses**](CustomersApi.md#getCustomersByIDAddresses) | **GET** /customers/{customer_id}/addresses | 
[**getCustomersByIDAddressesByID**](CustomersApi.md#getCustomersByIDAddressesByID) | **GET** /customers/{customer_id}/addresses/{address_name} | 
[**getCustomersByIDBaskets**](CustomersApi.md#getCustomersByIDBaskets) | **GET** /customers/{customer_id}/baskets | 
[**getCustomersByIDOrders**](CustomersApi.md#getCustomersByIDOrders) | **GET** /customers/{customer_id}/orders | 
[**getCustomersByIDPaymentInstruments**](CustomersApi.md#getCustomersByIDPaymentInstruments) | **GET** /customers/{customer_id}/payment_instruments | 
[**getCustomersByIDPaymentInstrumentsByID**](CustomersApi.md#getCustomersByIDPaymentInstrumentsByID) | **GET** /customers/{customer_id}/payment_instruments/{payment_instrument_id} | 
[**getCustomersByIDProductLists**](CustomersApi.md#getCustomersByIDProductLists) | **GET** /customers/{customer_id}/product_lists | 
[**getCustomersByIDProductListsByID**](CustomersApi.md#getCustomersByIDProductListsByID) | **GET** /customers/{customer_id}/product_lists/{list_id} | 
[**getCustomersByIDProductListsByIDItems**](CustomersApi.md#getCustomersByIDProductListsByIDItems) | **GET** /customers/{customer_id}/product_lists/{list_id}/items | 
[**getCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#getCustomersByIDProductListsByIDItemsByID) | **GET** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**getCustomersByIDProductListsByIDItemsByIDPurchases**](CustomersApi.md#getCustomersByIDProductListsByIDItemsByIDPurchases) | **GET** /customers/{customer_id}/product_lists/{list_id}/items/{item_id}/purchases | 
[**getCustomersByIDProductListsByIDItemsByIDPurchasesByID**](CustomersApi.md#getCustomersByIDProductListsByIDItemsByIDPurchasesByID) | **GET** /customers/{customer_id}/product_lists/{list_id}/items/{item_id}/purchases/{purchase_id} | 
[**patchCustomersByID**](CustomersApi.md#patchCustomersByID) | **PATCH** /customers/{customer_id} | 
[**patchCustomersByIDAddressesByID**](CustomersApi.md#patchCustomersByIDAddressesByID) | **PATCH** /customers/{customer_id}/addresses/{address_name} | 
[**patchCustomersByIDProductListsByID**](CustomersApi.md#patchCustomersByIDProductListsByID) | **PATCH** /customers/{customer_id}/product_lists/{list_id} | 
[**patchCustomersByIDProductListsByIDItemsByID**](CustomersApi.md#patchCustomersByIDProductListsByIDItemsByID) | **PATCH** /customers/{customer_id}/product_lists/{list_id}/items/{item_id} | 
[**patchCustomersByIDProductListsByIDItemsByIDPurchasesByID**](CustomersApi.md#patchCustomersByIDProductListsByIDItemsByIDPurchasesByID) | **PATCH** /customers/{customer_id}/product_lists/{list_id}/items/{item_id}/purchases/{purchase_id} | 
[**postCustomers**](CustomersApi.md#postCustomers) | **POST** /customers | 
[**postCustomersAuth**](CustomersApi.md#postCustomersAuth) | **POST** /customers/auth | 
[**postCustomersAuthTrustedsystem**](CustomersApi.md#postCustomersAuthTrustedsystem) | **POST** /customers/auth/trustedsystem | 
[**postCustomersByIDAddresses**](CustomersApi.md#postCustomersByIDAddresses) | **POST** /customers/{customer_id}/addresses | 
[**postCustomersByIDAuth**](CustomersApi.md#postCustomersByIDAuth) | **POST** /customers/{customer_id}/auth | 
[**postCustomersByIDPasswordReset**](CustomersApi.md#postCustomersByIDPasswordReset) | **POST** /customers/{customer_id}/password_reset | 
[**postCustomersByIDPaymentInstruments**](CustomersApi.md#postCustomersByIDPaymentInstruments) | **POST** /customers/{customer_id}/payment_instruments | 
[**postCustomersByIDProductLists**](CustomersApi.md#postCustomersByIDProductLists) | **POST** /customers/{customer_id}/product_lists | 
[**postCustomersByIDProductListsByIDItems**](CustomersApi.md#postCustomersByIDProductListsByIDItems) | **POST** /customers/{customer_id}/product_lists/{list_id}/items | 
[**postCustomersByIDProductListsByIDItemsByIDPurchases**](CustomersApi.md#postCustomersByIDProductListsByIDItemsByIDPurchases) | **POST** /customers/{customer_id}/product_lists/{list_id}/items/{item_id}/purchases | 
[**postCustomersPasswordActionsCreateResetToken**](CustomersApi.md#postCustomersPasswordActionsCreateResetToken) | **POST** /customers/password/actions/create_reset_token | 
[**postCustomersPasswordActionsReset**](CustomersApi.md#postCustomersPasswordActionsReset) | **POST** /customers/password/actions/reset | 
[**postCustomersPasswordReset**](CustomersApi.md#postCustomersPasswordReset) | **POST** /customers/password_reset | 
[**putCustomersByIDPassword**](CustomersApi.md#putCustomersByIDPassword) | **PUT** /customers/{customer_id}/password | 



## deleteCustomersAuth

> deleteCustomersAuth(opts)



Invalidates the JWT provided in the header.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.CustomersApi();
var opts = {
  'authorization': "authorization_example" // String | the JWT
};
apiInstance.deleteCustomersAuth(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| the JWT | [optional] 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomersByIDAddressesByID

> deleteCustomersByIDAddressesByID(customerId, addressName)



Deletes a customer&#39;s address by address name.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to delete the address for
var addressName = "addressName_example"; // String | the name of the address to delete
apiInstance.deleteCustomersByIDAddressesByID(customerId, addressName).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to delete the address for | 
 **addressName** | **String**| the name of the address to delete | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomersByIDPaymentInstrumentsByID

> deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Deletes a customer&#39;s payment instrument.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to delete the payment instrument for
var paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be deleted
apiInstance.deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to delete the payment instrument for | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be deleted | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomersByIDProductListsByID

> deleteCustomersByIDProductListsByID(customerId, listId)



Deletes a customer product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id.
var listId = "listId_example"; // String | The product list id.
apiInstance.deleteCustomersByIDProductListsByID(customerId, listId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCustomersByIDProductListsByIDItemsByID

> deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId)



Removes an item from a customer product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the owner of the product list
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to delete.
apiInstance.deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the owner of the product list | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to delete. | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCustomersByID

> Customer getCustomersByID(customerId, opts)



Gets a customer.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomersByID(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDAddresses

> CustomerAddressResult getCustomersByIDAddresses(customerId, opts)



Returns a sorted pageable list of all customer addresses in the address book. The default page size is 10  customer addresses. The addresses are sorted so that the preferred address is always sorted first. The remaining  addresses are sorted alphabetically by ID.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer uuid
var opts = {
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDAddresses(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer uuid | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**CustomerAddressResult**](CustomerAddressResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDAddressesByID

> CustomerAddress getCustomersByIDAddressesByID(customerId, addressName)



Retrieves a customer&#39;s address by address name.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to retrieve the address for
var addressName = "addressName_example"; // String | the name of the address to retrieve
apiInstance.getCustomersByIDAddressesByID(customerId, addressName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the address for | 
 **addressName** | **String**| the name of the address to retrieve | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDBaskets

> BasketsResult getCustomersByIDBaskets(customerId)



Gets the baskets of a customer.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to retrieve the baskets for
apiInstance.getCustomersByIDBaskets(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the baskets for | 

### Return type

[**BasketsResult**](BasketsResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDOrders

> CustomerOrderResult getCustomersByIDOrders(customerId, opts)



Returns a pageable list of all customer&#39;s orders. The default page size is 10.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the customer uuid
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'crossSites': true, // Boolean | 
  'from': "from_example", // String | 
  'until': "until_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.getCustomersByIDOrders(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer uuid | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **crossSites** | **Boolean**|  | [optional] 
 **from** | **String**|  | [optional] 
 **until** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**CustomerOrderResult**](CustomerOrderResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDPaymentInstruments

> CustomerPaymentInstrumentResult getCustomersByIDPaymentInstruments(customerId, opts)



Gets customer payment instruments for an customer.  Can be limited to a specific payment  method by providing query parameter payment_method_id.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instruments for
var opts = {
  'paymentMethodId': "paymentMethodId_example" // String | 
};
apiInstance.getCustomersByIDPaymentInstruments(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the payment instruments for | 
 **paymentMethodId** | **String**|  | [optional] 

### Return type

[**CustomerPaymentInstrumentResult**](CustomerPaymentInstrumentResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDPaymentInstrumentsByID

> CustomerPaymentInstrument getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Retrieves a customer&#39;s payment instrument by its id.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instrument for
var paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be retrievedCustomer
apiInstance.getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to retrieve the payment instrument for | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be retrievedCustomer | 

### Return type

[**CustomerPaymentInstrument**](CustomerPaymentInstrument.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductLists

> CustomerProductListResult getCustomersByIDProductLists(customerId, opts)



Returns all customer product lists.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomersByIDProductLists(customerId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductListResult**](CustomerProductListResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductListsByID

> CustomerProductList getCustomersByIDProductListsByID(customerId, listId, opts)



Returns a customer product list of the given customer.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id.
var listId = "listId_example"; // String | The product list id.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByID(customerId, listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductList**](CustomerProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductListsByIDItems

> CustomerProductListItemResult getCustomersByIDProductListsByIDItems(customerId, listId, opts)



Returns a pageable list of all items of a customer&#39;s product list. The default page size is 10.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
var listId = "listId_example"; // String | The id of the product list.
var opts = {
  'expand': ["null"], // [String] | 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDProductListsByIDItems(customerId, listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list items for. | 
 **listId** | **String**| The id of the product list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**CustomerProductListItemResult**](CustomerProductListItemResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductListsByIDItemsByID

> CustomerProductListItem getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts)



Returns an item of a customer product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to retrieve.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list items for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**CustomerProductListItem**](CustomerProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductListsByIDItemsByIDPurchases

> CustomerProductListItemPurchaseResult getCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId)



Returns a list of all purchases of an item from a customer&#39;s product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer to retrieve the product list item purchases for.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to retrieve from.
apiInstance.getCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list item purchases for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve from. | 

### Return type

[**CustomerProductListItemPurchaseResult**](CustomerProductListItemPurchaseResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCustomersByIDProductListsByIDItemsByIDPurchasesByID

> CustomerProductListItemPurchase getCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId)



Returns a purchase of an item from a customer&#39;s product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to retrieve.
var purchaseId = "purchaseId_example"; // String | The id of the product list item purchase to retrieve.
apiInstance.getCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list items for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve. | 
 **purchaseId** | **String**| The id of the product list item purchase to retrieve. | 

### Return type

[**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchCustomersByID

> Customer patchCustomersByID(customerId, body)



Updates a customer.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the customer id
var body = new ShopApi.Customer(); // Customer | 
apiInstance.patchCustomersByID(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer id | 
 **body** | [**Customer**](Customer.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCustomersByIDAddressesByID

> CustomerAddress patchCustomersByIDAddressesByID(customerId, addressName, body)



Updates a customer&#39;s address by address name.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to update the address for
var addressName = "addressName_example"; // String | the name of the address to update
var body = new ShopApi.CustomerAddress(); // CustomerAddress | 
apiInstance.patchCustomersByIDAddressesByID(customerId, addressName, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to update the address for | 
 **addressName** | **String**| the name of the address to update | 
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCustomersByIDProductListsByID

> CustomerProductList patchCustomersByIDProductListsByID(customerId, listId, body)



Changes a product list. Changeable properties are the name, description and if the list is public.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id.
var listId = "listId_example"; // String | The product list id.
var body = new ShopApi.CustomerProductList(); // CustomerProductList | 
apiInstance.patchCustomersByIDProductListsByID(customerId, listId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 
 **body** | [**CustomerProductList**](CustomerProductList.md)|  | 

### Return type

[**CustomerProductList**](CustomerProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCustomersByIDProductListsByIDItemsByID

> CustomerProductListItem patchCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, body)



Updates an item of a customer&#39;s product list.  Considered values from the request body are:    priority: This is the priority of the customer&#39;s product list item.  public: This is the flag whether the customer&#39;s product list item is public.  quantity: used for product item type only. This is the quantity of  the customer&#39;s product list item.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property  must correspond to a custom attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem.  The value of this property must be valid for the type of custom attribute defined for ProductListItem.  

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the owner of the product list.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to update.
var body = new ShopApi.CustomerProductListItem(); // CustomerProductListItem | 
apiInstance.patchCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the owner of the product list. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to update. | 
 **body** | [**CustomerProductListItem**](CustomerProductListItem.md)|  | 

### Return type

[**CustomerProductListItem**](CustomerProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCustomersByIDProductListsByIDItemsByIDPurchasesByID

> CustomerProductListItemPurchase patchCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId, body)



Updates a purchase of an item from a customer&#39;s product list.  Considered values from the request body are:    custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property  must correspond to a custom attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItemPurchase.  The value of this property must be valid for the type of custom attribute defined for ProductListItemPurchase.  

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer to retrieve the product list item purchases for.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item to retrieve.
var purchaseId = "purchaseId_example"; // String | The id of the product list item purchase to retrieve.
var body = new ShopApi.CustomerProductListItemPurchase(); // CustomerProductListItemPurchase | 
apiInstance.patchCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer to retrieve the product list item purchases for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve. | 
 **purchaseId** | **String**| The id of the product list item purchase to retrieve. | 
 **body** | [**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)|  | 

### Return type

[**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomers

> Customer postCustomers(body)



Registers a customer.  The mandatory data are the credentials and profile last name and email.  When using OAuth the password in the request must not be set, otherwise an InvalidPasswordException will be thrown.  When using JWT the password is required.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.CustomerRegistration(); // CustomerRegistration | 
apiInstance.postCustomers(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerRegistration**](CustomerRegistration.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersAuth

> Customer postCustomersAuth(body, opts)



Obtains a new JWT (JSON Web Token) for a guest or registered  customer. Tokens are returned as a HTTP Authorization:Bearer response  header entry. These kinds of request are supported, as specified by the  type:    Type guest - creates a new guest (non-authenticated) customer  and returns a token for the customer.  Type credentials - authenticates credentials passed in the  HTTP Authorization:Basic request header, returning a token for a  successfully authenticated customer, otherwise it throws an  AuthenticationFailedException.  Type session - authenticates the customer (anonymous or registered)  based on the dwsid and dwsecuretoken cookies. It returns a token for a  successfully authenticated customer, otherwise it throws an  AuthenticationFailedException.  Type refresh - examines the token passed in the HTTP  Authorization:Bearer request header and when valid returns a new token  with an updated expiry time.     For a request of type credentials:    Updates profile attributes for the customer (for example,  \&quot;last-visited\&quot;).  Handles the maximum number of failed login attempts.    For a request of type session:    The session and corresponding dwsecuretoken must be active and valid. An expired session can&#39;t be  used. The dwsecuretoken cookie must have been used for at least one  previous HTTPS request with the same dwsid cookie.  Does not touch profile attributes for the registered customer (for example,  \&quot;last-visited\&quot;), since this is not a real login.  Returns different tokens for multiple requests with the same session id. Means, there should be  only one call per session.      About JWT The token contains 3 sections:    the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id,  issue and expiration time)  finally the signature section records the token signature.    A token is created and returned to the client whenever a registered  customer logs in (type \&quot;credentials\&quot;) or a guest customer requests it (type  \&quot;guest\&quot;). The token is returned in the response header as   Authorization: Bearer --token--    The client has to include the token in the request header as   Authorization: Bearer --token--   in any follow up request. The server declines any follow up requests  without a token or which cannot be verified based on the token signature  or expiration time. A token nearing its expiration time should be  exchanged for a new one (type \&quot;refresh\&quot;).    See \&quot;API Usage &gt; JWT\&quot; for more details on using JWT as an authentication  mechanism.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.AuthRequest(); // AuthRequest | 
var opts = {
  'authorization': "authorization_example" // String |              Authorization:Basic for type credentials             Authorization:Bearer for type refresh             
};
apiInstance.postCustomersAuth(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthRequest**](AuthRequest.md)|  | 
 **authorization** | **String**|              Authorization:Basic for type credentials             Authorization:Bearer for type refresh              | [optional] 

### Return type

[**Customer**](Customer.md)

### Authorization

[client_id](../README.md#client_id)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersAuthTrustedsystem

> Customer postCustomersAuthTrustedsystem(body)



Obtain the JWTs for registered customers whose credentials are stored using a third party system.              Accepts login_id and client_id      Returns a customer object in the response body, and the JWT generated against the client_id in the response header.      

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.TrustedSystemAuthRequest(); // TrustedSystemAuthRequest | 
apiInstance.postCustomersAuthTrustedsystem(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TrustedSystemAuthRequest**](TrustedSystemAuthRequest.md)|  | 

### Return type

[**Customer**](Customer.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDAddresses

> CustomerAddress postCustomersByIDAddresses(customerId, body)



Creates a new address with the given name for the given customer.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer to create the address for
var body = new ShopApi.CustomerAddress(); // CustomerAddress | 
apiInstance.postCustomersByIDAddresses(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer to create the address for | 
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDAuth

> Customer postCustomersByIDAuth(customerId)



  Obtains a new agent on behalf token for a registered customer. Token is returned as a HTTP Authorization:Bearer  response header entry.      A token is created and returned to the client whenever an agent with Create_Order_On_Behalf_Of  permission calls the resource for a registered customer.      The token is returned in the response header as Authorization: Bearer --token--.      The client has to include the token in the request header as Authorization: Bearer --token--    in any follow up request, the agent will do on behalf of the customer.    About the order on behalf token      The token contains 3 sections:      the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id, issue and expiration time)  finally the signature section records the token signature.      A token nearing its expiration time should be exchanged for a new one by calling this resource once more.  

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | specifies the customer to act on behalf of
apiInstance.postCustomersByIDAuth(customerId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| specifies the customer to act on behalf of | 

### Return type

[**Customer**](Customer.md)

### Authorization

[customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDPasswordReset

> postCustomersByIDPasswordReset(customerId)



Starts a password reset process. A password reset token is generated and passed together with the customer  resolved by the id provided as path parameter to a afterPOST hook. The hook  dw.ocapi.shop.customer.password_reset.afterPOST can utilize the provided reset token, for example to send a reset email.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer
apiInstance.postCustomersByIDPasswordReset(customerId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postCustomersByIDPaymentInstruments

> CustomerPaymentInstrument postCustomersByIDPaymentInstruments(customerId, body)



Adds a payment instrument to a customer information.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the id of the customer
var body = new ShopApi.CustomerPaymentInstrumentRequest(); // CustomerPaymentInstrumentRequest | 
apiInstance.postCustomersByIDPaymentInstruments(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the id of the customer | 
 **body** | [**CustomerPaymentInstrumentRequest**](CustomerPaymentInstrumentRequest.md)|  | 

### Return type

[**CustomerPaymentInstrument**](CustomerPaymentInstrument.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDProductLists

> CustomerProductList postCustomersByIDProductLists(customerId, body)



Creates a customer product list.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The customer id.
var body = new ShopApi.CustomerProductList(); // CustomerProductList | 
apiInstance.postCustomersByIDProductLists(customerId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The customer id. | 
 **body** | [**CustomerProductList**](CustomerProductList.md)|  | 

### Return type

[**CustomerProductList**](CustomerProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDProductListsByIDItems

> CustomerProductListItem postCustomersByIDProductListsByIDItems(customerId, listId, body)



Adds an item to the customer&#39;s product list. Considered values from the request body are:    type: a valid type, mandatory. This is the type of the item to be added to the customer&#39;s product  list.  priority: This is the priority of the item to be added to the customer&#39;s product list.  public: This is the flag whether the item to be added to the customer&#39;s product list is public.  product_id: a valid product id, used for product item type only. This is the id (sku)  of the product related to the item to be added to the customer&#39;s product list. It is mandatory for  product item type and it must be a valid product id, otherwise  ProductListProductIdMissingException or ProductListProductNotFoundException  will be thrown.  quantity: used for product item type only. This is the quantity of the item to be  added to the customer&#39;s product list.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem. The value of this property must be valid for the  type of custom attribute defined for ProductListItem.  

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer - owner of the product list.
var listId = "listId_example"; // String | The id of the product list
var body = new ShopApi.CustomerProductListItem(); // CustomerProductListItem | 
apiInstance.postCustomersByIDProductListsByIDItems(customerId, listId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer - owner of the product list. | 
 **listId** | **String**| The id of the product list | 
 **body** | [**CustomerProductListItem**](CustomerProductListItem.md)|  | 

### Return type

[**CustomerProductListItem**](CustomerProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersByIDProductListsByIDItemsByIDPurchases

> CustomerProductListItemPurchase postCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId, body)



Adds a purchase to an item in the customer&#39;s product list. Considered values from the request body are:    purchaser_name: name of the purchaser, mandatory. This is the full name of the purchaser of this product  list item.  quantity: amount purchased, mandatory. This is the quantity of the items purchased from  the product list.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItemPurchase. The value of this property must be valid for the  type of custom attribute defined for ProductListItemPurchase.  

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | The id of the customer - owner of the product list.
var listId = "listId_example"; // String | The id of the product list.
var itemId = "itemId_example"; // String | The id of the product list item where to add the purchase.
var body = new ShopApi.CustomerProductListItemPurchase(); // CustomerProductListItemPurchase | 
apiInstance.postCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The id of the customer - owner of the product list. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item where to add the purchase. | 
 **body** | [**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)|  | 

### Return type

[**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersPasswordActionsCreateResetToken

> ResetPasswordTokenResult postCustomersPasswordActionsCreateResetToken(body)



Returns a reset password token for the passed in customer&#39;s login that will be used   with the customers/reset_password endpoint to change the customer&#39;s password.    This differs from the customers/password_reset endpoint as it does not require or allow before or after hook processing.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.ResetPasswordTokenRequest(); // ResetPasswordTokenRequest | 
apiInstance.postCustomersPasswordActionsCreateResetToken(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetPasswordTokenRequest**](ResetPasswordTokenRequest.md)|  | 

### Return type

[**ResetPasswordTokenResult**](ResetPasswordTokenResult.md)

### Authorization

[client_id](../README.md#client_id), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCustomersPasswordActionsReset

> postCustomersPasswordActionsReset(body)



Changes the customer&#39;s password to the new password value in the call using the reset   password token that was returned from the customers/reset_password_token endpoint.    This differs from the customers/password_reset endpoint as it does not require or allow before or after hook processing.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.ResetPasswordRequest(); // ResetPasswordRequest | 
apiInstance.postCustomersPasswordActionsReset(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ResetPasswordRequest**](ResetPasswordRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## postCustomersPasswordReset

> postCustomersPasswordReset(body)



First the beforePOST hook is called. After that the validation of the   customer information provided in the the password reset document is performed.   Then a password reset token is generated and together with the resolved   customer is passed to a afterPOST hook. The customer resolution is based   on the password reset request type. Both hooks are performed in a single  transaction.  Currently the resolution can be done by email or login. In case of  an email the password reset hook is only executed if one and only one  customer has been identified for that email. In the case that more than  one customers have been identified for the provided email the resource  does nothing.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

var apiInstance = new ShopApi.CustomersApi();
var body = new ShopApi.PasswordReset(); // PasswordReset | 
apiInstance.postCustomersPasswordReset(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putCustomersByIDPassword

> putCustomersByIDPassword(customerId, body)



Updates the customer&#39;s password.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.CustomersApi();
var customerId = "customerId_example"; // String | the customer id
var body = new ShopApi.PasswordChangeRequest(); // PasswordChangeRequest | 
apiInstance.putCustomersByIDPassword(customerId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| the customer id | 
 **body** | [**PasswordChangeRequest**](PasswordChangeRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined

