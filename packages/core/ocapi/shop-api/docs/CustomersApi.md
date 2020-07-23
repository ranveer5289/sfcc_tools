# ShopApi.CustomersApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

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

<a name="deleteCustomersAuth"></a>
# **deleteCustomersAuth**
> deleteCustomersAuth(opts)



Invalidates the JWT provided in the header.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.CustomersApi();
let opts = { 
  'authorization': "authorization_example" // String | the JWT
};
apiInstance.deleteCustomersAuth(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomersByIDAddressesByID"></a>
# **deleteCustomersByIDAddressesByID**
> deleteCustomersByIDAddressesByID(customerId, addressName)



Deletes a customer&#x27;s address by address name.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to delete the address for
let addressName = "addressName_example"; // String | the name of the address to delete

apiInstance.deleteCustomersByIDAddressesByID(customerId, addressName).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomersByIDPaymentInstrumentsByID"></a>
# **deleteCustomersByIDPaymentInstrumentsByID**
> deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Deletes a customer&#x27;s payment instrument.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to delete the payment instrument for
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be deleted

apiInstance.deleteCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomersByIDProductListsByID"></a>
# **deleteCustomersByIDProductListsByID**
> deleteCustomersByIDProductListsByID(customerId, listId)



Deletes a customer product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The customer id.
let listId = "listId_example"; // String | The product list id.

apiInstance.deleteCustomersByIDProductListsByID(customerId, listId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteCustomersByIDProductListsByIDItemsByID"></a>
# **deleteCustomersByIDProductListsByIDItemsByID**
> deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId)



Removes an item from a customer product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The id of the owner of the product list
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to delete.

apiInstance.deleteCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getCustomersByID"></a>
# **getCustomersByID**
> Customer getCustomersByID(customerId, opts)



Gets a customer.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The customer id
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByID(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDAddresses"></a>
# **getCustomersByIDAddresses**
> CustomerAddressResult getCustomersByIDAddresses(customerId, opts)



Returns a sorted pageable list of all customer addresses in the address book. The default page size is 10  customer addresses. The addresses are sorted so that the preferred address is always sorted first. The remaining  addresses are sorted alphabetically by ID.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The customer uuid
let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDAddresses(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDAddressesByID"></a>
# **getCustomersByIDAddressesByID**
> CustomerAddress getCustomersByIDAddressesByID(customerId, addressName)



Retrieves a customer&#x27;s address by address name.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to retrieve the address for
let addressName = "addressName_example"; // String | the name of the address to retrieve

apiInstance.getCustomersByIDAddressesByID(customerId, addressName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDBaskets"></a>
# **getCustomersByIDBaskets**
> BasketsResult getCustomersByIDBaskets(customerId)



Gets the baskets of a customer.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to retrieve the baskets for

apiInstance.getCustomersByIDBaskets(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDOrders"></a>
# **getCustomersByIDOrders**
> CustomerOrderResult getCustomersByIDOrders(customerId, opts)



Returns a pageable list of all customer&#x27;s orders. The default page size is 10.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the customer uuid
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'crossSites': true, // Boolean | 
  'from': "from_example", // String | 
  'until': "until_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.getCustomersByIDOrders(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDPaymentInstruments"></a>
# **getCustomersByIDPaymentInstruments**
> CustomerPaymentInstrumentResult getCustomersByIDPaymentInstruments(customerId, opts)



Gets customer payment instruments for an customer.  Can be limited to a specific payment  method by providing query parameter payment_method_id.    When the customer cannot be found CustomerNotFoundException  is thrown in a case of an agent but an empty result list is returned in a case of JWT.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instruments for
let opts = { 
  'paymentMethodId': "paymentMethodId_example" // String | 
};
apiInstance.getCustomersByIDPaymentInstruments(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDPaymentInstrumentsByID"></a>
# **getCustomersByIDPaymentInstrumentsByID**
> CustomerPaymentInstrument getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId)



Retrieves a customer&#x27;s payment instrument by its id.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer to retrieve the payment instrument for
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be retrievedCustomer

apiInstance.getCustomersByIDPaymentInstrumentsByID(customerId, paymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductLists"></a>
# **getCustomersByIDProductLists**
> CustomerProductListResult getCustomersByIDProductLists(customerId, opts)



Returns all customer product lists.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The customer id.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductLists(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductListsByID"></a>
# **getCustomersByIDProductListsByID**
> CustomerProductList getCustomersByIDProductListsByID(customerId, listId, opts)



Returns a customer product list of the given customer.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The customer id.
let listId = "listId_example"; // String | The product list id.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByID(customerId, listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductListsByIDItems"></a>
# **getCustomersByIDProductListsByIDItems**
> CustomerProductListItemResult getCustomersByIDProductListsByIDItems(customerId, listId, opts)



Returns a pageable list of all items of a customer&#x27;s product list. The default page size is 10.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
let listId = "listId_example"; // String | The id of the product list.
let opts = { 
  'expand': ["expand_example"], // [String] | 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getCustomersByIDProductListsByIDItems(customerId, listId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductListsByIDItemsByID"></a>
# **getCustomersByIDProductListsByIDItemsByID**
> CustomerProductListItem getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts)



Returns an item of a customer product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to retrieve.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getCustomersByIDProductListsByIDItemsByID(customerId, listId, itemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductListsByIDItemsByIDPurchases"></a>
# **getCustomersByIDProductListsByIDItemsByIDPurchases**
> CustomerProductListItemPurchaseResult getCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId)



Returns a list of all purchases of an item from a customer&#x27;s product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list item purchases for.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to retrieve from.

apiInstance.getCustomersByIDProductListsByIDItemsByIDPurchases(customerId, listId, itemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getCustomersByIDProductListsByIDItemsByIDPurchasesByID"></a>
# **getCustomersByIDProductListsByIDItemsByIDPurchasesByID**
> CustomerProductListItemPurchase getCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId)



Returns a purchase of an item from a customer&#x27;s product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list items for.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to retrieve.
let purchaseId = "purchaseId_example"; // String | The id of the product list item purchase to retrieve.

apiInstance.getCustomersByIDProductListsByIDItemsByIDPurchasesByID(customerId, listId, itemId, purchaseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchCustomersByID"></a>
# **patchCustomersByID**
> Customer patchCustomersByID(bodycustomerId)



Updates a customer.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.Customer(); // Customer | 
let customerId = "customerId_example"; // String | the customer id

apiInstance.patchCustomersByID(bodycustomerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Customer**](Customer.md)|  | 
 **customerId** | **String**| the customer id | 

### Return type

[**Customer**](Customer.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDAddressesByID"></a>
# **patchCustomersByIDAddressesByID**
> CustomerAddress patchCustomersByIDAddressesByID(bodycustomerIdaddressName)



Updates a customer&#x27;s address by address name.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerAddress(); // CustomerAddress | 
let customerId = "customerId_example"; // String | the id of the customer to update the address for
let addressName = "addressName_example"; // String | the name of the address to update

apiInstance.patchCustomersByIDAddressesByID(bodycustomerIdaddressName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 
 **customerId** | **String**| the id of the customer to update the address for | 
 **addressName** | **String**| the name of the address to update | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDProductListsByID"></a>
# **patchCustomersByIDProductListsByID**
> CustomerProductList patchCustomersByIDProductListsByID(bodycustomerIdlistId)



Changes a product list. Changeable properties are the name, description and if the list is public.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductList(); // CustomerProductList | 
let customerId = "customerId_example"; // String | The customer id.
let listId = "listId_example"; // String | The product list id.

apiInstance.patchCustomersByIDProductListsByID(bodycustomerIdlistId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductList**](CustomerProductList.md)|  | 
 **customerId** | **String**| The customer id. | 
 **listId** | **String**| The product list id. | 

### Return type

[**CustomerProductList**](CustomerProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDProductListsByIDItemsByID"></a>
# **patchCustomersByIDProductListsByIDItemsByID**
> CustomerProductListItem patchCustomersByIDProductListsByIDItemsByID(bodycustomerIdlistIditemId)



Updates an item of a customer&#x27;s product list.  Considered values from the request body are:    priority: This is the priority of the customer&#x27;s product list item.  public: This is the flag whether the customer&#x27;s product list item is public.  quantity: used for product item type only. This is the quantity of  the customer&#x27;s product list item.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property  must correspond to a custom attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem.  The value of this property must be valid for the type of custom attribute defined for ProductListItem.  

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductListItem(); // CustomerProductListItem | 
let customerId = "customerId_example"; // String | The id of the owner of the product list.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to update.

apiInstance.patchCustomersByIDProductListsByIDItemsByID(bodycustomerIdlistIditemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListItem**](CustomerProductListItem.md)|  | 
 **customerId** | **String**| The id of the owner of the product list. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to update. | 

### Return type

[**CustomerProductListItem**](CustomerProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchCustomersByIDProductListsByIDItemsByIDPurchasesByID"></a>
# **patchCustomersByIDProductListsByIDItemsByIDPurchasesByID**
> CustomerProductListItemPurchase patchCustomersByIDProductListsByIDItemsByIDPurchasesByID(bodycustomerIdlistIditemIdpurchaseId)



Updates a purchase of an item from a customer&#x27;s product list.  Considered values from the request body are:    custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property  must correspond to a custom attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItemPurchase.  The value of this property must be valid for the type of custom attribute defined for ProductListItemPurchase.  

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductListItemPurchase(); // CustomerProductListItemPurchase | 
let customerId = "customerId_example"; // String | The id of the customer to retrieve the product list item purchases for.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item to retrieve.
let purchaseId = "purchaseId_example"; // String | The id of the product list item purchase to retrieve.

apiInstance.patchCustomersByIDProductListsByIDItemsByIDPurchasesByID(bodycustomerIdlistIditemIdpurchaseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)|  | 
 **customerId** | **String**| The id of the customer to retrieve the product list item purchases for. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item to retrieve. | 
 **purchaseId** | **String**| The id of the product list item purchase to retrieve. | 

### Return type

[**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomers"></a>
# **postCustomers**
> Customer postCustomers(body)



Registers a customer.  The mandatory data are the credentials and profile last name and email.  When using OAuth the password in the request must not be set, otherwise an InvalidPasswordException will be thrown.  When using JWT the password is required.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerRegistration(); // CustomerRegistration | 

apiInstance.postCustomers(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postCustomersAuth"></a>
# **postCustomersAuth**
> Customer postCustomersAuth(body, opts)



Obtains a new JWT (JSON Web Token) for a guest or registered  customer. Tokens are returned as a HTTP Authorization:Bearer response  header entry. These kinds of request are supported, as specified by the  type:    Type guest - creates a new guest (non-authenticated) customer  and returns a token for the customer.  Type credentials - authenticates credentials passed in the  HTTP Authorization:Basic request header, returning a token for a  successfully authenticated customer, otherwise it throws an  AuthenticationFailedException.  Type session - authenticates the customer (anonymous or registered)  based on the dwsid and dwsecuretoken cookies. It returns a token for a  successfully authenticated customer, otherwise it throws an  AuthenticationFailedException.  Type refresh - examines the token passed in the HTTP  Authorization:Bearer request header and when valid returns a new token  with an updated expiry time.     For a request of type credentials:    Updates profile attributes for the customer (for example,  \&quot;last-visited\&quot;).  Handles the maximum number of failed login attempts.    For a request of type session:    The session and corresponding dwsecuretoken must be active and valid. An expired session can&#x27;t be  used. The dwsecuretoken cookie must have been used for at least one  previous HTTPS request with the same dwsid cookie.  Does not touch profile attributes for the registered customer (for example,  \&quot;last-visited\&quot;), since this is not a real login.  Returns different tokens for multiple requests with the same session id. Means, there should be  only one call per session.      About JWT The token contains 3 sections:    the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id,  issue and expiration time)  finally the signature section records the token signature.    A token is created and returned to the client whenever a registered  customer logs in (type \&quot;credentials\&quot;) or a guest customer requests it (type  \&quot;guest\&quot;). The token is returned in the response header as   Authorization: Bearer --token--    The client has to include the token in the request header as   Authorization: Bearer --token--   in any follow up request. The server declines any follow up requests  without a token or which cannot be verified based on the token signature  or expiration time. A token nearing its expiration time should be  exchanged for a new one (type \&quot;refresh\&quot;).    See \&quot;API Usage &gt; JWT\&quot; for more details on using JWT as an authentication  mechanism.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.AuthRequest(); // AuthRequest | 
let opts = { 
  'authorization': "authorization_example" // String |              Authorization:Basic for type credentials             Authorization:Bearer for type refresh             
};
apiInstance.postCustomersAuth(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postCustomersAuthTrustedsystem"></a>
# **postCustomersAuthTrustedsystem**
> Customer postCustomersAuthTrustedsystem(body)



Obtain the JWTs for registered customers whose credentials are stored using a third party system.              Accepts login_id and client_id      Returns a customer object in the response body, and the JWT generated against the client_id in the response header.      

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.TrustedSystemAuthRequest(); // TrustedSystemAuthRequest | 

apiInstance.postCustomersAuthTrustedsystem(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postCustomersByIDAddresses"></a>
# **postCustomersByIDAddresses**
> CustomerAddress postCustomersByIDAddresses(bodycustomerId)



Creates a new address with the given name for the given customer.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerAddress(); // CustomerAddress | 
let customerId = "customerId_example"; // String | the id of the customer to create the address for

apiInstance.postCustomersByIDAddresses(bodycustomerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerAddress**](CustomerAddress.md)|  | 
 **customerId** | **String**| the id of the customer to create the address for | 

### Return type

[**CustomerAddress**](CustomerAddress.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDAuth"></a>
# **postCustomersByIDAuth**
> Customer postCustomersByIDAuth(customerId)



  Obtains a new agent on behalf token for a registered customer. Token is returned as a HTTP Authorization:Bearer  response header entry.      A token is created and returned to the client whenever an agent with Create_Order_On_Behalf_Of  permission calls the resource for a registered customer.      The token is returned in the response header as Authorization: Bearer --token--.      The client has to include the token in the request header as Authorization: Bearer --token--    in any follow up request, the agent will do on behalf of the customer.    About the order on behalf token      The token contains 3 sections:      the header section (specifies token type and algorithm used)  the payload section (contains customer information, client id, issue and expiration time)  finally the signature section records the token signature.      A token nearing its expiration time should be exchanged for a new one by calling this resource once more.  

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | specifies the customer to act on behalf of

apiInstance.postCustomersByIDAuth(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postCustomersByIDPasswordReset"></a>
# **postCustomersByIDPasswordReset**
> postCustomersByIDPasswordReset(customerId)



Starts a password reset process. A password reset token is generated and passed together with the customer  resolved by the id provided as path parameter to a afterPOST hook. The hook  dw.ocapi.shop.customer.password_reset.afterPOST can utilize the provided reset token, for example to send a reset email.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let customerId = "customerId_example"; // String | the id of the customer

apiInstance.postCustomersByIDPasswordReset(customerId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="postCustomersByIDPaymentInstruments"></a>
# **postCustomersByIDPaymentInstruments**
> CustomerPaymentInstrument postCustomersByIDPaymentInstruments(bodycustomerId)



Adds a payment instrument to a customer information.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerPaymentInstrumentRequest(); // CustomerPaymentInstrumentRequest | 
let customerId = "customerId_example"; // String | the id of the customer

apiInstance.postCustomersByIDPaymentInstruments(bodycustomerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerPaymentInstrumentRequest**](CustomerPaymentInstrumentRequest.md)|  | 
 **customerId** | **String**| the id of the customer | 

### Return type

[**CustomerPaymentInstrument**](CustomerPaymentInstrument.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDProductLists"></a>
# **postCustomersByIDProductLists**
> CustomerProductList postCustomersByIDProductLists(bodycustomerId)



Creates a customer product list.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductList(); // CustomerProductList | 
let customerId = "customerId_example"; // String | The customer id.

apiInstance.postCustomersByIDProductLists(bodycustomerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductList**](CustomerProductList.md)|  | 
 **customerId** | **String**| The customer id. | 

### Return type

[**CustomerProductList**](CustomerProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDProductListsByIDItems"></a>
# **postCustomersByIDProductListsByIDItems**
> CustomerProductListItem postCustomersByIDProductListsByIDItems(bodycustomerIdlistId)



Adds an item to the customer&#x27;s product list. Considered values from the request body are:    type: a valid type, mandatory. This is the type of the item to be added to the customer&#x27;s product  list.  priority: This is the priority of the item to be added to the customer&#x27;s product list.  public: This is the flag whether the item to be added to the customer&#x27;s product list is public.  product_id: a valid product id, used for product item type only. This is the id (sku)  of the product related to the item to be added to the customer&#x27;s product list. It is mandatory for  product item type and it must be a valid product id, otherwise  ProductListProductIdMissingException or ProductListProductNotFoundException  will be thrown.  quantity: used for product item type only. This is the quantity of the item to be  added to the customer&#x27;s product list.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItem. The value of this property must be valid for the  type of custom attribute defined for ProductListItem.  

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductListItem(); // CustomerProductListItem | 
let customerId = "customerId_example"; // String | The id of the customer - owner of the product list.
let listId = "listId_example"; // String | The id of the product list

apiInstance.postCustomersByIDProductListsByIDItems(bodycustomerIdlistId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListItem**](CustomerProductListItem.md)|  | 
 **customerId** | **String**| The id of the customer - owner of the product list. | 
 **listId** | **String**| The id of the product list | 

### Return type

[**CustomerProductListItem**](CustomerProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersByIDProductListsByIDItemsByIDPurchases"></a>
# **postCustomersByIDProductListsByIDItemsByIDPurchases**
> CustomerProductListItemPurchase postCustomersByIDProductListsByIDItemsByIDPurchases(bodycustomerIdlistIditemId)



Adds a purchase to an item in the customer&#x27;s product list. Considered values from the request body are:    purchaser_name: name of the purchaser, mandatory. This is the full name of the purchaser of this product  list item.  quantity: amount purchased, mandatory. This is the quantity of the items purchased from  the product list.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductListItemPurchase. The value of this property must be valid for the  type of custom attribute defined for ProductListItemPurchase.  

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.CustomerProductListItemPurchase(); // CustomerProductListItemPurchase | 
let customerId = "customerId_example"; // String | The id of the customer - owner of the product list.
let listId = "listId_example"; // String | The id of the product list.
let itemId = "itemId_example"; // String | The id of the product list item where to add the purchase.

apiInstance.postCustomersByIDProductListsByIDItemsByIDPurchases(bodycustomerIdlistIditemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)|  | 
 **customerId** | **String**| The id of the customer - owner of the product list. | 
 **listId** | **String**| The id of the product list. | 
 **itemId** | **String**| The id of the product list item where to add the purchase. | 

### Return type

[**CustomerProductListItemPurchase**](CustomerProductListItemPurchase.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postCustomersPasswordActionsCreateResetToken"></a>
# **postCustomersPasswordActionsCreateResetToken**
> ResetPasswordTokenResult postCustomersPasswordActionsCreateResetToken(body)



Returns a reset password token for the passed in customer&#x27;s login that will be used   with the customers/reset_password endpoint to change the customer&#x27;s password.    This differs from the customers/password_reset endpoint as it does not require or allow before or after hook processing.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.ResetPasswordTokenRequest(); // ResetPasswordTokenRequest | 

apiInstance.postCustomersPasswordActionsCreateResetToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postCustomersPasswordActionsReset"></a>
# **postCustomersPasswordActionsReset**
> postCustomersPasswordActionsReset(body)



Changes the customer&#x27;s password to the new password value in the call using the reset   password token that was returned from the customers/reset_password_token endpoint.    This differs from the customers/password_reset endpoint as it does not require or allow before or after hook processing.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.ResetPasswordRequest(); // ResetPasswordRequest | 

apiInstance.postCustomersPasswordActionsReset(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="postCustomersPasswordReset"></a>
# **postCustomersPasswordReset**
> postCustomersPasswordReset(body)



First the beforePOST hook is called. After that the validation of the   customer information provided in the the password reset document is performed.   Then a password reset token is generated and together with the resolved   customer is passed to a afterPOST hook. The customer resolution is based   on the password reset request type. Both hooks are performed in a single  transaction.  Currently the resolution can be done by email or login. In case of  an email the password reset hook is only executed if one and only one  customer has been identified for that email. In the case that more than  one customers have been identified for the provided email the resource  does nothing.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.PasswordReset(); // PasswordReset | 

apiInstance.postCustomersPasswordReset(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="putCustomersByIDPassword"></a>
# **putCustomersByIDPassword**
> putCustomersByIDPassword(bodycustomerId)



Updates the customer&#x27;s password.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.CustomersApi();
let body = new ShopApi.PasswordChangeRequest(); // PasswordChangeRequest | 
let customerId = "customerId_example"; // String | the customer id

apiInstance.putCustomersByIDPassword(bodycustomerId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordChangeRequest**](PasswordChangeRequest.md)|  | 
 **customerId** | **String**| the customer id | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

