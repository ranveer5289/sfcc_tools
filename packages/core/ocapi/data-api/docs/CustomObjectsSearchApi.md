# DataApi.CustomObjectsSearchApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCustomObjectsSearchByID**](CustomObjectsSearchApi.md#postCustomObjectsSearchByID) | **POST** /custom_objects_search/{object_type} | 



## postCustomObjectsSearchByID

> CustomObjectSearchResult postCustomObjectsSearchByID(objectType, body)



Search resource for custom objects in scope of a specific custom object type.    The custom object search document contains a search object that allows filtering on various attributes.      The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    key_value_string - String  key_value_integer - Integer  creation_date - Date  last_modified - Date  site_id - String  any custom attribute      Note that only searchable attributes can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CustomObjectsSearchApi();
var objectType = "objectType_example"; // String | ID of the object type to search objects for
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postCustomObjectsSearchByID(objectType, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectType** | **String**| ID of the object type to search objects for | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CustomObjectSearchResult**](CustomObjectSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

