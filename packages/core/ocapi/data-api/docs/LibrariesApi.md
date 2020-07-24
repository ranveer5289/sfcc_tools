# DataApi.LibrariesApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteLibrariesByIDContentByID**](LibrariesApi.md#deleteLibrariesByIDContentByID) | **DELETE** /libraries/{library_id}/content/{content_id} | 
[**deleteLibrariesByIDFolderAssignmentsByIDByID**](LibrariesApi.md#deleteLibrariesByIDFolderAssignmentsByIDByID) | **DELETE** /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} | 
[**deleteLibrariesByIDFoldersByID**](LibrariesApi.md#deleteLibrariesByIDFoldersByID) | **DELETE** /libraries/{library_id}/folders/{folder_id} | 
[**getLibrariesByIDContentByID**](LibrariesApi.md#getLibrariesByIDContentByID) | **GET** /libraries/{library_id}/content/{content_id} | 
[**getLibrariesByIDContentByIDFolders**](LibrariesApi.md#getLibrariesByIDContentByIDFolders) | **GET** /libraries/{library_id}/content/{content_id}/folders | 
[**getLibrariesByIDFolderAssignmentsByIDByID**](LibrariesApi.md#getLibrariesByIDFolderAssignmentsByIDByID) | **GET** /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} | 
[**getLibrariesByIDFoldersByID**](LibrariesApi.md#getLibrariesByIDFoldersByID) | **GET** /libraries/{library_id}/folders/{folder_id} | 
[**getLibrariesByIDFoldersByIDContent**](LibrariesApi.md#getLibrariesByIDFoldersByIDContent) | **GET** /libraries/{library_id}/folders/{folder_id}/content | 
[**getLibrariesByIDFoldersByIDSubFolders**](LibrariesApi.md#getLibrariesByIDFoldersByIDSubFolders) | **GET** /libraries/{library_id}/folders/{folder_id}/sub_folders | 
[**patchLibrariesByIDContentByID**](LibrariesApi.md#patchLibrariesByIDContentByID) | **PATCH** /libraries/{library_id}/content/{content_id} | 
[**patchLibrariesByIDFolderAssignmentsByIDByID**](LibrariesApi.md#patchLibrariesByIDFolderAssignmentsByIDByID) | **PATCH** /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} | 
[**patchLibrariesByIDFoldersByID**](LibrariesApi.md#patchLibrariesByIDFoldersByID) | **PATCH** /libraries/{library_id}/folders/{folder_id} | 
[**putLibrariesByIDContentByID**](LibrariesApi.md#putLibrariesByIDContentByID) | **PUT** /libraries/{library_id}/content/{content_id} | 
[**putLibrariesByIDFolderAssignmentsByIDByID**](LibrariesApi.md#putLibrariesByIDFolderAssignmentsByIDByID) | **PUT** /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} | 
[**putLibrariesByIDFoldersByID**](LibrariesApi.md#putLibrariesByIDFoldersByID) | **PUT** /libraries/{library_id}/folders/{folder_id} | 



## deleteLibrariesByIDContentByID

> deleteLibrariesByIDContentByID(libraryId, contentId)



Deletes the content asset with the specified ID from the specified library. If the content asset is not found, the server returns a 404 (NotFoundException) fault. If the content asset is locked by another user, the server returns a 409 (ResourceLockedException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException) fault.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to remove.
apiInstance.deleteLibrariesByIDContentByID(libraryId, contentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to remove. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLibrariesByIDFolderAssignmentsByIDByID

> deleteLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId)



Action to unassign a content asset from the specified library folder.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
var folderId = "folderId_example"; // String | ID of a target folder.
apiInstance.deleteLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteLibrariesByIDFoldersByID

> deleteLibrariesByIDFoldersByID(libraryId, folderId)



Delete folder

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
apiInstance.deleteLibrariesByIDFoldersByID(libraryId, folderId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getLibrariesByIDContentByID

> ContentAsset getLibrariesByIDContentByID(libraryId, contentId)



Returns a content asset using the specified ID. If the content asset cannot be found, the server returns a 404 (ContentNotFoundException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException).

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
apiInstance.getLibrariesByIDContentByID(libraryId, contentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 

### Return type

[**ContentAsset**](ContentAsset.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getLibrariesByIDContentByIDFolders

> ContentFolderResult getLibrariesByIDContentByIDFolders(libraryId, contentId, opts)



Action to get all assigned folders of a content asset.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | The content id of the assignment.
var opts = {
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDContentByIDFolders(libraryId, contentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| The content id of the assignment. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**ContentFolderResult**](ContentFolderResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getLibrariesByIDFolderAssignmentsByIDByID

> ContentFolderAssignment getLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId)



Action to get a single content to folder assignment

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
var folderId = "folderId_example"; // String | ID of a target folder.
apiInstance.getLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

[**ContentFolderAssignment**](ContentFolderAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getLibrariesByIDFoldersByID

> ContentFolder getLibrariesByIDFoldersByID(libraryId, folderId)



Action to get folder information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
apiInstance.getLibrariesByIDFoldersByID(libraryId, folderId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

[**ContentFolder**](ContentFolder.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getLibrariesByIDFoldersByIDContent

> ContentAssetResult getLibrariesByIDFoldersByIDContent(libraryId, folderId, opts)



Action to get all assigned content assets of a folder.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
var opts = {
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDFoldersByIDContent(libraryId, folderId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**ContentAssetResult**](ContentAssetResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getLibrariesByIDFoldersByIDSubFolders

> ContentSubFolderResult getLibrariesByIDFoldersByIDSubFolders(libraryId, folderId, opts)



Action to get sub folders information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
var opts = {
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDFoldersByIDSubFolders(libraryId, folderId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**ContentSubFolderResult**](ContentSubFolderResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchLibrariesByIDContentByID

> ContentAsset patchLibrariesByIDContentByID(libraryId, contentId, body)



Updates a content asset. In the request, the If-Match header is required. The value of the header is an &#39;ETag&#39; representing the last known base-point information for the content asset. If the header is missing, the server returns a 409 (IfMatchRequiredException) fault. If the header value does not match the server&#39;s &#39;ETag&#39;, the server returns a 412 (InvalidIfMatchException) fault. The delta information for the library folder containing the content asset is updated atomically: the information is written completely or not at all. If the content asset is locked, the server returns a 409 (ResourceLockedException) fault.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
var body = new DataApi.ContentAsset(); // ContentAsset | 
apiInstance.patchLibrariesByIDContentByID(libraryId, contentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 
 **body** | [**ContentAsset**](ContentAsset.md)|  | 

### Return type

[**ContentAsset**](ContentAsset.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchLibrariesByIDFolderAssignmentsByIDByID

> ContentFolderAssignment patchLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId, body)



Action to update a single content to folder assignment. Currently only the position and default attribute can be changed.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the content id of the assignment
var folderId = "folderId_example"; // String | ID of a target folder.
var body = new DataApi.ContentFolderAssignment(); // ContentFolderAssignment | 
apiInstance.patchLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the content id of the assignment | 
 **folderId** | **String**| ID of a target folder. | 
 **body** | [**ContentFolderAssignment**](ContentFolderAssignment.md)|  | 

### Return type

[**ContentFolderAssignment**](ContentFolderAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchLibrariesByIDFoldersByID

> ContentFolder patchLibrariesByIDFoldersByID(libraryId, folderId, body)



Updates an existing folder. In the request, the If-Match header is required. The value of the header is an &#39;ETag&#39; representing the last known base-point information for the library folder. If the header is missing, the server returns a 409 (IfMatchRequiredException) fault. If the header value does not match the server&#39;s &#39;ETag&#39;, the server returns a 412 (InvalidIfMatchException) fault. The delta information for the library folder is updated atomically: the information is written completely or not at all.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
var body = new DataApi.ContentFolder(); // ContentFolder | 
apiInstance.patchLibrariesByIDFoldersByID(libraryId, folderId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 
 **body** | [**ContentFolder**](ContentFolder.md)|  | 

### Return type

[**ContentFolder**](ContentFolder.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putLibrariesByIDContentByID

> ContentAsset putLibrariesByIDContentByID(libraryId, contentId, body)



Creates a new content asset in the specified library, or overwrites an existing content asset. If a content asset with the specified ID already exists, the server completely overwrites the content asset. Please note: Existing folder assignments are not touched. If the existing content asset is locked, the server returns a 409 (ResourceLockedException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException) fault.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
var body = new DataApi.ContentAsset(); // ContentAsset | 
apiInstance.putLibrariesByIDContentByID(libraryId, contentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 
 **body** | [**ContentAsset**](ContentAsset.md)|  | 

### Return type

[**ContentAsset**](ContentAsset.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putLibrariesByIDFolderAssignmentsByIDByID

> ContentFolderAssignment putLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId, opts)



Action to assign a content asset to a specified folder.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | the ID of the shared library or the site-id in case of a private library
var contentId = "contentId_example"; // String | the content id
var folderId = "folderId_example"; // String | the folder id
var opts = {
  'body': new DataApi.ContentFolderAssignment() // ContentFolderAssignment | 
};
apiInstance.putLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| the ID of the shared library or the site-id in case of a private library | 
 **contentId** | **String**| the content id | 
 **folderId** | **String**| the folder id | 
 **body** | [**ContentFolderAssignment**](ContentFolderAssignment.md)|  | [optional] 

### Return type

[**ContentFolderAssignment**](ContentFolderAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putLibrariesByIDFoldersByID

> ContentFolder putLibrariesByIDFoldersByID(libraryId, folderId, body)



Action to create a new library folder, or to replace an existing folder. This action completely overwrites existing folders. Please note: Sub folders and assignments to content assets are not touched. This action ignores the folder ID in the input document.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.LibrariesApi();
var libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
var folderId = "folderId_example"; // String | ID of a target folder.
var body = new DataApi.ContentFolder(); // ContentFolder | 
apiInstance.putLibrariesByIDFoldersByID(libraryId, folderId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 
 **body** | [**ContentFolder**](ContentFolder.md)|  | 

### Return type

[**ContentFolder**](ContentFolder.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

