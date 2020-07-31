# ShopApi.BasketsApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/shop/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBasketsByID**](BasketsApi.md#deleteBasketsByID) | **DELETE** /baskets/{basket_id} | 
[**deleteBasketsByIDCouponsByID**](BasketsApi.md#deleteBasketsByIDCouponsByID) | **DELETE** /baskets/{basket_id}/coupons/{coupon_item_id} | 
[**deleteBasketsByIDGiftCertificateItemsByID**](BasketsApi.md#deleteBasketsByIDGiftCertificateItemsByID) | **DELETE** /baskets/{basket_id}/gift_certificate_items/{gift_certificate_item_id} | 
[**deleteBasketsByIDItemsByID**](BasketsApi.md#deleteBasketsByIDItemsByID) | **DELETE** /baskets/{basket_id}/items/{item_id} | 
[**deleteBasketsByIDNotesByID**](BasketsApi.md#deleteBasketsByIDNotesByID) | **DELETE** /baskets/{basket_id}/notes/{note_id} | 
[**deleteBasketsByIDPaymentInstrumentsByID**](BasketsApi.md#deleteBasketsByIDPaymentInstrumentsByID) | **DELETE** /baskets/{basket_id}/payment_instruments/{payment_instrument_id} | 
[**deleteBasketsByIDPriceAdjustmentsByID**](BasketsApi.md#deleteBasketsByIDPriceAdjustmentsByID) | **DELETE** /baskets/{basket_id}/price_adjustments/{price_adjustment_id} | 
[**deleteBasketsByIDShipmentsByID**](BasketsApi.md#deleteBasketsByIDShipmentsByID) | **DELETE** /baskets/{basket_id}/shipments/{shipment_id} | 
[**getBasketsByID**](BasketsApi.md#getBasketsByID) | **GET** /baskets/{basket_id} | 
[**getBasketsByIDApproachingDiscounts**](BasketsApi.md#getBasketsByIDApproachingDiscounts) | **GET** /baskets/{basket_id}/approaching_discounts | 
[**getBasketsByIDNotes**](BasketsApi.md#getBasketsByIDNotes) | **GET** /baskets/{basket_id}/notes | 
[**getBasketsByIDPaymentMethods**](BasketsApi.md#getBasketsByIDPaymentMethods) | **GET** /baskets/{basket_id}/payment_methods | 
[**getBasketsByIDShipmentsByIDShippingMethods**](BasketsApi.md#getBasketsByIDShipmentsByIDShippingMethods) | **GET** /baskets/{basket_id}/shipments/{shipment_id}/shipping_methods | 
[**patchBasketsByID**](BasketsApi.md#patchBasketsByID) | **PATCH** /baskets/{basket_id} | 
[**patchBasketsByIDGiftCertificateItemsByID**](BasketsApi.md#patchBasketsByIDGiftCertificateItemsByID) | **PATCH** /baskets/{basket_id}/gift_certificate_items/{gift_certificate_item_id} | 
[**patchBasketsByIDItemsByID**](BasketsApi.md#patchBasketsByIDItemsByID) | **PATCH** /baskets/{basket_id}/items/{item_id} | 
[**patchBasketsByIDPaymentInstrumentsByID**](BasketsApi.md#patchBasketsByIDPaymentInstrumentsByID) | **PATCH** /baskets/{basket_id}/payment_instruments/{payment_instrument_id} | 
[**patchBasketsByIDPriceAdjustmentsByID**](BasketsApi.md#patchBasketsByIDPriceAdjustmentsByID) | **PATCH** /baskets/{basket_id}/price_adjustments/{price_adjustment_id} | 
[**patchBasketsByIDShipmentsByID**](BasketsApi.md#patchBasketsByIDShipmentsByID) | **PATCH** /baskets/{basket_id}/shipments/{shipment_id} | 
[**postBaskets**](BasketsApi.md#postBaskets) | **POST** /baskets | 
[**postBasketsByIDCoupons**](BasketsApi.md#postBasketsByIDCoupons) | **POST** /baskets/{basket_id}/coupons | 
[**postBasketsByIDGiftCertificateItems**](BasketsApi.md#postBasketsByIDGiftCertificateItems) | **POST** /baskets/{basket_id}/gift_certificate_items | 
[**postBasketsByIDItems**](BasketsApi.md#postBasketsByIDItems) | **POST** /baskets/{basket_id}/items | 
[**postBasketsByIDNotes**](BasketsApi.md#postBasketsByIDNotes) | **POST** /baskets/{basket_id}/notes | 
[**postBasketsByIDPaymentInstruments**](BasketsApi.md#postBasketsByIDPaymentInstruments) | **POST** /baskets/{basket_id}/payment_instruments | 
[**postBasketsByIDPriceAdjustments**](BasketsApi.md#postBasketsByIDPriceAdjustments) | **POST** /baskets/{basket_id}/price_adjustments | 
[**postBasketsByIDShipments**](BasketsApi.md#postBasketsByIDShipments) | **POST** /baskets/{basket_id}/shipments | 
[**postBasketsReference**](BasketsApi.md#postBasketsReference) | **POST** /baskets/reference | 
[**putBasketsByIDAgent**](BasketsApi.md#putBasketsByIDAgent) | **PUT** /baskets/{basket_id}/agent | 
[**putBasketsByIDBillingAddress**](BasketsApi.md#putBasketsByIDBillingAddress) | **PUT** /baskets/{basket_id}/billing_address | 
[**putBasketsByIDCustomer**](BasketsApi.md#putBasketsByIDCustomer) | **PUT** /baskets/{basket_id}/customer | 
[**putBasketsByIDShipmentsByIDShippingAddress**](BasketsApi.md#putBasketsByIDShipmentsByIDShippingAddress) | **PUT** /baskets/{basket_id}/shipments/{shipment_id}/shipping_address | 
[**putBasketsByIDShipmentsByIDShippingMethod**](BasketsApi.md#putBasketsByIDShipmentsByIDShippingMethod) | **PUT** /baskets/{basket_id}/shipments/{shipment_id}/shipping_method | 
[**putBasketsByIDStorefront**](BasketsApi.md#putBasketsByIDStorefront) | **PUT** /baskets/{basket_id}/storefront | 



## deleteBasketsByID

> deleteBasketsByID(basketId)



Removes a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be retrieved
apiInstance.deleteBasketsByID(basketId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be retrieved | 

### Return type

null (empty response body)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteBasketsByIDCouponsByID

> Basket deleteBasketsByIDCouponsByID(basketId, couponItemId)



Removes a coupon from the basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var couponItemId = "couponItemId_example"; // String | the id of the coupon item to be removed
apiInstance.deleteBasketsByIDCouponsByID(basketId, couponItemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **couponItemId** | **String**| the id of the coupon item to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDGiftCertificateItemsByID

> Basket deleteBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId)



Deletes a gift certificate item from an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var giftCertificateItemId = "giftCertificateItemId_example"; // String | the id of the gift certificate item to be removed
apiInstance.deleteBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **giftCertificateItemId** | **String**| the id of the gift certificate item to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDItemsByID

> Basket deleteBasketsByIDItemsByID(basketId, itemId)



Removes a product item from the basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var itemId = "itemId_example"; // String | the id of the product item to be removed
apiInstance.deleteBasketsByIDItemsByID(basketId, itemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **itemId** | **String**| the id of the product item to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDNotesByID

> Basket deleteBasketsByIDNotesByID(basketId, noteId)



Removes a basket note.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var noteId = "noteId_example"; // String | the id of the note to be removed
apiInstance.deleteBasketsByIDNotesByID(basketId, noteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **noteId** | **String**| the id of the note to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDPaymentInstrumentsByID

> Basket deleteBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId)



Removes a payment instrument of a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
var paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be removed
apiInstance.deleteBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDPriceAdjustmentsByID

> Basket deleteBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId)



Removes a custom manual price adjustment from the basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var priceAdjustmentId = "priceAdjustmentId_example"; // String | the uuid of the adjustment to be removed
apiInstance.deleteBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **priceAdjustmentId** | **String**| the uuid of the adjustment to be removed | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## deleteBasketsByIDShipmentsByID

> Basket deleteBasketsByIDShipmentsByID(basketId, shipmentId)



Removes a specified shipment and all associated product, gift certificate,  shipping and price adjustment line items from a basket.  It is not permissible to remove the default shipment.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var shipmentId = "shipmentId_example"; // String | the id of the shipment to be deleted
apiInstance.deleteBasketsByIDShipmentsByID(basketId, shipmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **shipmentId** | **String**| the id of the shipment to be deleted | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getBasketsByID

> Basket getBasketsByID(basketId)



Gets a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be retrieved
apiInstance.getBasketsByID(basketId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be retrieved | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getBasketsByIDApproachingDiscounts

> ApproachingDiscountResult getBasketsByIDApproachingDiscounts(basketId)



Gets the approaching discounts of a basket

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be checked.
apiInstance.getBasketsByIDApproachingDiscounts(basketId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be checked. | 

### Return type

[**ApproachingDiscountResult**](ApproachingDiscountResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getBasketsByIDNotes

> NotesResult getBasketsByIDNotes(basketId)



Retrieves notes for a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket for which you want to retrieve the notes.
apiInstance.getBasketsByIDNotes(basketId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket for which you want to retrieve the notes. | 

### Return type

[**NotesResult**](NotesResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getBasketsByIDPaymentMethods

> PaymentMethodResult getBasketsByIDPaymentMethods(basketId)



Gets applicable payment methods for an existing basket considering the open payment amount only.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
apiInstance.getBasketsByIDPaymentMethods(basketId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 

### Return type

[**PaymentMethodResult**](PaymentMethodResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## getBasketsByIDShipmentsByIDShippingMethods

> ShippingMethodResult getBasketsByIDShipmentsByIDShippingMethods(basketId, shipmentId)



Gets the applicable shipping methods for a certain shipment of a  basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket
var shipmentId = "shipmentId_example"; // String | the id of the shipment
apiInstance.getBasketsByIDShipmentsByIDShippingMethods(basketId, shipmentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket | 
 **shipmentId** | **String**| the id of the shipment | 

### Return type

[**ShippingMethodResult**](ShippingMethodResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByID

> Basket patchBasketsByID(basketId, body)



Updates a basket. Only the currency of the basket, source code, and the custom  properties of the basket and of the shipping items will be considered.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var body = new ShopApi.Basket(); // Basket | 
apiInstance.patchBasketsByID(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **body** | [**Basket**](Basket.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByIDGiftCertificateItemsByID

> Basket patchBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId, body)



Updates a gift certificate item of an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var giftCertificateItemId = "giftCertificateItemId_example"; // String | the id of the gift certificate item to be updated
var body = new ShopApi.GiftCertificateItem(); // GiftCertificateItem | 
apiInstance.patchBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **giftCertificateItemId** | **String**| the id of the gift certificate item to be updated | 
 **body** | [**GiftCertificateItem**](GiftCertificateItem.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByIDItemsByID

> Basket patchBasketsByIDItemsByID(basketId, itemId, body)



Updates an item in a basket.  The  following values in the request body are considered by the server:    product_id: a valid product id. The purpose of this  value is to exchange a variation of a variation product.  shipment_id: a valid shipment id. The purpose of  this value is to move a product item to another shipment.  quantity: a number between 0 and 999. The purpose of  this value is to change quantity of the product item. If quantity is 0,  the product item is removed.  option_items/option_value_id: a valid option value  id. The purpose of this value is to exchange an option value for an  option item of an option product.   This is only possible if the product item is an option product. To change  option values a collection of option items to be changed need to be  provided in property option_items. Those  option_items need to contain option_id  and option_value_id. The provided values must be valid  for the option product that this product item represents. Otherwise  InvalidProductOptionItemException or  InvalidProductOptionValueItemException will be thrown.  custom properties c_&lt;CUSTOM_NAME&gt;: a  value corresponding to the type defined for custom attribute  &lt;CUSTOM_NAME&gt; of ProductLineItem. The purpose of this value is to  add or change the value of a custom attribute defined for  ProductLineItem.  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var itemId = "itemId_example"; // String | the it of the item to be updated
var body = new ShopApi.ProductItem(); // ProductItem | 
apiInstance.patchBasketsByIDItemsByID(basketId, itemId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **itemId** | **String**| the it of the item to be updated | 
 **body** | [**ProductItem**](ProductItem.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByIDPaymentInstrumentsByID

> Basket patchBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId, body)



Updates a payment instrument of a basket.    Payment instruments are usually authorized after order creation, for example in a custom hook. The default  payment authorization process executes an authorization when a payment instrument is added to an order or  updated. See POST /orders/{order_no}/payment_instruments and PATCH  /orders/{order_no}/payment_instruments/{payment_instrument_id}  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
var paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated
var body = new ShopApi.BasketPaymentInstrumentRequest(); // BasketPaymentInstrumentRequest | 
apiInstance.patchBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 
 **body** | [**BasketPaymentInstrumentRequest**](BasketPaymentInstrumentRequest.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByIDPriceAdjustmentsByID

> Basket patchBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId, body)



Updates a custom manual price adjustment on the basket. Only the following PATH values are considered for the  update: discount, item_text, reason_code and custom properties; all other attributes are ignored. The discount  type of a price adjustment cannot be updated and therefore, the value of the existing type must be passed. For an  adjustment of type PERCENTAGE, the &#39;percentage&#39; attribute is mandatory. For adjustments of type AMOUNT and  FIXED_PRICE, the &#39;amount&#39; attribute is mandatory.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var priceAdjustmentId = "priceAdjustmentId_example"; // String | the uuid of the adjustment to be updated
var body = new ShopApi.PriceAdjustment(); // PriceAdjustment | 
apiInstance.patchBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **priceAdjustmentId** | **String**| the uuid of the adjustment to be updated | 
 **body** | [**PriceAdjustment**](PriceAdjustment.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchBasketsByIDShipmentsByID

> Basket patchBasketsByIDShipmentsByID(basketId, shipmentId, body)



Updates a shipment for a basket.    The shipment is initialized with values provided in the body  document and can be updated with further data API calls. Considered from  the body are the following properties if specified    the id  the shipping address  the shipping method  gift boolean flag  gift message  custom properties  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var shipmentId = "shipmentId_example"; // String | the id of the shipment to be modified
var body = new ShopApi.Shipment(); // Shipment | 
apiInstance.patchBasketsByIDShipmentsByID(basketId, shipmentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **shipmentId** | **String**| the id of the shipment to be modified | 
 **body** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBaskets

> Basket postBaskets(opts)



Creates a new basket. The created basket is initialized with default values. Data provided in the body document  will be populated into the created basket. It can be updated with further Shop API calls.   Considered values from the request body are:    customer information: PUT /baskets/{basket_id}/customer  billing address: PUT /baskets/{basket_id}/billing_address  shipments including shipping address and shipping method: POST /baskets/{basket_id}/shipments  product items: POST /baskets/{basket_id}/items  coupon items: POST /baskets/{basket_id}/coupons  gift certificate items: POST /baskets/{basket_id}/gift_certificates  payment method and card type: POST /baskets/{basket_id}/payment_instruments  custom properties: PATCH /baskets/{basket_id}    Related resource means with which resource you can specify the same data after the basket creation.   Identify the basket using the basket_id property, which  should be integrated into the path of an update request, for example a POST to  /baskets/{basket_id}/items.  The resource supports JWT or  OAuth tokens for authentication:    A customer must provide a JWT, which specifies exactly one customer (it may be a guest or a registered  customer). In this case the resource creates a basket for this customer.  An agent must provide an OAuth token. The agent can use this resource to create a basket for a new created  guest customer, and can later update the customer if desired.     The number of baskets which can be created per customer is limited. When a  basket is created it is said to be open. It remains open until either an order is created from it  using a POST to resource /orders or it is deleted using a DELETE to resource  /baskets/{basket_id}. The number of open baskets allowed depends on the authentication  method used:    When using JWT each customer can have just one open basket  When using OAuth each customer can have up to 4 open baskets (this is a quota setting which can be  updated by support)    Custom properties in the form c_&lt;CUSTOM_NAME&gt; are supported. A custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for the Basket system object, and its value must be valid for that custom  attribute. Other basket properties like the channel type or source code cannot be set with this resource.

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

var apiInstance = new ShopApi.BasketsApi();
var opts = {
  'body': new ShopApi.Basket() // Basket | 
};
apiInstance.postBaskets(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Basket**](Basket.md)|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDCoupons

> Basket postBasketsByIDCoupons(basketId, body)



Adds a coupon to an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be modified.
var body = new ShopApi.CouponItem(); // CouponItem | 
apiInstance.postBasketsByIDCoupons(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **body** | [**CouponItem**](CouponItem.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDGiftCertificateItems

> Basket postBasketsByIDGiftCertificateItems(basketId, body)



Adds a gift certificate item to an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var body = new ShopApi.GiftCertificateItem(); // GiftCertificateItem | 
apiInstance.postBasketsByIDGiftCertificateItems(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **body** | [**GiftCertificateItem**](GiftCertificateItem.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDItems

> Basket postBasketsByIDItems(basketId, body)



Adds new items to a basket.  The added items are associated with the  specified shipment. If no shipment id is specified, the added items are associated with the default shipment.   Considered values from the request body, for each item are:    product_id: a valid product id. This is the id of the product to be added to the basket. If the  product is already in the basket, the API either increments the quantity of the existing product line item or  creates a new product line item, based on the site preference &#39;Add Product Behavior&#39;. For option products and  product bundles containing variation masters, the API creates a new product line item regardless of the site  preference.  shipment_id: a valid shipment id (optional). This is the id of the shipment in which the product item  is created.  quantity: a number between 0.01 and 999. This is the quantity of the product to order.  inventory_id: a valid inventory id (optional). This is the id of the inventory from which the item is  allocated.  bonus_discount_line_item_id: a valid bonus discount line item id (optional). This is the id of the  bonus discount line item for which the added product is a selected bonus product.  option_items/option_value_id: a valid option value id. This is an option value for an option item of  an option product.  This is only possible if the product item is an option  product. To set option values, you must specify a collection of option items in the option_items  property. These option items must contain option_id and option_value_id. Also,  the values you specify must be valid for the option product that this product item represents. Otherwise, the  server throws an InvalidProductOptionItemException or an  InvalidProductOptionValueItemException.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductLineItem. The value of this property must be valid for the  type of custom attribute defined for ProductLineItem.  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be modified.
var body = new ShopApi.ProductItem(); // ProductItem | 
apiInstance.postBasketsByIDItems(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **body** | [**ProductItem**](ProductItem.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDNotes

> Basket postBasketsByIDNotes(basketId, body)



Adds a note to an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be modified.
var body = new ShopApi.Note(); // Note | 
apiInstance.postBasketsByIDNotes(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **body** | [**Note**](Note.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDPaymentInstruments

> Basket postBasketsByIDPaymentInstruments(basketId, body)



Adds a payment instrument to a basket.    Payment instruments are usually authorized after order creation, for example in a custom hook. The default  payment authorization process executes an authorization when a payment instrument is added to an order or  updated. See POST /orders/{order_no}/payment_instruments and PATCH  /orders/{order_no}/payment_instruments/{payment_instrument_id}.  NOTE: If CREDIT_CARD is selected as the payment_method_id, it is mandatory to provide the property card_type.  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
var body = new ShopApi.BasketPaymentInstrumentRequest(); // BasketPaymentInstrumentRequest | 
apiInstance.postBasketsByIDPaymentInstruments(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 
 **body** | [**BasketPaymentInstrumentRequest**](BasketPaymentInstrumentRequest.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDPriceAdjustments

> Basket postBasketsByIDPriceAdjustments(basketId, body)



Adds a custom manual price adjustment to the basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var body = new ShopApi.PriceAdjustmentRequest(); // PriceAdjustmentRequest | 
apiInstance.postBasketsByIDPriceAdjustments(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **body** | [**PriceAdjustmentRequest**](PriceAdjustmentRequest.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsByIDShipments

> Basket postBasketsByIDShipments(basketId, body)



Creates a new shipment for a basket.    The created shipment is initialized with values provided in the body  document and can be updated with further data API calls. Considered from  the body are the following properties if specified:    the id  the shipping address  the shipping method  gift boolean flag  gift message  custom properties  

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var body = new ShopApi.Shipment(); // Shipment | 
apiInstance.postBasketsByIDShipments(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **body** | [**Shipment**](Shipment.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postBasketsReference

> Basket postBasketsReference(body)



Creates a new basket based on a basket reference.    The returned basket will be a copy of the basket in the reference. The basket in the reference must be a basket  of an anonymous customer and the provided customer_id in the reference must match the anonymous customer in the  basket. In case customer_id not matching a BasketNotFoundException will be returned as fault. All personal data  like payment instruments and coupons will not be copied over to the new basket.  

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

var apiInstance = new ShopApi.BasketsApi();
var body = new ShopApi.BasketReference(); // BasketReference | 
apiInstance.postBasketsReference(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BasketReference**](BasketReference.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDAgent

> Basket putBasketsByIDAgent(basketId)



Marks a basket as an agent basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
apiInstance.putBasketsByIDAgent(basketId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDBillingAddress

> Basket putBasketsByIDBillingAddress(basketId, opts)



Sets the billing address of a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be modified.
var opts = {
  'useAsShipping': true, // Boolean | 
  'customerAddressId': "customerAddressId_example", // String | 
  'body': new ShopApi.OrderAddress() // OrderAddress | 
};
apiInstance.putBasketsByIDBillingAddress(basketId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **useAsShipping** | **Boolean**|  | [optional] 
 **customerAddressId** | **String**|  | [optional] 
 **body** | [**OrderAddress**](OrderAddress.md)|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDCustomer

> Basket putBasketsByIDCustomer(basketId, body)



Sets customer information for an existing basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var body = new ShopApi.CustomerInfo(); // CustomerInfo | 
apiInstance.putBasketsByIDCustomer(basketId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **body** | [**CustomerInfo**](CustomerInfo.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDShipmentsByIDShippingAddress

> Basket putBasketsByIDShipmentsByIDShippingAddress(basketId, shipmentId, body, opts)



Sets a shipping address of a specific shipment of a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | The id of the basket to be modified.
var shipmentId = "shipmentId_example"; // String | The id of the shipment to be modified.
var body = new ShopApi.OrderAddress(); // OrderAddress | 
var opts = {
  'useAsBilling': true, // Boolean | 
  'customerAddressId': "customerAddressId_example" // String | 
};
apiInstance.putBasketsByIDShipmentsByIDShippingAddress(basketId, shipmentId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **shipmentId** | **String**| The id of the shipment to be modified. | 
 **body** | [**OrderAddress**](OrderAddress.md)|  | 
 **useAsBilling** | **Boolean**|  | [optional] 
 **customerAddressId** | **String**|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDShipmentsByIDShippingMethod

> Basket putBasketsByIDShipmentsByIDShippingMethod(basketId, shipmentId, body)



Sets a shipping method to a specific shipment of a basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the id of the basket to be modified
var shipmentId = "shipmentId_example"; // String | the id of the shipment to be modified
var body = new ShopApi.ShippingMethod(); // ShippingMethod | 
apiInstance.putBasketsByIDShipmentsByIDShippingMethod(basketId, shipmentId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the id of the basket to be modified | 
 **shipmentId** | **String**| the id of the shipment to be modified | 
 **body** | [**ShippingMethod**](ShippingMethod.md)|  | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putBasketsByIDStorefront

> Basket putBasketsByIDStorefront(basketId, opts)



Marks a basket as storefront basket.

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

var apiInstance = new ShopApi.BasketsApi();
var basketId = "basketId_example"; // String | the basket id
var opts = {
  'exchange': true // Boolean | 
};
apiInstance.putBasketsByIDStorefront(basketId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| the basket id | 
 **exchange** | **Boolean**|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml

