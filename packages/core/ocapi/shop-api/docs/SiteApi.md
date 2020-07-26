# ShopApi.SiteApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSite**](SiteApi.md#getSite) | **GET** /site | 



## getSite

> Site getSite()



Access site information, like site status and site content URLs.

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

var apiInstance = new ShopApi.SiteApi();
apiInstance.getSite().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Site**](Site.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

