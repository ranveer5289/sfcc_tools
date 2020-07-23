# DataApi.PermissionsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPermissions**](PermissionsApi.md#getPermissions) | **GET** /permissions | 
[**getPermissionsBm**](PermissionsApi.md#getPermissionsBm) | **GET** /permissions/bm | 
[**getPermissionsBmFunctional**](PermissionsApi.md#getPermissionsBmFunctional) | **GET** /permissions/bm/functional | 
[**getPermissionsBmLocale**](PermissionsApi.md#getPermissionsBmLocale) | **GET** /permissions/bm/locale | 
[**getPermissionsBmModule**](PermissionsApi.md#getPermissionsBmModule) | **GET** /permissions/bm/module | 
[**getPermissionsBmWebdav**](PermissionsApi.md#getPermissionsBmWebdav) | **GET** /permissions/bm/webdav | 
[**getPermissionsCsc**](PermissionsApi.md#getPermissionsCsc) | **GET** /permissions/csc | 
[**getPermissionsCscModule**](PermissionsApi.md#getPermissionsCscModule) | **GET** /permissions/csc/module | 

<a name="getPermissions"></a>
# **getPermissions**
> ApplicationPermissions getPermissions(opts)



Get application specific permissions per type.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
let opts = { 
  'expand': ["expand_example"] // [String] | The permission expand. A comma separated list with the allowed values (bm, csc).
};
apiInstance.getPermissions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**[String]**](String.md)| The permission expand. A comma separated list with the allowed values (bm, csc). | [optional] 

### Return type

[**ApplicationPermissions**](ApplicationPermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsBm"></a>
# **getPermissionsBm**
> Bmpermissions getPermissionsBm(opts)



Get Business Manager permissions per type.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
let opts = { 
  'expand': ["expand_example"] // [String] | The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale).
};
apiInstance.getPermissionsBm(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**[String]**](String.md)| The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale). | [optional] 

### Return type

[**Bmpermissions**](Bmpermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsBmFunctional"></a>
# **getPermissionsBmFunctional**
> FunctionalPermissions getPermissionsBmFunctional()



Get functional permissions per scope.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmFunctional().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FunctionalPermissions**](FunctionalPermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsBmLocale"></a>
# **getPermissionsBmLocale**
> LocalePermissions getPermissionsBmLocale()



Get locale permissions per scope.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmLocale().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LocalePermissions**](LocalePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsBmModule"></a>
# **getPermissionsBmModule**
> ModulePermissions getPermissionsBmModule()



Get Business Manager module permissions per scope.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmModule().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModulePermissions**](ModulePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsBmWebdav"></a>
# **getPermissionsBmWebdav**
> WebdavPermissions getPermissionsBmWebdav()



Get WebDAV permissions per scope.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmWebdav().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WebdavPermissions**](WebdavPermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsCsc"></a>
# **getPermissionsCsc**
> Cscpermissions getPermissionsCsc(opts)



Get permissions per type.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
let opts = { 
  'expand': ["expand_example"] // [String] | The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale).
};
apiInstance.getPermissionsCsc(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expand** | [**[String]**](String.md)| The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale). | [optional] 

### Return type

[**Cscpermissions**](Cscpermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getPermissionsCscModule"></a>
# **getPermissionsCscModule**
> ModulePermissions getPermissionsCscModule()



Get CSC module permissions per scope.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsCscModule().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ModulePermissions**](ModulePermissions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

