# DataApi.RolesApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteRolesByID"></a>
# **deleteRolesByID**
> deleteRolesByID(id)



Action to delete an access role.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | The id of the access role to delete.

apiInstance.deleteRolesByID(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteRolesByIDUsersByID"></a>
# **deleteRolesByIDUsersByID**
> deleteRolesByIDUsersByID(id, login)



Action to unassign a user to an access role

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | ID of the access role.
let login = "login_example"; // String | Login of the user.

apiInstance.deleteRolesByIDUsersByID(id, login).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getRoles"></a>
# **getRoles**
> Roles getRoles(opts)



Action to get all the access roles with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let opts = { 
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example", // String | The property selector.
  'expand': ["expand_example"] // [String] | List of expansions.
};
apiInstance.getRoles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getRolesByID"></a>
# **getRolesByID**
> Role getRolesByID(id, opts)



Action to get a single access role.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | The id of the requested access role.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getRolesByID(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getRolesByIDPermissions"></a>
# **getRolesByIDPermissions**
> RolePermissions getRolesByIDPermissions(id)



Retrieves a list of permissions assigned to the given role.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | The id of the requested access role.

apiInstance.getRolesByIDPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getRolesByIDUsers"></a>
# **getRolesByIDUsers**
> Users getRolesByIDUsers(id, opts)



Action to get all the users assigned to the specified access role.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | ID of the access role.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getRolesByIDUsers(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postRolesByIDUserSearch"></a>
# **postRolesByIDUserSearch**
> UserSearchResult postRolesByIDUserSearch(bodyid)



Searches for users of the specified access role.  The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  is_locked - Boolean  is_disabled - Boolean     The output of the query can also be sorted. These are the list of sortable attributes:    login - String  email - String  first_name - String  last_name - String  external_id - String  last_login_date - Date  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let id = "id_example"; // String | 

apiInstance.postRolesByIDUserSearch(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **id** | **String**|  | 

### Return type

[**UserSearchResult**](UserSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putRolesByID"></a>
# **putRolesByID**
> Role putRolesByID(bodyid)



Action to create an access role.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let body = new DataApi.Role(); // Role | 
let id = "id_example"; // String | The id of the access role to create.

apiInstance.putRolesByID(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Role**](Role.md)|  | 
 **id** | **String**| The id of the access role to create. | 

### Return type

[**Role**](Role.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putRolesByIDPermissions"></a>
# **putRolesByIDPermissions**
> RolePermissions putRolesByIDPermissions(bodyid)



Assigns permissions to the given role. This will replace the current permission assignments. For the &#x27;Administrator&#x27;  role only adjustments for custom module permissions will be processed but other given permissions will be ignored.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let body = new DataApi.RolePermissions(); // RolePermissions | 
let id = "id_example"; // String | The id of the access role for which the permissions will be set.

apiInstance.putRolesByIDPermissions(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RolePermissions**](RolePermissions.md)|  | 
 **id** | **String**| The id of the access role for which the permissions will be set. | 

### Return type

[**RolePermissions**](RolePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putRolesByIDUsersByID"></a>
# **putRolesByIDUsersByID**
> User putRolesByIDUsersByID(id, login)



Action to assign a user to an access role

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.RolesApi();
let id = "id_example"; // String | ID of the access role.
let login = "login_example"; // String | Login of the user.

apiInstance.putRolesByIDUsersByID(id, login).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

