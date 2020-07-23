# ShopApi.ProductSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProductSearch**](ProductSearchApi.md#getProductSearch) | **GET** /product_search | 
[**getProductSearchAvailability**](ProductSearchApi.md#getProductSearchAvailability) | **GET** /product_search/availability | 
[**getProductSearchImages**](ProductSearchApi.md#getProductSearchImages) | **GET** /product_search/images | 
[**getProductSearchPrices**](ProductSearchApi.md#getProductSearchPrices) | **GET** /product_search/prices | 
[**getProductSearchRepresentedProducts**](ProductSearchApi.md#getProductSearchRepresentedProducts) | **GET** /product_search/represented_products | 
[**getProductSearchVariations**](ProductSearchApi.md#getProductSearchVariations) | **GET** /product_search/variations | 

<a name="getProductSearch"></a>
# **getProductSearch**
> ProductSearchResult getProductSearch(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, link and name in  the product search hit. Other search hit properties can be added by using the expand parameter. The search result  contains only products that are online and assigned to site catalog.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             htypes: Allow to refine by including only the provided hit types. Accepted types are 'product', 'master', 'set', 'bundle', 'slicing_group' (deprecated), 'variation_group'.             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'expand': ["expand_example"], // [String] | The expand parameter. A comma separated list with the allowed values (availability, images,             prices, represented_products, variations)
  'currency': "currency_example", // String | The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             htypes: Allow to refine by including only the provided hit types. Accepted types are &#x27;product&#x27;, &#x27;master&#x27;, &#x27;set&#x27;, &#x27;bundle&#x27;, &#x27;slicing_group&#x27; (deprecated), &#x27;variation_group&#x27;.             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **expand** | [**[String]**](String.md)| The expand parameter. A comma separated list with the allowed values (availability, images,             prices, represented_products, variations) | [optional] 
 **currency** | **String**| The currency mnemonic specified for price. This parameter is effective only if specified expand parameter value contains prices. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductSearchAvailability"></a>
# **getProductSearchAvailability**
> ProductSearchResult getProductSearchAvailability(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  availability information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearchAvailability(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductSearchImages"></a>
# **getProductSearchImages**
> ProductSearchResult getProductSearchImages(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  image information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearchImages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductSearchPrices"></a>
# **getProductSearchPrices**
> ProductSearchResult getProductSearchPrices(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  price information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'currency': "currency_example", // String | The currency mnemonic specified for price.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearchPrices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **currency** | **String**| The currency mnemonic specified for price. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductSearchRepresentedProducts"></a>
# **getProductSearchRepresentedProducts**
> ProductSearchResult getProductSearchRepresentedProducts(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, link, name and  represented product information in the product search hit.  This resource does not return detailed information about variation products. If a variation product matches the query,   basic information for the parent master product is returned. Use the products resource   to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearchRepresentedProducts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getProductSearchVariations"></a>
# **getProductSearchVariations**
> ProductSearchResult getProductSearchVariations(opts)



Provides keyword and refinement search functionality for products. Only returns the product id, name and  variation information in the product search hit.  This resource does not return detailed information about variation products. Use the   products resource to retrieve more details about a variation product.

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;

// Configure API key authorization: client_id
let client_id = defaultClient.authentications['client_id'];
client_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//client_id.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.ProductSearchApi();
let opts = { 
  'q': "q_example", // String | The query phrase to search for.
  'refine': ["refine_example"], // [String] | Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by '='. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded = \"|\"). Value ranges can be specified like this: refine=price=(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1=c_refinementColor=red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.             
  'sort': "sort_example", // String | The id of the sorting option to sort the search hits.
  'start': 56, // Number | The result set index to return the first instance for. Default value is 0.
  'count': 56, // Number | The maximum number of instances per request. Default value is 25.
  'locale': "locale_example" // String | The locale context.
};
apiInstance.getProductSearchVariations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| The query phrase to search for. | [optional] 
 **refine** | [**[String]**](String.md)| Parameter that represents a refinement attribute/value(s) pair. Refinement attribute id and             value(s) are separated by &#x27;&#x3D;&#x27;. Multiple values are supported by a sub-set of refinement attributes and             can be provided by separating them using a pipe (URL             encoded &#x3D; \&quot;|\&quot;). Value ranges can be specified like this: refine&#x3D;price&#x3D;(100..500) Multiple refine             parameters can be provided by adding an underscore in combination with an integer counter right behind             the parameter name and a counter range 1..9. I.e. refine_1&#x3D;c_refinementColor&#x3D;red|green|blue. The             following system refinement attribute ids are supported:                          cgid: Allows to refine per single category id. Multiple category ids are not supported.             price: Allows to refine per single price range. Multiple price ranges are not supported.             pmid: Allows to refine per promotion id(s).             orderable_only: Unavailable products will be excluded from the search results if true is set. Multiple             refinement values are not supported.              | [optional] 
 **sort** | **String**| The id of the sorting option to sort the search hits. | [optional] 
 **start** | **Number**| The result set index to return the first instance for. Default value is 0. | [optional] 
 **count** | **Number**| The maximum number of instances per request. Default value is 25. | [optional] 
 **locale** | **String**| The locale context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

