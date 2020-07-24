# DataApi.LocaleInfoApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocaleInfoLocales**](LocaleInfoApi.md#getLocaleInfoLocales) | **GET** /locale_info/locales | 



## getLocaleInfoLocales

> LocaleResult getLocaleInfoLocales(opts)



Action to get the set of active locales for which the user has read or write permission.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LocaleInfoApi();
var opts = {
  'id': "id_example", // String | optional locale to return by id.  If specified, that locale is looked up and returned, otherwise the                list is returned.
  'select': "select_example", // String | the set of fields to return from the request.  Default is only the locale id.
  'start': 56, // Number | the start index for paging.  Default is 0.
  'count': 56 // Number | the count of the records to return in this page.  Default is 25.
};
apiInstance.getLocaleInfoLocales(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| optional locale to return by id.  If specified, that locale is looked up and returned, otherwise the                list is returned. | [optional] 
 **select** | **String**| the set of fields to return from the request.  Default is only the locale id. | [optional] 
 **start** | **Number**| the start index for paging.  Default is 0. | [optional] 
 **count** | **Number**| the count of the records to return in this page.  Default is 25. | [optional] 

### Return type

[**LocaleResult**](LocaleResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

