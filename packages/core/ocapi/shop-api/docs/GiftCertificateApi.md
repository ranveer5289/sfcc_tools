# ShopApi.GiftCertificateApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postGiftCertificate**](GiftCertificateApi.md#postGiftCertificate) | **POST** /gift_certificate | 



## postGiftCertificate

> GiftCertificate postGiftCertificate(opts)



Action to retrieve an existing gift certificate.

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

var apiInstance = new ShopApi.GiftCertificateApi();
var opts = {
  'body': new ShopApi.GiftCertificateRequest() // GiftCertificateRequest | 
};
apiInstance.postGiftCertificate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificateRequest**](GiftCertificateRequest.md)|  | [optional] 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

