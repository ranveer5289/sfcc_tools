# DataApi.PermissionsApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

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



## getPermissions

> ApplicationPermissions getPermissions(opts)



Get application specific permissions per type.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
var opts = {
  'expand': ["null"] // [String] | The permission expand. A comma separated list with the allowed values (bm, csc).
};
apiInstance.getPermissions(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsBm

> Bmpermissions getPermissionsBm(opts)



Get Business Manager permissions per type.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
var opts = {
  'expand': ["null"] // [String] | The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale).
};
apiInstance.getPermissionsBm(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsBmFunctional

> FunctionalPermissions getPermissionsBmFunctional()



Get functional permissions per scope.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmFunctional().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsBmLocale

> LocalePermissions getPermissionsBmLocale()



Get locale permissions per scope.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmLocale().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsBmModule

> ModulePermissions getPermissionsBmModule()



Get Business Manager module permissions per scope.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmModule().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsBmWebdav

> WebdavPermissions getPermissionsBmWebdav()



Get WebDAV permissions per scope.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsBmWebdav().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsCsc

> Cscpermissions getPermissionsCsc(opts)



Get permissions per type.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
var opts = {
  'expand': ["null"] // [String] | The permission expand. A comma separated list with the allowed values   (module, functional, webdav, locale).
};
apiInstance.getPermissionsCsc(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getPermissionsCscModule

> ModulePermissions getPermissionsCscModule()



Get CSC module permissions per scope.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.PermissionsApi();
apiInstance.getPermissionsCscModule().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

