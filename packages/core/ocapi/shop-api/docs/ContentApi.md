# ShopApi.ContentApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContentByID**](ContentApi.md#getContentByID) | **GET** /content/{id} | 
[**getContentByIDs**](ContentApi.md#getContentByIDs) | **GET** /content/({ids}) | 



## getContentByID

> Content getContentByID(id, opts)



To access a content asset, you construct a URL using the template shown below. This template requires you to  specify a content asset id. In response, the server returns a corresponding content asset document. Only content  assets, which are marked as online are returned. An assignment to a folder is not necessary.

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

var apiInstance = new ShopApi.ContentApi();
var id = "id_example"; // String | The id of the requested content asset.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getContentByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested content asset. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Content**](Content.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getContentByIDs

> ContentResult getContentByIDs(ids, opts)



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

var apiInstance = new ShopApi.ContentApi();
var ids = ["null"]; // [String] | 
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getContentByIDs(ids, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **locale** | **String**|  | [optional] 

### Return type

[**ContentResult**](ContentResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

