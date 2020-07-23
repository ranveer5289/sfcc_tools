# DataApi.UsersApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsersByID**](UsersApi.md#deleteUsersByID) | **DELETE** /users/{login} | 
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | 
[**getUsersByID**](UsersApi.md#getUsersByID) | **GET** /users/{login} | 
[**getUsersThis**](UsersApi.md#getUsersThis) | **GET** /users/this | 
[**patchUsersByID**](UsersApi.md#patchUsersByID) | **PATCH** /users/{login} | 
[**patchUsersThisPassword**](UsersApi.md#patchUsersThisPassword) | **PATCH** /users/this/password | 
[**putUsersByID**](UsersApi.md#putUsersByID) | **PUT** /users/{login} | 

<a name="deleteUsersByID"></a>
# **deleteUsersByID**
> deleteUsersByID(login)



Action to delete a single user.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let login = "login_example"; // String | login of the user

apiInstance.deleteUsersByID(login).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login of the user | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getUsers"></a>
# **getUsers**
> Users getUsers(opts)



Action to get all users with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let opts = { 
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getUsers(opts).then((data) => {
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

### Return type

[**Users**](Users.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getUsersByID"></a>
# **getUsersByID**
> User getUsersByID(login)



Action to get a user.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let login = "login_example"; // String | login of the user

apiInstance.getUsersByID(login).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| login of the user | 

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getUsersThis"></a>
# **getUsersThis**
> User getUsersThis()



Action to get the user password expiration information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
apiInstance.getUsersThis().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="patchUsersByID"></a>
# **patchUsersByID**
> User patchUsersByID(bodylogin)



Action to update a user.   Note: The locked flag and the user password cannot be updated with this resource.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let body = new DataApi.User(); // User | 
let login = "login_example"; // String | login of the user

apiInstance.patchUsersByID(bodylogin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 
 **login** | **String**| login of the user | 

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchUsersThisPassword"></a>
# **patchUsersThisPassword**
> User patchUsersThisPassword(body)



Action to change a user password.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let body = new DataApi.PasswordChangeRequest(); // PasswordChangeRequest | 

apiInstance.patchUsersThisPassword(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordChangeRequest**](PasswordChangeRequest.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putUsersByID"></a>
# **putUsersByID**
> User putUsersByID(bodylogin)



Action to create or overwrite a user.   If a user with the given login already exists, the existing user will be overwritten.  If no such login exists, a new user is created.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.UsersApi();
let body = new DataApi.User(); // User | 
let login = "login_example"; // String | login of the user

apiInstance.putUsersByID(bodylogin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)|  | 
 **login** | **String**| login of the user | 

### Return type

[**User**](User.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

