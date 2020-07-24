# DataApi.ProductsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteProductsByID**](ProductsApi.md#deleteProductsByID) | **DELETE** /products/{id} | 
[**deleteProductsByIDProductOptionsByID**](ProductsApi.md#deleteProductsByIDProductOptionsByID) | **DELETE** /products/{product_id}/product_options/{id} | 
[**deleteProductsByIDProductOptionsByIDValuesByID**](ProductsApi.md#deleteProductsByIDProductOptionsByIDValuesByID) | **DELETE** /products/{product_id}/product_options/{option_id}/values/{id} | 
[**deleteProductsByIDVariationAttributesByID**](ProductsApi.md#deleteProductsByIDVariationAttributesByID) | **DELETE** /products/{product_id}/variation_attributes/{id} | 
[**deleteProductsByIDVariationAttributesByIDValuesByID**](ProductsApi.md#deleteProductsByIDVariationAttributesByIDValuesByID) | **DELETE** /products/{product_id}/variation_attributes/{attribute_id}/values/{id} | 
[**deleteProductsByIDVariationGroupsByID**](ProductsApi.md#deleteProductsByIDVariationGroupsByID) | **DELETE** /products/{master_product_id}/variation_groups/{id} | 
[**deleteProductsByIDVariationsByID**](ProductsApi.md#deleteProductsByIDVariationsByID) | **DELETE** /products/{master_product_id}/variations/{id} | 
[**getProductsByID**](ProductsApi.md#getProductsByID) | **GET** /products/{id} | 
[**getProductsByIDProductOptions**](ProductsApi.md#getProductsByIDProductOptions) | **GET** /products/{product_id}/product_options | 
[**getProductsByIDProductOptionsByID**](ProductsApi.md#getProductsByIDProductOptionsByID) | **GET** /products/{product_id}/product_options/{id} | 
[**getProductsByIDProductOptionsByIDValues**](ProductsApi.md#getProductsByIDProductOptionsByIDValues) | **GET** /products/{product_id}/product_options/{option_id}/values | 
[**getProductsByIDProductOptionsByIDValuesByID**](ProductsApi.md#getProductsByIDProductOptionsByIDValuesByID) | **GET** /products/{product_id}/product_options/{option_id}/values/{id} | 
[**getProductsByIDVariationAttributes**](ProductsApi.md#getProductsByIDVariationAttributes) | **GET** /products/{product_id}/variation_attributes | 
[**getProductsByIDVariationAttributesByID**](ProductsApi.md#getProductsByIDVariationAttributesByID) | **GET** /products/{product_id}/variation_attributes/{id} | 
[**getProductsByIDVariationAttributesByIDValues**](ProductsApi.md#getProductsByIDVariationAttributesByIDValues) | **GET** /products/{product_id}/variation_attributes/{attribute_id}/values | 
[**getProductsByIDVariationAttributesByIDValuesByID**](ProductsApi.md#getProductsByIDVariationAttributesByIDValuesByID) | **GET** /products/{product_id}/variation_attributes/{attribute_id}/values/{id} | 
[**getProductsByIDVariationGroups**](ProductsApi.md#getProductsByIDVariationGroups) | **GET** /products/{master_product_id}/variation_groups | 
[**getProductsByIDVariationGroupsByID**](ProductsApi.md#getProductsByIDVariationGroupsByID) | **GET** /products/{master_product_id}/variation_groups/{id} | 
[**getProductsByIDVariations**](ProductsApi.md#getProductsByIDVariations) | **GET** /products/{master_product_id}/variations | 
[**getProductsByIDVariationsByID**](ProductsApi.md#getProductsByIDVariationsByID) | **GET** /products/{master_product_id}/variations/{id} | 
[**patchProductsByID**](ProductsApi.md#patchProductsByID) | **PATCH** /products/{id} | 
[**patchProductsByIDProductOptionsByID**](ProductsApi.md#patchProductsByIDProductOptionsByID) | **PATCH** /products/{product_id}/product_options/{id} | 
[**patchProductsByIDProductOptionsByIDValuesByID**](ProductsApi.md#patchProductsByIDProductOptionsByIDValuesByID) | **PATCH** /products/{product_id}/product_options/{option_id}/values/{id} | 
[**patchProductsByIDVariationAttributesByID**](ProductsApi.md#patchProductsByIDVariationAttributesByID) | **PATCH** /products/{product_id}/variation_attributes/{id} | 
[**patchProductsByIDVariationAttributesByIDValuesByID**](ProductsApi.md#patchProductsByIDVariationAttributesByIDValuesByID) | **PATCH** /products/{product_id}/variation_attributes/{attribute_id}/values/{id} | 
[**patchProductsByIDVariationGroupsByID**](ProductsApi.md#patchProductsByIDVariationGroupsByID) | **PATCH** /products/{master_product_id}/variation_groups/{id} | 
[**patchProductsByIDVariationsByID**](ProductsApi.md#patchProductsByIDVariationsByID) | **PATCH** /products/{master_product_id}/variations/{id} | 
[**postProductsByIDVariantSearch**](ProductsApi.md#postProductsByIDVariantSearch) | **POST** /products/{id}/variant_search | 
[**putProductsByID**](ProductsApi.md#putProductsByID) | **PUT** /products/{id} | 
[**putProductsByIDProductOptionsByID**](ProductsApi.md#putProductsByIDProductOptionsByID) | **PUT** /products/{product_id}/product_options/{id} | 
[**putProductsByIDProductOptionsByIDValuesByID**](ProductsApi.md#putProductsByIDProductOptionsByIDValuesByID) | **PUT** /products/{product_id}/product_options/{option_id}/values/{id} | 
[**putProductsByIDVariationAttributesByID**](ProductsApi.md#putProductsByIDVariationAttributesByID) | **PUT** /products/{product_id}/variation_attributes/{id} | 
[**putProductsByIDVariationAttributesByIDValuesByID**](ProductsApi.md#putProductsByIDVariationAttributesByIDValuesByID) | **PUT** /products/{product_id}/variation_attributes/{attribute_id}/values/{id} | 
[**putProductsByIDVariationGroupsByID**](ProductsApi.md#putProductsByIDVariationGroupsByID) | **PUT** /products/{master_product_id}/variation_groups/{id} | 
[**putProductsByIDVariationsByID**](ProductsApi.md#putProductsByIDVariationsByID) | **PUT** /products/{master_product_id}/variations/{id} | 



## deleteProductsByID

> deleteProductsByID(id)



Deletes the product by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var id = "id_example"; // String | The product ID.
apiInstance.deleteProductsByID(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The product ID. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDProductOptionsByID

> deleteProductsByIDProductOptionsByID(productId, id)



Deletes a local product option or unbinds a shared product option from the product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the local or shared product option.
apiInstance.deleteProductsByIDProductOptionsByID(productId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the local or shared product option. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDProductOptionsByIDValuesByID

> deleteProductsByIDProductOptionsByIDValuesByID(productId, optionId, id)



Deletes a local product option value by ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var optionId = "optionId_example"; // String | The id of the local product option.
var id = "id_example"; // String | The id of the local product option value.
apiInstance.deleteProductsByIDProductOptionsByIDValuesByID(productId, optionId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **optionId** | **String**| The id of the local product option. | 
 **id** | **String**| The id of the local product option value. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDVariationAttributesByID

> deleteProductsByIDVariationAttributesByID(productId, id)



Deletes the variation attribute by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | One variation attribute id to remove
apiInstance.deleteProductsByIDVariationAttributesByID(productId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| One variation attribute id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDVariationAttributesByIDValuesByID

> deleteProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id)



Deletes the variation attribute value of a variation attribute bound to a master product

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var attributeId = "attributeId_example"; // String | The id of the variation attribute that contains the value.
var id = "id_example"; // String | The id of one value to remove
apiInstance.deleteProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **attributeId** | **String**| The id of the variation attribute that contains the value. | 
 **id** | **String**| The id of one value to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDVariationGroupsByID

> deleteProductsByIDVariationGroupsByID(masterProductId, id)



Unassign a variation group product from a product master.  The variation group product is not  deleted: it remains as a normal product after unsassign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | 
var id = "id_example"; // String | 
apiInstance.deleteProductsByIDVariationGroupsByID(masterProductId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteProductsByIDVariationsByID

> deleteProductsByIDVariationsByID(masterProductId, id)



Unassign a variation product from a product master.  The variation product is not deleted: it remains as a  normal product after unsassign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | 
var id = "id_example"; // String | 
apiInstance.deleteProductsByIDVariationsByID(masterProductId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getProductsByID

> Product getProductsByID(id, opts)



Action to get product information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var id = "id_example"; // String | The product ID.
var opts = {
  'siteId': "siteId_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByID(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The product ID. | 
 **siteId** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDProductOptions

> ProductOptions getProductsByIDProductOptions(productId, opts)



Read local and shared product options of a product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'currency': "currency_example" // String | 
};
apiInstance.getProductsByIDProductOptions(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
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


## getProductsByIDProductOptionsByID

> ProductOption getProductsByIDProductOptionsByID(productId, id, opts)



Read a local or shared product option of a product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the local or shared product option.
var opts = {
  'currency': "currency_example" // String | 
};
apiInstance.getProductsByIDProductOptionsByID(productId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the local or shared product option. | 
 **currency** | **String**|  | [optional] 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDProductOptionsByIDValues

> ProductOptionValues getProductsByIDProductOptionsByIDValues(productId, optionId, opts)



Read local product option values of a local product option in a product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var optionId = "optionId_example"; // String | The id of the local product option.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getProductsByIDProductOptionsByIDValues(productId, optionId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **optionId** | **String**| The id of the local product option. | 
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


## getProductsByIDProductOptionsByIDValuesByID

> ProductOptionValue getProductsByIDProductOptionsByIDValuesByID(productId, optionId, id)



Read a local product option value of a local product option in a product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var optionId = "optionId_example"; // String | The id of the local product option.
var id = "id_example"; // String | the id of local product option value.
apiInstance.getProductsByIDProductOptionsByIDValuesByID(productId, optionId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **optionId** | **String**| The id of the local product option. | 
 **id** | **String**| the id of local product option value. | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationAttributes

> VariationAttributes getProductsByIDVariationAttributes(productId, opts)



Reads variation attributes of a product of type variant or variation master or variation group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The product ID of a variant or a variation master or a variation group.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getProductsByIDVariationAttributes(productId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The product ID of a variant or a variation master or a variation group. | 
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


## getProductsByIDVariationAttributesByID

> VariationAttribute getProductsByIDVariationAttributesByID(productId, id)



Action to get variation attribute information only for master product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The product ID of a variant or a variation master or a variation group.
var id = "id_example"; // String | The id of the requested variation attribute.
apiInstance.getProductsByIDVariationAttributesByID(productId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The product ID of a variant or a variation master or a variation group. | 
 **id** | **String**| The id of the requested variation attribute. | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationAttributesByIDValues

> VariationAttributeValues getProductsByIDVariationAttributesByIDValues(productId, attributeId, opts)



Reads variation attribute values of a variation attribute bound to a product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | id of the product
var attributeId = "attributeId_example"; // String | The variation attribute ID that contains the values.
var opts = {
  'siteId': "siteId_example", // String | 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariationAttributesByIDValues(productId, attributeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| id of the product | 
 **attributeId** | **String**| The variation attribute ID that contains the values. | 
 **siteId** | **String**|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**VariationAttributeValues**](VariationAttributeValues.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationAttributesByIDValuesByID

> VariationAttributeValue getProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, opts)



Action to get product variation attribute value information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The master product ID.
var attributeId = "attributeId_example"; // String | The variation attribute custom ID
var id = "id_example"; // String | The id of the variation attribute value
var opts = {
  'siteId': "siteId_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The master product ID. | 
 **attributeId** | **String**| The variation attribute custom ID | 
 **id** | **String**| The id of the variation attribute value | 
 **siteId** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**VariationAttributeValue**](VariationAttributeValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationGroups

> VariationGroups getProductsByIDVariationGroups(masterProductId, opts)



Reads variation groups for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product.
var opts = {
  'siteId': "siteId_example", // String | 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariationGroups(masterProductId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product. | 
 **siteId** | **String**|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**VariationGroups**](VariationGroups.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationGroupsByID

> VariationGroup getProductsByIDVariationGroupsByID(masterProductId, id, opts)



Read a variation group for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation group.
var id = "id_example"; // String | The id of the variation group product.
var opts = {
  'siteId': "siteId_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariationGroupsByID(masterProductId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation group. | 
 **id** | **String**| The id of the variation group product. | 
 **siteId** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**VariationGroup**](VariationGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariations

> Variants getProductsByIDVariations(masterProductId, opts)



Reads variation for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product.
var opts = {
  'siteId': "siteId_example", // String | 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariations(masterProductId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product. | 
 **siteId** | **String**|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Variants**](Variants.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariationsByID

> Variant getProductsByIDVariationsByID(masterProductId, id, opts)



Read a variation for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation.
var id = "id_example"; // String | The id of the variation product.
var opts = {
  'siteId': "siteId_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getProductsByIDVariationsByID(masterProductId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation. | 
 **id** | **String**| The id of the variation product. | 
 **siteId** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Variant**](Variant.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchProductsByID

> Product patchProductsByID(id, body)



Update a product using the information provided.   Fields that can be updated:  name, page_description, long_descripton, page_title,  page_keywords, brand, ean,upc, manufacture_sku,  manufacture_name, searchable, unit, searchable,  online_flag, default_variant_id.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var id = "id_example"; // String | The product ID.
var body = new DataApi.Product(); // Product | 
apiInstance.patchProductsByID(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The product ID. | 
 **body** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchProductsByIDProductOptionsByID

> ProductOption patchProductsByIDProductOptionsByID(productId, id, body)



Updates a local product option with the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the local product option.
var body = new DataApi.ProductOption(); // ProductOption | 
apiInstance.patchProductsByIDProductOptionsByID(productId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the local product option. | 
 **body** | [**ProductOption**](ProductOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchProductsByIDProductOptionsByIDValuesByID

> ProductOptionValue patchProductsByIDProductOptionsByIDValuesByID(productId, optionId, id, body)



Updates a local product option value with the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var optionId = "optionId_example"; // String | The id of the local product option.
var id = "id_example"; // String | The id of the local product option value.
var body = new DataApi.ProductOptionValue(); // ProductOptionValue | 
apiInstance.patchProductsByIDProductOptionsByIDValuesByID(productId, optionId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **optionId** | **String**| The id of the local product option. | 
 **id** | **String**| The id of the local product option value. | 
 **body** | [**ProductOptionValue**](ProductOptionValue.md)|  | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchProductsByIDVariationAttributesByID

> VariationAttribute patchProductsByIDVariationAttributesByID(productId, id, body)



Updates the variation attribute with the specified information.     name  slicing  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the requested variation attribute.
var body = new DataApi.VariationAttribute(); // VariationAttribute | 
apiInstance.patchProductsByIDVariationAttributesByID(productId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the requested variation attribute. | 
 **body** | [**VariationAttribute**](VariationAttribute.md)|  | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchProductsByIDVariationAttributesByIDValuesByID

> VariationAttributeValue patchProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, body)



Updates the variation attribute value of a variation attribute of a master product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var attributeId = "attributeId_example"; // String | The id of the requested variation attribute.
var id = "id_example"; // String | The id of the variation value.
var body = new DataApi.VariationAttributeValue(); // VariationAttributeValue | 
apiInstance.patchProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
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


## patchProductsByIDVariationGroupsByID

> VariationGroup patchProductsByIDVariationGroupsByID(masterProductId, id, body)



Update a variation group for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation group.
var id = "id_example"; // String | The id of the variation group product.
var body = new DataApi.VariationGroup(); // VariationGroup | 
apiInstance.patchProductsByIDVariationGroupsByID(masterProductId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation group. | 
 **id** | **String**| The id of the variation group product. | 
 **body** | [**VariationGroup**](VariationGroup.md)|  | 

### Return type

[**VariationGroup**](VariationGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchProductsByIDVariationsByID

> Variant patchProductsByIDVariationsByID(masterProductId, id, body)



Update a variation for a product master.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation.
var id = "id_example"; // String | The id of the variation product.
var body = new DataApi.Variant(); // Variant | 
apiInstance.patchProductsByIDVariationsByID(masterProductId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation. | 
 **id** | **String**| The id of the variation product. | 
 **body** | [**Variant**](Variant.md)|  | 

### Return type

[**Variant**](Variant.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postProductsByIDVariantSearch

> VariantSearchResult postProductsByIDVariantSearch(id, body, opts)



Searches product variations for master product or variation group product.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list  of searchable attributes:    id - String  product_id - String  name - String  online - SiteSpecific Boolean  in_stock - Boolean   searchable - SiteSpecific Boolean   ats - Actual available quantity to sell - Double   variation_attribute.ATTRIBUTE_ID (Ex:variation_attribute.color) - String    Sortable Fields:    id - String  product_id - String  name - String  online - SiteSpecific Boolean  in_stock - Boolean   searchable - SiteSpecific Boolean   ats - Actual available quantity to sell - Double      Note:  The calculated value of \&quot;online\&quot; and \&quot;searchable\&quot; is used in the search/sort.  A search/sort by the the site specific attributes require the Site ID query parameter to be set.  They are \&quot;online\&quot;, \&quot;in_stock\&quot;, \&quot;searchable\&quot; and \&quot;ats\&quot;.   We assume that every field that starts with variation_attribute. is searchable and dot is followed by ATTRIBUTE_ID\&quot;.    The list of expansions to retrieve product information. The expand values available are:           _base - Basic product information is retrieved. This expand is included by default.     all - All product information including the following properties are retrieved:                     image           price - site_id has to be provided to see this property           price_currency - site_id has to be provided to see this property               availability - Information related to the availability of the product variation.  This expand is not included by default.                     ats - site_id has to be provided to see this property           in_stock - site_id has to be provided to see this property           online - site_id has to be provided to see this property           searchable                     variations - Information related to product variation is retrieved. This expand is included by default.     attributes - Information related to product variation attributes is retrieved. This expand is not included by default.      

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var id = "id_example"; // String | The product id of master product or variation group product
var body = new DataApi.SearchRequest(); // SearchRequest | 
var opts = {
  'siteId': "siteId_example" // String | 
};
apiInstance.postProductsByIDVariantSearch(id, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The product id of master product or variation group product | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**|  | [optional] 

### Return type

[**VariantSearchResult**](VariantSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByID

> Product putProductsByID(id, body)



Creates a product using the information provided. If a product with the same unique identifier, it will be cleaned and overwritten unless the header x-dw-validate-existing&#x3D;true is passed in with the request.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var id = "id_example"; // String | The product ID.
var body = new DataApi.Product(); // Product | 
apiInstance.putProductsByID(id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The product ID. | 
 **body** | [**Product**](Product.md)|  | 

### Return type

[**Product**](Product.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByIDProductOptionsByID

> ProductOption putProductsByIDProductOptionsByID(productId, id, body)



Creates a local product option using the information provided or binds a shared product option to the product.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the local or shared product option.
var body = new DataApi.ProductOption(); // ProductOption | 
apiInstance.putProductsByIDProductOptionsByID(productId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the local or shared product option. | 
 **body** | [**ProductOption**](ProductOption.md)|  | 

### Return type

[**ProductOption**](ProductOption.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByIDProductOptionsByIDValuesByID

> ProductOptionValue putProductsByIDProductOptionsByIDValuesByID(productId, optionId, id, body)



Creates a local product option value using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var optionId = "optionId_example"; // String | The id of the local product option.
var id = "id_example"; // String | The id of the local product option value.
var body = new DataApi.ProductOptionValue(); // ProductOptionValue | 
apiInstance.putProductsByIDProductOptionsByIDValuesByID(productId, optionId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **optionId** | **String**| The id of the local product option. | 
 **id** | **String**| The id of the local product option value. | 
 **body** | [**ProductOptionValue**](ProductOptionValue.md)|  | 

### Return type

[**ProductOptionValue**](ProductOptionValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByIDVariationAttributesByID

> VariationAttribute putProductsByIDVariationAttributesByID(productId, id, body)



Creates a variation attribute using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The id of the product.
var id = "id_example"; // String | The id of the variation attribute to create.
var body = new DataApi.VariationAttribute(); // VariationAttribute | 
apiInstance.putProductsByIDVariationAttributesByID(productId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The id of the product. | 
 **id** | **String**| The id of the variation attribute to create. | 
 **body** | [**VariationAttribute**](VariationAttribute.md)|  | 

### Return type

[**VariationAttribute**](VariationAttribute.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByIDVariationAttributesByIDValuesByID

> VariationAttributeValue putProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, body)



Action to create a product variation attribute value.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var productId = "productId_example"; // String | The master product ID.
var attributeId = "attributeId_example"; // String | The variation attribute ID
var id = "id_example"; // String | The id of the variation attribute value
var body = new DataApi.VariationAttributeValue(); // VariationAttributeValue | 
apiInstance.putProductsByIDVariationAttributesByIDValuesByID(productId, attributeId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The master product ID. | 
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


## putProductsByIDVariationGroupsByID

> VariationGroup putProductsByIDVariationGroupsByID(masterProductId, id, body)



Assign a variation group for a product master.  If the variation group product does not initially exist,  one is created using the body passed in.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation group.
var id = "id_example"; // String | The id of the variation group product.
var body = new DataApi.VariationGroup(); // VariationGroup | 
apiInstance.putProductsByIDVariationGroupsByID(masterProductId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation group. | 
 **id** | **String**| The id of the variation group product. | 
 **body** | [**VariationGroup**](VariationGroup.md)|  | 

### Return type

[**VariationGroup**](VariationGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putProductsByIDVariationsByID

> Variant putProductsByIDVariationsByID(masterProductId, id, body)



Assign a variation for a product master.  If the variation product does not initially exist,  one is created using the body passed in.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductsApi();
var masterProductId = "masterProductId_example"; // String | The id of the master product that contains the variation.
var id = "id_example"; // String | The id of the variation product.
var body = new DataApi.Variant(); // Variant | 
apiInstance.putProductsByIDVariationsByID(masterProductId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterProductId** | **String**| The id of the master product that contains the variation. | 
 **id** | **String**| The id of the variation product. | 
 **body** | [**Variant**](Variant.md)|  | 

### Return type

[**Variant**](Variant.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

