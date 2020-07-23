# DataApi.CatalogSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCatalogSearch**](CatalogSearchApi.md#postCatalogSearch) | **POST** /catalog_search | 

<a name="postCatalogSearch"></a>
# **postCatalogSearch**
> CatalogSearchResult postCatalogSearch(body)



Searches for catalogs.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime      There are two additional fields that can be used as search filters. They are not attributes in CatalogWO object,   but can be used as filters to query catalogs based on site assignments.    is_master_catalog - Boolean  is_storefront_catalog - Boolean      On using is_master_catalog in the search query, catalogs without any site assignments are returned.   On using is_storefront_catalog in the search query, catalogs with one or more site assignments are returned.    The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CatalogSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 

apiInstance.postCatalogSearch(body).then((data) => {
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

[**CatalogSearchResult**](CatalogSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

