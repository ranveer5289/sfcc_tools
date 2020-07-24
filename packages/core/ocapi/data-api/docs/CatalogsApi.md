# DataApi.CatalogsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCatalogsByIDCategoriesByID**](CatalogsApi.md#deleteCatalogsByIDCategoriesByID) | **DELETE** /catalogs/{catalog_id}/categories/{category_id} | 
[**deleteCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID**](CatalogsApi.md#deleteCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID) | **DELETE** /catalogs/{catalog_id}/categories/{category_id}/category_links/{target_catalog_id}/{target_category_id}/{type} | 
[**deleteCatalogsByIDCategoriesByIDProductsByID**](CatalogsApi.md#deleteCatalogsByIDCategoriesByIDProductsByID) | **DELETE** /catalogs/{catalog_id}/categories/{category_id}/products/{product_id} | 
[**deleteCatalogsByIDSharedProductOptionsByID**](CatalogsApi.md#deleteCatalogsByIDSharedProductOptionsByID) | **DELETE** /catalogs/{catalog_id}/shared_product_options/{id} | 
[**deleteCatalogsByIDSharedProductOptionsByIDValuesByID**](CatalogsApi.md#deleteCatalogsByIDSharedProductOptionsByIDValuesByID) | **DELETE** /catalogs/{catalog_id}/shared_product_options/{option_id}/values/{id} | 
[**deleteCatalogsByIDSharedVariationAttributesByID**](CatalogsApi.md#deleteCatalogsByIDSharedVariationAttributesByID) | **DELETE** /catalogs/{catalog_id}/shared_variation_attributes/{id} | 
[**deleteCatalogsByIDSharedVariationAttributesByIDValuesByID**](CatalogsApi.md#deleteCatalogsByIDSharedVariationAttributesByIDValuesByID) | **DELETE** /catalogs/{catalog_id}/shared_variation_attributes/{attribute_id}/values/{id} | 
[**getCatalogs**](CatalogsApi.md#getCatalogs) | **GET** /catalogs | 
[**getCatalogsByID**](CatalogsApi.md#getCatalogsByID) | **GET** /catalogs/{catalog_id} | 
[**getCatalogsByIDCategories**](CatalogsApi.md#getCatalogsByIDCategories) | **GET** /catalogs/{catalog_id}/categories | 
[**getCatalogsByIDCategoriesByID**](CatalogsApi.md#getCatalogsByIDCategoriesByID) | **GET** /catalogs/{catalog_id}/categories/{category_id} | 
[**getCatalogsByIDCategoriesByIDCategoryLinks**](CatalogsApi.md#getCatalogsByIDCategoriesByIDCategoryLinks) | **GET** /catalogs/{catalog_id}/categories/{category_id}/category_links | 
[**getCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID**](CatalogsApi.md#getCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID) | **GET** /catalogs/{catalog_id}/categories/{category_id}/category_links/{target_catalog_id}/{target_category_id}/{type} | 
[**getCatalogsByIDCategoriesByIDProductsByID**](CatalogsApi.md#getCatalogsByIDCategoriesByIDProductsByID) | **GET** /catalogs/{catalog_id}/categories/{category_id}/products/{product_id} | 
[**getCatalogsByIDSharedProductOptions**](CatalogsApi.md#getCatalogsByIDSharedProductOptions) | **GET** /catalogs/{catalog_id}/shared_product_options | 
[**getCatalogsByIDSharedProductOptionsByID**](CatalogsApi.md#getCatalogsByIDSharedProductOptionsByID) | **GET** /catalogs/{catalog_id}/shared_product_options/{id} | 
[**getCatalogsByIDSharedProductOptionsByIDValues**](CatalogsApi.md#getCatalogsByIDSharedProductOptionsByIDValues) | **GET** /catalogs/{catalog_id}/shared_product_options/{option_id}/values | 
[**getCatalogsByIDSharedProductOptionsByIDValuesByID**](CatalogsApi.md#getCatalogsByIDSharedProductOptionsByIDValuesByID) | **GET** /catalogs/{catalog_id}/shared_product_options/{option_id}/values/{id} | 
[**getCatalogsByIDSharedVariationAttributes**](CatalogsApi.md#getCatalogsByIDSharedVariationAttributes) | **GET** /catalogs/{catalog_id}/shared_variation_attributes | 
[**getCatalogsByIDSharedVariationAttributesByID**](CatalogsApi.md#getCatalogsByIDSharedVariationAttributesByID) | **GET** /catalogs/{catalog_id}/shared_variation_attributes/{id} | 
[**getCatalogsByIDSharedVariationAttributesByIDValues**](CatalogsApi.md#getCatalogsByIDSharedVariationAttributesByIDValues) | **GET** /catalogs/{catalog_id}/shared_variation_attributes/{attribute_id}/values | 
[**getCatalogsByIDSharedVariationAttributesByIDValuesByID**](CatalogsApi.md#getCatalogsByIDSharedVariationAttributesByIDValuesByID) | **GET** /catalogs/{catalog_id}/shared_variation_attributes/{attribute_id}/values/{id} | 
[**patchCatalogsByID**](CatalogsApi.md#patchCatalogsByID) | **PATCH** /catalogs/{catalog_id} | 
[**patchCatalogsByIDCategoriesByID**](CatalogsApi.md#patchCatalogsByIDCategoriesByID) | **PATCH** /catalogs/{catalog_id}/categories/{category_id} | 
[**patchCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID**](CatalogsApi.md#patchCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID) | **PATCH** /catalogs/{catalog_id}/categories/{category_id}/category_links/{target_catalog_id}/{target_category_id}/{type} | 
[**patchCatalogsByIDCategoriesByIDProductsByID**](CatalogsApi.md#patchCatalogsByIDCategoriesByIDProductsByID) | **PATCH** /catalogs/{catalog_id}/categories/{category_id}/products/{product_id} | 
[**patchCatalogsByIDSharedProductOptionsByID**](CatalogsApi.md#patchCatalogsByIDSharedProductOptionsByID) | **PATCH** /catalogs/{catalog_id}/shared_product_options/{id} | 
[**patchCatalogsByIDSharedProductOptionsByIDValuesByID**](CatalogsApi.md#patchCatalogsByIDSharedProductOptionsByIDValuesByID) | **PATCH** /catalogs/{catalog_id}/shared_product_options/{option_id}/values/{id} | 
[**patchCatalogsByIDSharedVariationAttributesByID**](CatalogsApi.md#patchCatalogsByIDSharedVariationAttributesByID) | **PATCH** /catalogs/{catalog_id}/shared_variation_attributes/{id} | 
[**patchCatalogsByIDSharedVariationAttributesByIDValuesByID**](CatalogsApi.md#patchCatalogsByIDSharedVariationAttributesByIDValuesByID) | **PATCH** /catalogs/{catalog_id}/shared_variation_attributes/{attribute_id}/values/{id} | 
[**postCatalogsByIDCategoriesByIDCategoryProductAssignmentSearch**](CatalogsApi.md#postCatalogsByIDCategoriesByIDCategoryProductAssignmentSearch) | **POST** /catalogs/{catalog_id}/categories/{category_id}/category_product_assignment_search | 
[**postCatalogsByIDCategorySearch**](CatalogsApi.md#postCatalogsByIDCategorySearch) | **POST** /catalogs/{catalog_id}/category_search | 
[**putCatalogsByIDCategoriesByID**](CatalogsApi.md#putCatalogsByIDCategoriesByID) | **PUT** /catalogs/{catalog_id}/categories/{category_id} | 
[**putCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID**](CatalogsApi.md#putCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID) | **PUT** /catalogs/{catalog_id}/categories/{category_id}/category_links/{target_catalog_id}/{target_category_id}/{type} | 
[**putCatalogsByIDCategoriesByIDProductsByID**](CatalogsApi.md#putCatalogsByIDCategoriesByIDProductsByID) | **PUT** /catalogs/{catalog_id}/categories/{category_id}/products/{product_id} | 
[**putCatalogsByIDSharedProductOptionsByID**](CatalogsApi.md#putCatalogsByIDSharedProductOptionsByID) | **PUT** /catalogs/{catalog_id}/shared_product_options/{id} | 
[**putCatalogsByIDSharedProductOptionsByIDValuesByID**](CatalogsApi.md#putCatalogsByIDSharedProductOptionsByIDValuesByID) | **PUT** /catalogs/{catalog_id}/shared_product_options/{option_id}/values/{id} | 
[**putCatalogsByIDSharedVariationAttributesByID**](CatalogsApi.md#putCatalogsByIDSharedVariationAttributesByID) | **PUT** /catalogs/{catalog_id}/shared_variation_attributes/{id} | 
[**putCatalogsByIDSharedVariationAttributesByIDValuesByID**](CatalogsApi.md#putCatalogsByIDSharedVariationAttributesByIDValuesByID) | **PUT** /catalogs/{catalog_id}/shared_variation_attributes/{attribute_id}/values/{id} | 



## deleteCatalogsByIDCategoriesByID

> deleteCatalogsByIDCategoriesByID(catalogId, categoryId)



Deletes the category by catalog ID and category ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The site context.
var categoryId = "categoryId_example"; // String | The category id to remove
apiInstance.deleteCatalogsByIDCategoriesByID(catalogId, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The site context. | 
 **categoryId** | **String**| The category id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID

> deleteCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type)



Deletes the category link by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the source catalog.
var categoryId = "categoryId_example"; // String | The id of the source category.
var targetCatalogId = "targetCatalogId_example"; // String | The id of the target catalog.
var targetCategoryId = "targetCategoryId_example"; // String | The id of the target category.
var type = "type_example"; // String | the link type
apiInstance.deleteCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the source catalog. | 
 **categoryId** | **String**| The id of the source category. | 
 **targetCatalogId** | **String**| The id of the target catalog. | 
 **targetCategoryId** | **String**| The id of the target category. | 
 **type** | **String**| the link type | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDCategoriesByIDProductsByID

> deleteCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId)



Removes a category product assignment;      For example, if we have products A, B, C at positions 1, 2, 7.5 and delete assignment for product B,   this will end up the products A, B, C at positions 1, null, 7.5.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The catalog of the assignment.
var categoryId = "categoryId_example"; // String | The id of the requested category.
var productId = "productId_example"; // String | The id of the requested product to un-assign.
apiInstance.deleteCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The catalog of the assignment. | 
 **categoryId** | **String**| The id of the requested category. | 
 **productId** | **String**| The id of the requested product to un-assign. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDSharedProductOptionsByID

> deleteCatalogsByIDSharedProductOptionsByID(catalogId, id)



Deletes a shared product option by ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the shared product option.
apiInstance.deleteCatalogsByIDSharedProductOptionsByID(catalogId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the shared product option. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDSharedProductOptionsByIDValuesByID

> deleteCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id)



Deletes a shared product option value by ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var optionId = "optionId_example"; // String | The id of the shared product option.
var id = "id_example"; // String | The id of the shared product option value.
apiInstance.deleteCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **optionId** | **String**| The id of the shared product option. | 
 **id** | **String**| The id of the shared product option value. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDSharedVariationAttributesByID

> deleteCatalogsByIDSharedVariationAttributesByID(catalogId, id)



Deletes the variation attribute by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | One variation attribute id to remove
apiInstance.deleteCatalogsByIDSharedVariationAttributesByID(catalogId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| One variation attribute id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteCatalogsByIDSharedVariationAttributesByIDValuesByID

> deleteCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id)



Deletes the variation attribute value of a variation attribute bound to a catalog

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var attributeId = "attributeId_example"; // String | The id of the variation attribute that contains the value.
var id = "id_example"; // String | The id of one value to remove
apiInstance.deleteCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **attributeId** | **String**| The id of the variation attribute that contains the value. | 
 **id** | **String**| The id of one value to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCatalogs

> Catalogs getCatalogs(opts)



Action to get all the catalogs with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var opts = {
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example", // String | The property selector.
  'expand': ["null"] // [String] | 
};
apiInstance.getCatalogs(opts).then(function(data) {
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
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Catalogs**](Catalogs.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByID

> Catalog getCatalogsByID(catalogId, opts)



Gets catalog information by catalog Id.    Expansion \&quot;stats\&quot; can be used to retrieved some expensive statistic data, such as assigned_product_count and owned_product_count.  Example: /s/-/dw/data/v99_9/catalogs/my-catalog?expand&#x3D;stats

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the requested catalog.
var opts = {
  'expand': ["null"], // [String] | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByID(catalogId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the requested catalog. | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDCategories

> Categories getCatalogsByIDCategories(catalogId, opts)



Action to get all the categories with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getCatalogsByIDCategories(catalogId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Categories**](Categories.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDCategoriesByID

> Category getCatalogsByIDCategoriesByID(catalogId, categoryId, opts)



Action to read an existing category within a catalog. By default, the server  also returns the first level of sub-categories, but you can specify another level by setting the levels  parameter. Please note, using a large value for levels may cause performance   issues in case of a large and deep category tree.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | the id of the catalog that the category belongs to
var categoryId = "categoryId_example"; // String | the id of the category requested
var opts = {
  'levels': 56, // Number | 
  'expand': ["null"] // [String] | 
};
apiInstance.getCatalogsByIDCategoriesByID(catalogId, categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| the id of the catalog that the category belongs to | 
 **categoryId** | **String**| the id of the category requested | 
 **levels** | **Number**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDCategoriesByIDCategoryLinks

> CategoryLinks getCatalogsByIDCategoriesByIDCategoryLinks(catalogId, categoryId, opts)



Action to get a set of outgoing category links in a given catalog category, sorted by position.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var categoryId = "categoryId_example"; // String | The id of the source category.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDCategoriesByIDCategoryLinks(catalogId, categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **categoryId** | **String**| The id of the source category. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**CategoryLinks**](CategoryLinks.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID

> CategoryLink getCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, opts)



Action to get category link information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the source catalog.
var categoryId = "categoryId_example"; // String | The id of the source category.
var targetCatalogId = "targetCatalogId_example"; // String | The id of the target catalog.
var targetCategoryId = "targetCategoryId_example"; // String | The id of the target category.
var type = "type_example"; // String | the link type
var opts = {
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the source catalog. | 
 **categoryId** | **String**| The id of the source category. | 
 **targetCatalogId** | **String**| The id of the target catalog. | 
 **targetCategoryId** | **String**| The id of the target category. | 
 **type** | **String**| the link type | 
 **select** | **String**|  | [optional] 

### Return type

[**CategoryLink**](CategoryLink.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDCategoriesByIDProductsByID

> CategoryProductAssignment getCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, opts)



Retrieves category product assignment information.    Expands that can be applied for the get request    product_base - String  product_images - String - to fetch image groups specified for the given product  product_all_images - String - to fetch image groups specified for the given product plus images for its variants and variation groups  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The catalog of the assignment.
var categoryId = "categoryId_example"; // String | The id of the requested category.
var productId = "productId_example"; // String | The id (SKU) of the requested assigned product.
var opts = {
  'siteId': "siteId_example", // String | 
  'expand': ["null"], // [String] | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The catalog of the assignment. | 
 **categoryId** | **String**| The id of the requested category. | 
 **productId** | **String**| The id (SKU) of the requested assigned product. | 
 **siteId** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**CategoryProductAssignment**](CategoryProductAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedProductOptions

> ProductOptions getCatalogsByIDSharedProductOptions(catalogId, opts)



Read shared product options in a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'currency': "currency_example" // String | 
};
apiInstance.getCatalogsByIDSharedProductOptions(catalogId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **currency** | **String**|  | [optional] 

### Return type

[**ProductOptions**](ProductOptions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedProductOptionsByID

> ProductOption getCatalogsByIDSharedProductOptionsByID(catalogId, id, opts)



Read a shared product option in a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the shared product option.
var opts = {
  'currency': "currency_example" // String | 
};
apiInstance.getCatalogsByIDSharedProductOptionsByID(catalogId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the shared product option. | 
 **currency** | **String**|  | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedProductOptionsByIDValues

> ProductOptionValues getCatalogsByIDSharedProductOptionsByIDValues(catalogId, optionId, opts)



Read shared product option values of a shared product option in a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var optionId = "optionId_example"; // String | The id of the shared product option.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDSharedProductOptionsByIDValues(catalogId, optionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **optionId** | **String**| The id of the shared product option. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**ProductOptionValues**](ProductOptionValues.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedProductOptionsByIDValuesByID

> ProductOptionValue getCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id)



Read a shared product option value of a shared product option in a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var optionId = "optionId_example"; // String | The id of the shared product option.
var id = "id_example"; // String | the id of shared product option value.
apiInstance.getCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **optionId** | **String**| The id of the shared product option. | 
 **id** | **String**| the id of shared product option value. | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedVariationAttributes

> VariationAttributes getCatalogsByIDSharedVariationAttributes(catalogId, opts)



Reads variation attributes of a Domain.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | id of the catalog
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDSharedVariationAttributes(catalogId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| id of the catalog | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**VariationAttributes**](VariationAttributes.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedVariationAttributesByID

> VariationAttribute getCatalogsByIDSharedVariationAttributesByID(catalogId, id)



Action to get shared variation attribute information only for master Catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the requested variation attribute.
apiInstance.getCatalogsByIDSharedVariationAttributesByID(catalogId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the requested variation attribute. | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedVariationAttributesByIDValues

> VariationAttributeValues getCatalogsByIDSharedVariationAttributesByIDValues(catalogId, attributeId, opts)



Reads variation attribute values of a variation attribute of a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | id of the owning catalog.
var attributeId = "attributeId_example"; // String | The variation attribute ID that contains the values.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getCatalogsByIDSharedVariationAttributesByIDValues(catalogId, attributeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| id of the owning catalog. | 
 **attributeId** | **String**| The variation attribute ID that contains the values. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**VariationAttributeValues**](VariationAttributeValues.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getCatalogsByIDSharedVariationAttributesByIDValuesByID

> VariationAttributeValue getCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id)



Action to get Shared Variation Attribute value information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The owning catalog ID.
var attributeId = "attributeId_example"; // String | The variation attribute custom ID
var id = "id_example"; // String | The id of the variation attribute value
apiInstance.getCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The owning catalog ID. | 
 **attributeId** | **String**| The variation attribute custom ID | 
 **id** | **String**| The id of the variation attribute value | 

### Return type

[**VariationAttributeValue**](VariationAttributeValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByID

> Catalog patchCatalogsByID(catalogId, body)



Updates the catalog with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the requested catalog.
var body = new DataApi.Catalog(); // Catalog | 
apiInstance.patchCatalogsByID(catalogId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the requested catalog. | 
 **body** | [**Catalog**](Catalog.md)|  | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDCategoriesByID

> Category patchCatalogsByIDCategoriesByID(catalogId, categoryId, body)



Updates a catalog category using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var categoryId = "categoryId_example"; // String | The id of the category
var body = new DataApi.Category(); // Category | 
apiInstance.patchCatalogsByIDCategoriesByID(catalogId, categoryId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **categoryId** | **String**| The id of the category | 
 **body** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID

> CategoryLink patchCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, body)



Updates the category link with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the source catalog.
var categoryId = "categoryId_example"; // String | The id of the source category.
var targetCatalogId = "targetCatalogId_example"; // String | The id of the target catalog.
var targetCategoryId = "targetCategoryId_example"; // String | The id of the target category.
var type = "type_example"; // String | the link type
var body = new DataApi.CategoryLink(); // CategoryLink | 
apiInstance.patchCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the source catalog. | 
 **categoryId** | **String**| The id of the source category. | 
 **targetCatalogId** | **String**| The id of the target catalog. | 
 **targetCategoryId** | **String**| The id of the target category. | 
 **type** | **String**| the link type | 
 **body** | [**CategoryLink**](CategoryLink.md)|  | 

### Return type

[**CategoryLink**](CategoryLink.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDCategoriesByIDProductsByID

> CategoryProductAssignment patchCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, body)



Updates the category product assignment with the specified information, such as position.    As the assigned position n is a normalized target position, we&#39;ll make sure that the product is assigned  to a position so that the order of positions are maintained.    For example, if we have products A, B, C, D at positions 1, 2, 3, 4 and update product A with new position 3,   the end result is B, C, A, D with order of positions 1, 2, 3, 4. If we then update product C to no position,  the end result is B, A, D, C with order of positions 1, 2, 3, null.   If there are n existing positioned assignment, updating product to position &gt;&#x3D; n will end with new assignment with position such that the order of positions is maintained.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the requested catalog to which the product is assigned.
var categoryId = "categoryId_example"; // String | The id of the requested category to which the product is assigned.
var productId = "productId_example"; // String | The id (SKU) of the requested assigned product.
var body = new DataApi.CategoryProductAssignment(); // CategoryProductAssignment | 
apiInstance.patchCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the requested catalog to which the product is assigned. | 
 **categoryId** | **String**| The id of the requested category to which the product is assigned. | 
 **productId** | **String**| The id (SKU) of the requested assigned product. | 
 **body** | [**CategoryProductAssignment**](CategoryProductAssignment.md)|  | 

### Return type

[**CategoryProductAssignment**](CategoryProductAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDSharedProductOptionsByID

> ProductOption patchCatalogsByIDSharedProductOptionsByID(catalogId, id, body)



Updates a shared product option with the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the shared product option.
var body = new DataApi.ProductOption(); // ProductOption | 
apiInstance.patchCatalogsByIDSharedProductOptionsByID(catalogId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the shared product option. | 
 **body** | [**ProductOption**](ProductOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDSharedProductOptionsByIDValuesByID

> ProductOptionValue patchCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id, body)



Updates a shared product option value with the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var optionId = "optionId_example"; // String | The id of the shared product option.
var id = "id_example"; // String | The id of the shared product option value.
var body = new DataApi.ProductOptionValue(); // ProductOptionValue | 
apiInstance.patchCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **optionId** | **String**| The id of the shared product option. | 
 **id** | **String**| The id of the shared product option value. | 
 **body** | [**ProductOptionValue**](ProductOptionValue.md)|  | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDSharedVariationAttributesByID

> VariationAttribute patchCatalogsByIDSharedVariationAttributesByID(catalogId, id, body)



Updates the variation attribute with the specified information.     name  slicing  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the requested variation attribute.
var body = new DataApi.VariationAttribute(); // VariationAttribute | 
apiInstance.patchCatalogsByIDSharedVariationAttributesByID(catalogId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the requested variation attribute. | 
 **body** | [**VariationAttribute**](VariationAttribute.md)|  | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchCatalogsByIDSharedVariationAttributesByIDValuesByID

> VariationAttributeValue patchCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id, body)



Updates the variation attribute value of a variation attribute of a catalog.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var attributeId = "attributeId_example"; // String | The id of the requested variation attribute.
var id = "id_example"; // String | The id of the variation value.
var body = new DataApi.VariationAttributeValue(); // VariationAttributeValue | 
apiInstance.patchCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **attributeId** | **String**| The id of the requested variation attribute. | 
 **id** | **String**| The id of the variation value. | 
 **body** | [**VariationAttributeValue**](VariationAttributeValue.md)|  | 

### Return type

[**VariationAttributeValue**](VariationAttributeValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCatalogsByIDCategoriesByIDCategoryProductAssignmentSearch

> CategoryProductAssignmentSearchResult postCatalogsByIDCategoriesByIDCategoryProductAssignmentSearch(catalogId, categoryId, opts)



Searches for category product assignments.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list  of searchable attributes:    product_id - String  product_name - String  online_flag - Boolean   searchable - Boolean   valid_from - DateTime   valid_to - DateTime   creation_date - DateTime      Sortable Fields:    product_id - String  product_name - String  position - Double  creation_date - DateTime      Expansions that can be applied for the search request:    product_base - String - This expand will enable retrieval of the following basic Product information:   product_images - String - to fetch preview image and image groups specified for the given product  product_all_images - String - to fetch preview image and image groups specified for the product plus images for its variants and variation groups  product_variations - String to fetch variations related information, version 17.8+  product_availability - String to fetch availability related information, version 17.8+  product_categories - String to fetch category related information, version 17.8+  product_prices - String to fetch prices related information, version 17.8+  product_options - String to fetch options related information, version 17.8+  product_all - String to fetch all expanded information, version 17.8+        brand      ean       link    long_description       manufacturer_name       manufacturer_sku    name       page_description       page_keywords       page_title       searchable     short_description       type       unit       upc     

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var categoryId = "categoryId_example"; // String | The id of the category.
var opts = {
  'siteId': "siteId_example", // String | 
  'body': new DataApi.CategoryProductAssignmentSearchRequest() // CategoryProductAssignmentSearchRequest | 
};
apiInstance.postCatalogsByIDCategoriesByIDCategoryProductAssignmentSearch(catalogId, categoryId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **categoryId** | **String**| The id of the category. | 
 **siteId** | **String**|  | [optional] 
 **body** | [**CategoryProductAssignmentSearchRequest**](CategoryProductAssignmentSearchRequest.md)|  | [optional] 

### Return type

[**CategoryProductAssignmentSearchResult**](CategoryProductAssignmentSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postCatalogsByIDCategorySearch

> CategorySearchResult postCatalogsByIDCategorySearch(catalogId, body, opts)



Searches for catalog categories in the scope of catalog  By default, the server also returns the first level of subcategories,   but you can specify another level by setting the levels parameter.    Please note, using a large value for levels may cause performance    issues in case of a large and deep category tree.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean  parent_category_id - String     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  name - String  description - String  creation_date - DateTime  online - Boolean   position - Double   

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var body = new DataApi.SearchRequest(); // SearchRequest | 
var opts = {
  'levels': 56 // Number | 
};
apiInstance.postCatalogsByIDCategorySearch(catalogId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **levels** | **Number**|  | [optional] 

### Return type

[**CategorySearchResult**](CategorySearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDCategoriesByID

> Category putCatalogsByIDCategoriesByID(catalogId, categoryId, body)



Creates a catalog category using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var categoryId = "categoryId_example"; // String | The id of the category to be created
var body = new DataApi.Category(); // Category | 
apiInstance.putCatalogsByIDCategoriesByID(catalogId, categoryId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **categoryId** | **String**| The id of the category to be created | 
 **body** | [**Category**](Category.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID

> CategoryLink putCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, body)



Creates a category link using the information provided. If a category link with the same unique identifier,  it will be updated with the new position.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the source catalog.
var categoryId = "categoryId_example"; // String | The id of the source category.
var targetCatalogId = "targetCatalogId_example"; // String | The id of the target catalog.
var targetCategoryId = "targetCategoryId_example"; // String | The id of the target category.
var type = "type_example"; // String | the link type
var body = new DataApi.CategoryLink(); // CategoryLink | 
apiInstance.putCatalogsByIDCategoriesByIDCategoryLinksByIDByIDByID(catalogId, categoryId, targetCatalogId, targetCategoryId, type, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the source catalog. | 
 **categoryId** | **String**| The id of the source category. | 
 **targetCatalogId** | **String**| The id of the target catalog. | 
 **targetCategoryId** | **String**| The id of the target category. | 
 **type** | **String**| the link type | 
 **body** | [**CategoryLink**](CategoryLink.md)|  | 

### Return type

[**CategoryLink**](CategoryLink.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDCategoriesByIDProductsByID

> CategoryProductAssignment putCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, opts)



Creates a category product assignment using the information provided;     As the assigned position n is a normalized target position, we&#39;ll make sure that the product is assigned  to a position so that the order of positions are maintained.     For example, product A, B, C at position 1, 2, 3. product D is assigned to  position 2, the end result is A, D, B, C with order of positions 1, 2, 3, 4;    If there are n existing positioned assignment, assigning a new product to position &gt;&#x3D; n+1 will end  with new assignment with position n+1.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the requested catalog to which to assign the product.
var categoryId = "categoryId_example"; // String | The id of the requested category to which to assign the product.
var productId = "productId_example"; // String | The id (SKU) of the requested product to assign.
var opts = {
  'body': new DataApi.CategoryProductAssignment() // CategoryProductAssignment | 
};
apiInstance.putCatalogsByIDCategoriesByIDProductsByID(catalogId, categoryId, productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the requested catalog to which to assign the product. | 
 **categoryId** | **String**| The id of the requested category to which to assign the product. | 
 **productId** | **String**| The id (SKU) of the requested product to assign. | 
 **body** | [**CategoryProductAssignment**](CategoryProductAssignment.md)|  | [optional] 

### Return type

[**CategoryProductAssignment**](CategoryProductAssignment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDSharedProductOptionsByID

> ProductOption putCatalogsByIDSharedProductOptionsByID(catalogId, id, body)



Creates a shared product option using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the shared product option.
var body = new DataApi.ProductOption(); // ProductOption | 
apiInstance.putCatalogsByIDSharedProductOptionsByID(catalogId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the shared product option. | 
 **body** | [**ProductOption**](ProductOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDSharedProductOptionsByIDValuesByID

> ProductOptionValue putCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id, body)



Creates a shared product option value using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var optionId = "optionId_example"; // String | The id of the shared product option.
var id = "id_example"; // String | The id of the shared product option value.
var body = new DataApi.ProductOptionValue(); // ProductOptionValue | 
apiInstance.putCatalogsByIDSharedProductOptionsByIDValuesByID(catalogId, optionId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **optionId** | **String**| The id of the shared product option. | 
 **id** | **String**| The id of the shared product option value. | 
 **body** | [**ProductOptionValue**](ProductOptionValue.md)|  | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDSharedVariationAttributesByID

> VariationAttribute putCatalogsByIDSharedVariationAttributesByID(catalogId, id, body)



Creates a variation attribute using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The id of the catalog.
var id = "id_example"; // String | The id of the variation attribute to create.
var body = new DataApi.VariationAttribute(); // VariationAttribute | 
apiInstance.putCatalogsByIDSharedVariationAttributesByID(catalogId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The id of the catalog. | 
 **id** | **String**| The id of the variation attribute to create. | 
 **body** | [**VariationAttribute**](VariationAttribute.md)|  | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putCatalogsByIDSharedVariationAttributesByIDValuesByID

> VariationAttributeValue putCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id, body)



Action to create a Shared Variation Attribute value.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.CatalogsApi();
var catalogId = "catalogId_example"; // String | The owning catalog ID.
var attributeId = "attributeId_example"; // String | The variation attribute ID
var id = "id_example"; // String | The id of the variation attribute value
var body = new DataApi.VariationAttributeValue(); // VariationAttributeValue | 
apiInstance.putCatalogsByIDSharedVariationAttributesByIDValuesByID(catalogId, attributeId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **String**| The owning catalog ID. | 
 **attributeId** | **String**| The variation attribute ID | 
 **id** | **String**| The id of the variation attribute value | 
 **body** | [**VariationAttributeValue**](VariationAttributeValue.md)|  | 

### Return type

[**VariationAttributeValue**](VariationAttributeValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

