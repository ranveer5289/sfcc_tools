# DataApi.InventoryListsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

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

<a name="deleteInventoryListsByID"></a>
# **deleteInventoryListsByID**
> deleteInventoryListsByID(id)



Deletes the inventory list by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let id = "id_example"; // String | One inventory list id to remove

apiInstance.deleteInventoryListsByID(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteInventoryListsByIDProductInventoryRecordsByID"></a>
# **deleteInventoryListsByIDProductInventoryRecordsByID**
> deleteInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId)



Deletes a product inventory record by ID.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let inventoryListId = "inventoryListId_example"; // String | The inventory list ID
let productId = "productId_example"; // String | The product ID

apiInstance.deleteInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="getInventoryLists"></a>
# **getInventoryLists**
> InventoryLists getInventoryLists(opts)



Action to get all the inventory lists with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let opts = { 
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getInventoryLists(opts).then((data) => {
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

[**InventoryLists**](InventoryLists.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getInventoryListsByID"></a>
# **getInventoryListsByID**
> InventoryList getInventoryListsByID(id)



Action to get inventory list information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let id = "id_example"; // String | The id of the requested inventory list.

apiInstance.getInventoryListsByID(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getInventoryListsByIDProductInventoryRecords"></a>
# **getInventoryListsByIDProductInventoryRecords**
> ProductInventoryRecords getInventoryListsByIDProductInventoryRecords(inventoryListId, opts)



Gets all product inventory records for an inventory list.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let inventoryListId = "inventoryListId_example"; // String | The inventory list ID
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getInventoryListsByIDProductInventoryRecords(inventoryListId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getInventoryListsByIDProductInventoryRecordsByID"></a>
# **getInventoryListsByIDProductInventoryRecordsByID**
> ProductInventoryRecord getInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId)



Gets a product inventory record.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let inventoryListId = "inventoryListId_example"; // String | The inventory list ID
let productId = "productId_example"; // String | The product ID

apiInstance.getInventoryListsByIDProductInventoryRecordsByID(inventoryListId, productId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchInventoryListsByID"></a>
# **patchInventoryListsByID**
> InventoryList patchInventoryListsByID(bodyid)



Updates the inventory list with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let body = new DataApi.InventoryList(); // InventoryList | 
let id = "id_example"; // String | The id of the requested inventory list.

apiInstance.patchInventoryListsByID(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryList**](InventoryList.md)|  | 
 **id** | **String**| The id of the requested inventory list. | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchInventoryListsByIDProductInventoryRecordsByID"></a>
# **patchInventoryListsByIDProductInventoryRecordsByID**
> ProductInventoryRecord patchInventoryListsByIDProductInventoryRecordsByID(bodyinventoryListIdproductId)



Updates the product inventory record with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let body = new DataApi.ProductInventoryRecord(); // ProductInventoryRecord | 
let inventoryListId = "inventoryListId_example"; // String | The inventory list ID
let productId = "productId_example"; // String | The product ID

apiInstance.patchInventoryListsByIDProductInventoryRecordsByID(bodyinventoryListIdproductId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductInventoryRecord**](ProductInventoryRecord.md)|  | 
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 

### Return type

[**ProductInventoryRecord**](ProductInventoryRecord.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putInventoryListsByID"></a>
# **putInventoryListsByID**
> InventoryList putInventoryListsByID(bodyid)



Creates an inventory list using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let body = new DataApi.InventoryList(); // InventoryList | 
let id = "id_example"; // String | The id of the inventory list to create.

apiInstance.putInventoryListsByID(bodyid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InventoryList**](InventoryList.md)|  | 
 **id** | **String**| The id of the inventory list to create. | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putInventoryListsByIDProductInventoryRecordsByID"></a>
# **putInventoryListsByIDProductInventoryRecordsByID**
> ProductInventoryRecord putInventoryListsByIDProductInventoryRecordsByID(bodyinventoryListIdproductId)



Creates a product inventory record using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.InventoryListsApi();
let body = new DataApi.ProductInventoryRecord(); // ProductInventoryRecord | 
let inventoryListId = "inventoryListId_example"; // String | The inventory list ID
let productId = "productId_example"; // String | The product ID

apiInstance.putInventoryListsByIDProductInventoryRecordsByID(bodyinventoryListIdproductId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductInventoryRecord**](ProductInventoryRecord.md)|  | 
 **inventoryListId** | **String**| The inventory list ID | 
 **productId** | **String**| The product ID | 

### Return type

[**ProductInventoryRecord**](ProductInventoryRecord.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

