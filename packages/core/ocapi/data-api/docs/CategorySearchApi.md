# DataApi.CategorySearchApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCategorySearch**](CategorySearchApi.md#postCategorySearch) | **POST** /category_search | 



## postCategorySearch

> CategorySearchResult postCategorySearch(body, opts)



Searches for catalog categories anywhere they appear.  By default, the server also returns the first level of subcategories,   but you can specify another level by setting the levels parameter.    Please note, using a large value for levels may cause performance    issues in case of a large and deep category tree.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean  catalog_id - String     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean   position - Double   

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CategorySearchApi();
var body = new DataApi.SearchRequest(); // SearchRequest | 
var opts = {
  'levels': 56 // Number | 
};
apiInstance.postCategorySearch(body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **levels** | **Number**|  | [optional] 

### Return type

[**CategorySearchResult**](CategorySearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

