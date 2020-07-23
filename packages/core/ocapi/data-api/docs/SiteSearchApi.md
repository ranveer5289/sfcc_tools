# DataApi.SiteSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postSiteSearch**](SiteSearchApi.md#postSiteSearch) | **POST** /site_search | 

<a name="postSiteSearch"></a>
# **postSiteSearch**
> SiteSearchResult postSiteSearch(body)



Searches for sites.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  display_name - Localized &lt;String&gt;  description - Localized &lt;String&gt;  in_deletion - Boolean  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SiteSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 

apiInstance.postSiteSearch(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

