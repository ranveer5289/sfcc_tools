# DataApi.LibrariesApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteLibrariesByIDContentByID"></a>
# **deleteLibrariesByIDContentByID**
> deleteLibrariesByIDContentByID(libraryId, contentId)



Deletes the content asset with the specified ID from the specified library. If the content asset is not found, the server returns a 404 (NotFoundException) fault. If the content asset is locked by another user, the server returns a 409 (ResourceLockedException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException) fault.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to remove.

apiInstance.deleteLibrariesByIDContentByID(libraryId, contentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteLibrariesByIDFolderAssignmentsByIDByID"></a>
# **deleteLibrariesByIDFolderAssignmentsByIDByID**
> deleteLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId)



Action to unassign a content asset from the specified library folder.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.deleteLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteLibrariesByIDFoldersByID"></a>
# **deleteLibrariesByIDFoldersByID**
> deleteLibrariesByIDFoldersByID(libraryId, folderId)



Delete folder

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.deleteLibrariesByIDFoldersByID(libraryId, folderId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getLibrariesByIDContentByID"></a>
# **getLibrariesByIDContentByID**
> ContentAsset getLibrariesByIDContentByID(libraryId, contentId)



Returns a content asset using the specified ID. If the content asset cannot be found, the server returns a 404 (ContentNotFoundException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException).

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to retrieve.

apiInstance.getLibrariesByIDContentByID(libraryId, contentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getLibrariesByIDContentByIDFolders"></a>
# **getLibrariesByIDContentByIDFolders**
> ContentFolderResult getLibrariesByIDContentByIDFolders(libraryId, contentId, opts)



Action to get all assigned folders of a content asset.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | The content id of the assignment.
let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDContentByIDFolders(libraryId, contentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getLibrariesByIDFolderAssignmentsByIDByID"></a>
# **getLibrariesByIDFolderAssignmentsByIDByID**
> ContentFolderAssignment getLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId)



Action to get a single content to folder assignment

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to retrieve.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.getLibrariesByIDFolderAssignmentsByIDByID(libraryId, contentId, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getLibrariesByIDFoldersByID"></a>
# **getLibrariesByIDFoldersByID**
> ContentFolder getLibrariesByIDFoldersByID(libraryId, folderId)



Action to get folder information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.getLibrariesByIDFoldersByID(libraryId, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getLibrariesByIDFoldersByIDContent"></a>
# **getLibrariesByIDFoldersByIDContent**
> ContentAssetResult getLibrariesByIDFoldersByIDContent(libraryId, folderId, opts)



Action to get all assigned content assets of a folder.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.
let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDFoldersByIDContent(libraryId, folderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getLibrariesByIDFoldersByIDSubFolders"></a>
# **getLibrariesByIDFoldersByIDSubFolders**
> ContentSubFolderResult getLibrariesByIDFoldersByIDSubFolders(libraryId, folderId, opts)



Action to get sub folders information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.
let opts = { 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getLibrariesByIDFoldersByIDSubFolders(libraryId, folderId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchLibrariesByIDContentByID"></a>
# **patchLibrariesByIDContentByID**
> ContentAsset patchLibrariesByIDContentByID(bodylibraryIdcontentId)



Updates a content asset. In the request, the If-Match header is required. The value of the header is an &#x27;ETag&#x27; representing the last known base-point information for the content asset. If the header is missing, the server returns a 409 (IfMatchRequiredException) fault. If the header value does not match the server&#x27;s &#x27;ETag&#x27;, the server returns a 412 (InvalidIfMatchException) fault. The delta information for the library folder containing the content asset is updated atomically: the information is written completely or not at all. If the content asset is locked, the server returns a 409 (ResourceLockedException) fault.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let body = new DataApi.ContentAsset(); // ContentAsset | 
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to retrieve.

apiInstance.patchLibrariesByIDContentByID(bodylibraryIdcontentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentAsset**](ContentAsset.md)|  | 
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 

### Return type

[**ContentAsset**](ContentAsset.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchLibrariesByIDFolderAssignmentsByIDByID"></a>
# **patchLibrariesByIDFolderAssignmentsByIDByID**
> ContentFolderAssignment patchLibrariesByIDFolderAssignmentsByIDByID(bodylibraryIdcontentIdfolderId)



Action to update a single content to folder assignment. Currently only the position and default attribute can be changed.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let body = new DataApi.ContentFolderAssignment(); // ContentFolderAssignment | 
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the content id of the assignment
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.patchLibrariesByIDFolderAssignmentsByIDByID(bodylibraryIdcontentIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentFolderAssignment**](ContentFolderAssignment.md)|  | 
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the content id of the assignment | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

[**ContentFolderAssignment**](ContentFolderAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchLibrariesByIDFoldersByID"></a>
# **patchLibrariesByIDFoldersByID**
> ContentFolder patchLibrariesByIDFoldersByID(bodylibraryIdfolderId)



Updates an existing folder. In the request, the If-Match header is required. The value of the header is an &#x27;ETag&#x27; representing the last known base-point information for the library folder. If the header is missing, the server returns a 409 (IfMatchRequiredException) fault. If the header value does not match the server&#x27;s &#x27;ETag&#x27;, the server returns a 412 (InvalidIfMatchException) fault. The delta information for the library folder is updated atomically: the information is written completely or not at all.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let body = new DataApi.ContentFolder(); // ContentFolder | 
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.patchLibrariesByIDFoldersByID(bodylibraryIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentFolder**](ContentFolder.md)|  | 
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

[**ContentFolder**](ContentFolder.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putLibrariesByIDContentByID"></a>
# **putLibrariesByIDContentByID**
> ContentAsset putLibrariesByIDContentByID(bodylibraryIdcontentId)



Creates a new content asset in the specified library, or overwrites an existing content asset. If a content asset with the specified ID already exists, the server completely overwrites the content asset. Please note: Existing folder assignments are not touched. If the existing content asset is locked, the server returns a 409 (ResourceLockedException) fault. If the connection is not secure, the server returns a 403 (SecureCommunicationRequiredException) fault.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let body = new DataApi.ContentAsset(); // ContentAsset | 
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let contentId = "contentId_example"; // String | the ID of the content asset to retrieve.

apiInstance.putLibrariesByIDContentByID(bodylibraryIdcontentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentAsset**](ContentAsset.md)|  | 
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **contentId** | **String**| the ID of the content asset to retrieve. | 

### Return type

[**ContentAsset**](ContentAsset.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putLibrariesByIDFolderAssignmentsByIDByID"></a>
# **putLibrariesByIDFolderAssignmentsByIDByID**
> ContentFolderAssignment putLibrariesByIDFolderAssignmentsByIDByID(libraryIdcontentIdfolderId)



Action to assign a content asset to a specified folder.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let libraryId = "libraryId_example"; // String | the ID of the shared library or the site-id in case of a private library
let contentId = "contentId_example"; // String | the content id
let folderId = "folderId_example"; // String | the folder id

apiInstance.putLibrariesByIDFolderAssignmentsByIDByID(libraryIdcontentIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="putLibrariesByIDFoldersByID"></a>
# **putLibrariesByIDFoldersByID**
> ContentFolder putLibrariesByIDFoldersByID(bodylibraryIdfolderId)



Action to create a new library folder, or to replace an existing folder. This action completely overwrites existing folders. Please note: Sub folders and assignments to content assets are not touched. This action ignores the folder ID in the input document.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.LibrariesApi();
let body = new DataApi.ContentFolder(); // ContentFolder | 
let libraryId = "libraryId_example"; // String | ID of the shared library or the site-id in case of a private library.
let folderId = "folderId_example"; // String | ID of a target folder.

apiInstance.putLibrariesByIDFoldersByID(bodylibraryIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ContentFolder**](ContentFolder.md)|  | 
 **libraryId** | **String**| ID of the shared library or the site-id in case of a private library. | 
 **folderId** | **String**| ID of a target folder. | 

### Return type

[**ContentFolder**](ContentFolder.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

