# DataApi.InventoryListsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInventoryListsByID**](InventoryListsApi.md#deleteInventoryListsByID) | **DELETE** /inventory_lists/{id} | 
[**deleteInventoryListsByIDProductInventoryRecordsByID**](InventoryListsApi.md#deleteInventoryListsByIDProductInventoryRecordsByID) | **DELETE** /inventory_lists/{inventory_list_id}/product_inventory_records/{product_id} | 
[**getInventoryLists**](InventoryListsApi.md#getInventoryLists) | **GET** /inventory_lists | 
[**getInventoryListsByID**](InventoryListsApi.md#getInventoryListsByID) | **GET** /inventory_lists/{id} | 
[**getInventoryListsByIDProductInventoryRecords**](InventoryListsApi.md#getInventoryListsByIDProductInventoryRecords) | **GET** /inventory_lists/{inventory_list_id}/product_inventory_records | 
[**getInventoryListsByIDProductInventoryRecordsByID**](InventoryListsApi.md#getInventoryListsByIDProductInventoryRecordsByID) | **GET** /inventory_lists/{inventory_list_id}/product_inventory_records/{product_id} | 
[**patchInventoryListsByID**](InventoryListsApi.md#patchInventoryListsByID) | **PATCH** /inventory_lists/{id} | 
[**patchInventoryListsByIDProductInventoryRecordsByID**](InventoryListsApi.md#patchInventoryListsByIDProductInventoryRecordsByID) | **PATCH** /inventory_lists/{inventory_list_id}/product_inventory_records/{product_id} | 
[**putInventoryListsByID**](InventoryListsApi.md#putInventoryListsByID) | **PUT** /inventory_lists/{id} | 
[**putInventoryListsByIDProductInventoryRecordsByID**](InventoryListsApi.md#putInventoryListsByIDProductInventoryRecordsByID) | **PUT** /inventory_lists/{inventory_list_id}/product_inventory_records/{product_id} | 



## deleteInventoryListsByID

> deleteInventoryListsByID(id)



Deletes the inventory list by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var id = "id_example"; // String | One inventory list id to remove
apiInstance.deleteInventoryListsByID(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| One inventory list id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteInventoryListsByIDProductInventoryRecordsByID

> deleteInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId)



Deletes a product inventory record by ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var inventoryListId = "inventoryListId_example"; // String | The inventory list ID
var productId = "productId_example"; // String | The product ID
apiInstance.deleteInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getInventoryLists

> InventoryLists getInventoryLists(opts)



Action to get all the inventory lists with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var opts = {
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getInventoryLists(opts).then(function(data) {
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

### Return type

[**InventoryLists**](InventoryLists.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getInventoryListsByID

> InventoryList getInventoryListsByID(id)



Action to get inventory list information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var id = "id_example"; // String | The id of the requested inventory list.
apiInstance.getInventoryListsByID(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested inventory list. | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getInventoryListsByIDProductInventoryRecords

> ProductInventoryRecords getInventoryListsByIDProductInventoryRecords(inventoryListId, opts)



Gets all product inventory records for an inventory list.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var inventoryListId = "inventoryListId_example"; // String | The inventory list ID
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getInventoryListsByIDProductInventoryRecords(inventoryListId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryListId** | **String**| The inventory list ID | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**ProductInventoryRecords**](ProductInventoryRecords.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getInventoryListsByIDProductInventoryRecordsByID

> ProductInventoryRecord getInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId)



Gets a product inventory record.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var inventoryListId = "inventoryListId_example"; // String | The inventory list ID
var productId = "productId_example"; // String | The product ID
apiInstance.getInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 

### Return type

[**ProductInventoryRecord**](ProductInventoryRecord.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchInventoryListsByID

> InventoryList patchInventoryListsByID(id, body)



Updates the inventory list with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var id = "id_example"; // String | The id of the requested inventory list.
var body = new DataApi.InventoryList(); // InventoryList | 
apiInstance.patchInventoryListsByID(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the requested inventory list. | 
 **body** | [**InventoryList**](InventoryList.md)|  | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchInventoryListsByIDProductInventoryRecordsByID

> ProductInventoryRecord patchInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId, body)



Updates the product inventory record with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var inventoryListId = "inventoryListId_example"; // String | The inventory list ID
var productId = "productId_example"; // String | The product ID
var body = new DataApi.ProductInventoryRecord(); // ProductInventoryRecord | 
apiInstance.patchInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 
 **body** | [**ProductInventoryRecord**](ProductInventoryRecord.md)|  | 

### Return type

[**ProductInventoryRecord**](ProductInventoryRecord.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putInventoryListsByID

> InventoryList putInventoryListsByID(id, body)



Creates an inventory list using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var id = "id_example"; // String | The id of the inventory list to create.
var body = new DataApi.InventoryList(); // InventoryList | 
apiInstance.putInventoryListsByID(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the inventory list to create. | 
 **body** | [**InventoryList**](InventoryList.md)|  | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putInventoryListsByIDProductInventoryRecordsByID

> ProductInventoryRecord putInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId, body)



Creates a product inventory record using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.InventoryListsApi();
var inventoryListId = "inventoryListId_example"; // String | The inventory list ID
var productId = "productId_example"; // String | The product ID
var body = new DataApi.ProductInventoryRecord(); // ProductInventoryRecord | 
apiInstance.putInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 
 **body** | [**ProductInventoryRecord**](ProductInventoryRecord.md)|  | 

### Return type

[**ProductInventoryRecord**](ProductInventoryRecord.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

