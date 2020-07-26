# ShopApi.CategoriesApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoriesByID**](CategoriesApi.md#getCategoriesByID) | **GET** /categories/{id} | 
[**getCategoriesByIDs**](CategoriesApi.md#getCategoriesByIDs) | **GET** /categories/({ids}) | 



## getCategoriesByID

> Category getCategoriesByID(id, opts)



When you use the URL template below, the server returns a category identified by its id; by default, the server  also returns the first level of subcategories, but you can specify another level by setting the levels  parameter. The server only returns online categories.

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

var apiInstance = new ShopApi.CategoriesApi();
var id = "id_example"; // String | The id of the requested category.
var opts = {
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getCategoriesByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested category. | 
 **levels** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCategoriesByIDs

> CategoryResult getCategoriesByIDs(ids, opts)



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

var apiInstance = new ShopApi.CategoriesApi();
var ids = ["null"]; // [String] | 
var opts = {
  'levels': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getCategoriesByIDs(ids, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **levels** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**CategoryResult**](CategoryResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

