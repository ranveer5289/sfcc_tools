# ShopApi.AiApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAiProductRecommendationsByID**](AiApi.md#getAiProductRecommendationsByID) | **GET** /ai/product_recommendations/{recommender_name} | 

<a name="getAiProductRecommendationsByID"></a>
# **getAiProductRecommendationsByID**
> ProductRecommendationsResult getAiProductRecommendationsByID(recommenderName, opts)



This is a beta feature that has been canceled. A future release will include the ability to obtain product recommendations by making direct calls to the Commerce Cloud Einstein API.  Returns product recommendations based on the given product or category IDs.

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

let apiInstance = new ShopApi.AiApi();
let recommenderName = "recommenderName_example"; // String | The recommender name.
let opts = { 
  'products': ["products_example"], // [String] | 
  'categories': ["categories_example"], // [String] | 
  'uuid': "uuid_example", // String | 
  'expand': ["expand_example"], // [String] | 
  'inventoryIds': ["inventoryIds_example"], // [String] | 
  'currency': "currency_example", // String | 
  'allImages': true // Boolean | 
};
apiInstance.getAiProductRecommendationsByID(recommenderName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recommenderName** | **String**| The recommender name. | 
 **products** | [**[String]**](String.md)|  | [optional] 
 **categories** | [**[String]**](String.md)|  | [optional] 
 **uuid** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 
 **inventoryIds** | [**[String]**](String.md)|  | [optional] 
 **currency** | **String**|  | [optional] 
 **allImages** | **Boolean**|  | [optional] 

### Return type

[**ProductRecommendationsResult**](ProductRecommendationsResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

