# ShopApi.ProductListsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductLists**](ProductListsApi.md#getProductLists) | **GET** /product_lists | 
[**getProductListsByID**](ProductListsApi.md#getProductListsByID) | **GET** /product_lists/{list_id} | 
[**getProductListsByIDItems**](ProductListsApi.md#getProductListsByIDItems) | **GET** /product_lists/{list_id}/items | 
[**getProductListsByIDItemsByID**](ProductListsApi.md#getProductListsByIDItemsByID) | **GET** /product_lists/{list_id}/items/{item_id} | 



## getProductLists

> PublicProductListResult getProductLists(opts)



Retrieves all public product lists as defined by the given search term (email, first name, last name).

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

var apiInstance = new ShopApi.ProductListsApi();
var opts = {
  'email': "email_example", // String | The email address of the customer, the product lists belong to.
  'firstname': "firstname_example", // String | The first name of the customer, the product lists belong to.
  'lastname': "lastname_example" // String | The last name of the customer, the product lists belong to.
};
apiInstance.getProductLists(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| The email address of the customer, the product lists belong to. | [optional] 
 **firstname** | **String**| The first name of the customer, the product lists belong to. | [optional] 
 **lastname** | **String**| The last name of the customer, the product lists belong to. | [optional] 

### Return type

[**PublicProductListResult**](PublicProductListResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductListsByID

> PublicProductList getProductListsByID(listId, opts)



Retrieves a public product list by id.

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

var apiInstance = new ShopApi.ProductListsApi();
var listId = "listId_example"; // String | The id of the list.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getProductListsByID(listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductList**](PublicProductList.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductListsByIDItems

> PublicProductListItemResult getProductListsByIDItems(listId, opts)



Retrieves the items of a public product list.

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

var apiInstance = new ShopApi.ProductListsApi();
var listId = "listId_example"; // String | The id of the list.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getProductListsByIDItems(listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductListItemResult**](PublicProductListItemResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductListsByIDItemsByID

> PublicProductListItem getProductListsByIDItemsByID(listId, itemId, opts)



Retrieves an item from a public product list.

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

var apiInstance = new ShopApi.ProductListsApi();
var listId = "listId_example"; // String | The id of the list.
var itemId = "itemId_example"; // String | The id of the item.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getProductListsByIDItemsByID(listId, itemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The id of the list. | 
 **itemId** | **String**| The id of the item. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PublicProductListItem**](PublicProductListItem.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

