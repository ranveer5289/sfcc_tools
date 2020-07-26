# DataApi.RolesApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRolesByID**](RolesApi.md#deleteRolesByID) | **DELETE** /roles/{id} | 
[**deleteRolesByIDUsersByID**](RolesApi.md#deleteRolesByIDUsersByID) | **DELETE** /roles/{id}/users/{login} | 
[**getRoles**](RolesApi.md#getRoles) | **GET** /roles | 
[**getRolesByID**](RolesApi.md#getRolesByID) | **GET** /roles/{id} | 
[**getRolesByIDPermissions**](RolesApi.md#getRolesByIDPermissions) | **GET** /roles/{id}/permissions | 
[**getRolesByIDUsers**](RolesApi.md#getRolesByIDUsers) | **GET** /roles/{id}/users | 
[**postRolesByIDUserSearch**](RolesApi.md#postRolesByIDUserSearch) | **POST** /roles/{id}/user_search | 
[**putRolesByID**](RolesApi.md#putRolesByID) | **PUT** /roles/{id} | 
[**putRolesByIDPermissions**](RolesApi.md#putRolesByIDPermissions) | **PUT** /roles/{id}/permissions | 
[**putRolesByIDUsersByID**](RolesApi.md#putRolesByIDUsersByID) | **PUT** /roles/{id}/users/{login} | 



## deleteRolesByID

> deleteRolesByID(id)



Action to delete an access role.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | The id of the access role to delete.
apiInstance.deleteRolesByID(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the access role to delete. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRolesByIDUsersByID

> deleteRolesByIDUsersByID(id, login)



Action to unassign a user to an access role

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | ID of the access role.
var login = "login_example"; // String | Login of the user.
apiInstance.deleteRolesByIDUsersByID(id, login).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the access role. | 
 **login** | **String**| Login of the user. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRoles

> Roles getRoles(opts)



Action to get all the access roles with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var opts = {
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example", // String | The property selector.
  'expand': ["null"] // [String] | List of expansions.
};
apiInstance.getRoles(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Optional start index for retrieving the items from a given index (default 0). | [optional] 
 **count** | **Number**| Optional count for retrieving only a subset of the items (default is 25). | [optional] 
 **select** | **String**| The property selector. | [optional] 
 **expand** | [**[String]**](String.md)| List of expansions. | [optional] 

### Return type

[**Roles**](Roles.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getRolesByID

> Role getRolesByID(id, opts)



Action to get a single access role.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | The id of the requested access role.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getRolesByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested access role. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Role**](Role.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getRolesByIDPermissions

> RolePermissions getRolesByIDPermissions(id)



Retrieves a list of permissions assigned to the given role.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | The id of the requested access role.
apiInstance.getRolesByIDPermissions(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested access role. | 

### Return type

[**RolePermissions**](RolePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getRolesByIDUsers

> Users getRolesByIDUsers(id, opts)



Action to get all the users assigned to the specified access role.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | ID of the access role.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getRolesByIDUsers(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the access role. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## postRolesByIDUserSearch

> UserSearchResult postRolesByIDUserSearch(id, body)



Searches for users of the specified access role.  The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  is_locked - Boolean  is_disabled - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | 
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postRolesByIDUserSearch(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**UserSearchResult**](UserSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putRolesByID

> Role putRolesByID(id, body)



Action to create an access role.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | The id of the access role to create.
var body = new DataApi.Role(); // Role | 
apiInstance.putRolesByID(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the access role to create. | 
 **body** | [**Role**](Role.md)|  | 

### Return type

[**Role**](Role.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putRolesByIDPermissions

> RolePermissions putRolesByIDPermissions(id, body)



Assigns permissions to the given role. This will replace the current permission assignments. For the &#39;Administrator&#39;  role only adjustments for custom module permissions will be processed but other given permissions will be ignored.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | The id of the access role for which the permissions will be set.
var body = new DataApi.RolePermissions(); // RolePermissions | 
apiInstance.putRolesByIDPermissions(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the access role for which the permissions will be set. | 
 **body** | [**RolePermissions**](RolePermissions.md)|  | 

### Return type

[**RolePermissions**](RolePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putRolesByIDUsersByID

> User putRolesByIDUsersByID(id, login)



Action to assign a user to an access role

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.RolesApi();
var id = "id_example"; // String | ID of the access role.
var login = "login_example"; // String | Login of the user.
apiInstance.putRolesByIDUsersByID(id, login).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the access role. | 
 **login** | **String**| Login of the user. | 

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

