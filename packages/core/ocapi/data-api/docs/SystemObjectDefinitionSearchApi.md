# DataApi.SystemObjectDefinitionSearchApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postSystemObjectDefinitionSearch**](SystemObjectDefinitionSearchApi.md#postSystemObjectDefinitionSearch) | **POST** /system_object_definition_search | 



## postSystemObjectDefinitionSearch

> ObjectTypeDefinitionSearchResult postSystemObjectDefinitionSearch(body)



Searches for system objects.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    object_type - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  read_only - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    object_type - String  display_name - Localized&lt;String&gt;  description - Localized&lt;String&gt;  read_only - Boolean  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SystemObjectDefinitionSearchApi();
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSystemObjectDefinitionSearch(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**ObjectTypeDefinitionSearchResult**](ObjectTypeDefinitionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

