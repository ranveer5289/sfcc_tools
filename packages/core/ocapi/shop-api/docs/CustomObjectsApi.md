# ShopApi.CustomObjectsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomObjectsByIDByID**](CustomObjectsApi.md#getCustomObjectsByIDByID) | **GET** /custom_objects/{object_type}/{key} | 



## getCustomObjectsByIDByID

> CustomObject getCustomObjectsByIDByID(objectType, key)



Reads a custom object with a given object type ID and a value for the  key attribute of the object which represents its unique identifier.

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

var apiInstance = new ShopApi.CustomObjectsApi();
var objectType = "objectType_example"; // String | the ID of the object type
var key = "key_example"; // String | the key attribute value of the custom object
apiInstance.getCustomObjectsByIDByID(objectType, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the custom object | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

