# DataApi.RoleSearchApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postRoleSearch**](RoleSearchApi.md#postRoleSearch) | **POST** /role_search | 



## postRoleSearch

> RoleSearchResult postRoleSearch(body)



Searches for access roles.  The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String    Optionally, a user ID (the user login) can be specified. When it is supplied, the search for roles is limited to the  roles assigned to this user. When expanding the permissions for the roles, all effective permissions for this user can be retrieved.   Optionally, a (single) permission can be specified. When it is supplied, the search for roles is limited to the  roles having this permission. When expanding the users for the roles, all users having this permission can be retrieved.   The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RoleSearchApi();
var body = new DataApi.RoleSearchRequest(); // RoleSearchRequest | 
apiInstance.postRoleSearch(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RoleSearchRequest**](RoleSearchRequest.md)|  | 

### Return type

[**RoleSearchResult**](RoleSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

