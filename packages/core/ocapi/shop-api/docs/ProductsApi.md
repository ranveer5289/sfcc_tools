# ShopApi.ProductsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductsByID**](ProductsApi.md#getProductsByID) | **GET** /products/{id} | 
[**getProductsByIDAvailability**](ProductsApi.md#getProductsByIDAvailability) | **GET** /products/{id}/availability | 
[**getProductsByIDBundledProducts**](ProductsApi.md#getProductsByIDBundledProducts) | **GET** /products/{id}/bundled_products | 
[**getProductsByIDImages**](ProductsApi.md#getProductsByIDImages) | **GET** /products/{id}/images | 
[**getProductsByIDLinks**](ProductsApi.md#getProductsByIDLinks) | **GET** /products/{id}/links | 
[**getProductsByIDOptions**](ProductsApi.md#getProductsByIDOptions) | **GET** /products/{id}/options | 
[**getProductsByIDPrices**](ProductsApi.md#getProductsByIDPrices) | **GET** /products/{id}/prices | 
[**getProductsByIDPromotions**](ProductsApi.md#getProductsByIDPromotions) | **GET** /products/{id}/promotions | 
[**getProductsByIDRecommendations**](ProductsApi.md#getProductsByIDRecommendations) | **GET** /products/{id}/recommendations | 
[**getProductsByIDSetProducts**](ProductsApi.md#getProductsByIDSetProducts) | **GET** /products/{id}/set_products | 
[**getProductsByIDShippingMethods**](ProductsApi.md#getProductsByIDShippingMethods) | **GET** /products/{id}/shipping_methods | 
[**getProductsByIDVariations**](ProductsApi.md#getProductsByIDVariations) | **GET** /products/{id}/variations | 
[**getProductsByIDs**](ProductsApi.md#getProductsByIDs) | **GET** /products/({ids}) | 



## getProductsByID

> Product getProductsByID(id, opts)



To access single products resource, you construct a URL using the template shown below. This template requires  you to specify an Id (typically a SKU) for a product. In response, the server returns a corresponding Product  document, provided the product is online and assigned to site catalog. The document contains variation attributes  (including values) and the variant matrix; this data is provided for both the master and for the variant.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The id of the requested product.
var opts = {
  'expand': ["null"], // [String] | 
  'inventoryIds': ["null"], // [String] | 
  'currency': "currency_example", // String | 
  'locale': "locale_example", // String | 
  'allImages': true // Boolean | 
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
 **id** | **String**| The id of the requested product. | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDAvailability

> Product getProductsByIDAvailability(id, opts)



Access product availability information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'inventoryIds': ["null"], // [String] | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDAvailability(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDBundledProducts

> Product getProductsByIDBundledProducts(id, opts)



Access bundled product information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDBundledProducts(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDImages

> Product getProductsByIDImages(id, opts)



Access product image information of products that are online and assigned to site catalog. Filter the result by  view type and variation values.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'viewType': ["null"], // [String] | 
  'allImages': true, // Boolean | 
  'variationAttribute': "variationAttribute_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDImages(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **viewType** | [**[String]**](String.md)|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 
 **variationAttribute** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDLinks

> Product getProductsByIDLinks(id, opts)



Access product link information of products that are online and assigned to site catalog. Filter the result by  link type and link direction.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'type': "type_example", // String | 
  'direction': "direction_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDLinks(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **type** | **String**|  | [optional] 
 **direction** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDOptions

> Product getProductsByIDOptions(id, opts)



Access product option information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDOptions(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDPrices

> Product getProductsByIDPrices(id, opts)



Access product price information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDPrices(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDPromotions

> Product getProductsByIDPromotions(id, opts)



Access product promotion information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'currency': "currency_example", // String | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDPromotions(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDRecommendations

> Product getProductsByIDRecommendations(id, opts)



Access product recommendation information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'recommendationType': 56, // Number | 
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDRecommendations(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **recommendationType** | **Number**|  | [optional] 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDSetProducts

> Product getProductsByIDSetProducts(id, opts)



Access product set information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDSetProducts(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDShippingMethods

> ShippingMethodResult getProductsByIDShippingMethods(id)



Retrieves the applicable shipping methods for a certain product.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | the requested product id
apiInstance.getProductsByIDShippingMethods(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| the requested product id | 

### Return type

[**ShippingMethodResult**](ShippingMethodResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDVariations

> Product getProductsByIDVariations(id, opts)



Access product variation information of products that are online and assigned to site catalog.

### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var id = "id_example"; // String | The requested product id.
var opts = {
  'locale': "locale_example" // String | 
};
apiInstance.getProductsByIDVariations(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The requested product id. | 
 **locale** | **String**|  | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getProductsByIDs

> ProductResult getProductsByIDs(ids, opts)



### Example

```javascript
var ShopApi = require('shop_api');
var defaultClient = ShopApi.ApiClient.instance;
// Configure API key authorization: client_id
var client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
var customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

var apiInstance = new ShopApi.ProductsApi();
var ids = ["null"]; // [String] | 
var opts = {
  'expand': ["null"], // [String] | 
  'inventoryIds': ["null"], // [String] | 
  'currency': "currency_example", // String | 
  'locale': "locale_example", // String | 
  'allImages': true // Boolean | 
};
apiInstance.getProductsByIDs(ids, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[String]**](String.md)|  | 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **currency** | **String**|  | [optional] 
 **locale** | **String**|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 

### Return type

[**ProductResult**](ProductResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

