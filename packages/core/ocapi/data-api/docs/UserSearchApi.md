# DataApi.UserSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postUserSearch**](UserSearchApi.md#postUserSearch) | **POST** /user_search | 

<a name="postUserSearch"></a>
# **postUserSearch**
> UserSearchResult postUserSearch(body)



Searches for users.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:      login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  is_locked - Boolean  is_disabled - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UserSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 

apiInstance.postUserSearch(body).then((data) => {
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

[**UserSearchResult**](UserSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

