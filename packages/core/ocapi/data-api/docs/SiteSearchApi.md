# DataApi.SiteSearchApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postSiteSearch**](SiteSearchApi.md#postSiteSearch) | **POST** /site_search | 



## postSiteSearch

> SiteSearchResult postSiteSearch(body)



Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SiteSearchApi();
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSiteSearch(body).then(function(data) {
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

[**SiteSearchResult**](SiteSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

