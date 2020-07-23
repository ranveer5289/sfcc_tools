# DataApi.InventoryListSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postInventoryListSearch**](InventoryListSearchApi.md#postInventoryListSearch) | **POST** /inventory_list_search | 

<a name="postInventoryListSearch"></a>
# **postInventoryListSearch**
> InventoryListSearchResult postInventoryListSearch(body)



Searches for inventory lists.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list  of searchable attributes:    id - String  default_in_stock - boolean  description - String  on_order_inventory_enabled - boolean  status - one of {\&quot;normal\&quot;,\&quot;delete\&quot;}  use_bundle_inventory_only - boolean  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 

apiInstance.postInventoryListSearch(body).then((data) => {
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

[**InventoryListSearchResult**](InventoryListSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

