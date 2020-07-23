# ShopApi.BasketsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

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

<a name="deleteBasketsByID"></a>
# **deleteBasketsByID**
> deleteBasketsByID(basketId)



Removes a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be retrieved

apiInstance.deleteBasketsByID(basketId).then(() => {
  console.log('API called successfully.');
}, (error) => {
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

<a name="deleteBasketsByIDCouponsByID"></a>
# **deleteBasketsByIDCouponsByID**
> Basket deleteBasketsByIDCouponsByID(basketId, couponItemId)



Removes a coupon from the basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let couponItemId = "couponItemId_example"; // String | the id of the coupon item to be removed

apiInstance.deleteBasketsByIDCouponsByID(basketId, couponItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDGiftCertificateItemsByID"></a>
# **deleteBasketsByIDGiftCertificateItemsByID**
> Basket deleteBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId)



Deletes a gift certificate item from an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let giftCertificateItemId = "giftCertificateItemId_example"; // String | the id of the gift certificate item to be removed

apiInstance.deleteBasketsByIDGiftCertificateItemsByID(basketId, giftCertificateItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDItemsByID"></a>
# **deleteBasketsByIDItemsByID**
> Basket deleteBasketsByIDItemsByID(basketId, itemId)



Removes a product item from the basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let itemId = "itemId_example"; // String | the id of the product item to be removed

apiInstance.deleteBasketsByIDItemsByID(basketId, itemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDNotesByID"></a>
# **deleteBasketsByIDNotesByID**
> Basket deleteBasketsByIDNotesByID(basketId, noteId)



Removes a basket note.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let noteId = "noteId_example"; // String | the id of the note to be removed

apiInstance.deleteBasketsByIDNotesByID(basketId, noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDPaymentInstrumentsByID"></a>
# **deleteBasketsByIDPaymentInstrumentsByID**
> Basket deleteBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId)



Removes a payment instrument of a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the basket id
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be removed

apiInstance.deleteBasketsByIDPaymentInstrumentsByID(basketId, paymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDPriceAdjustmentsByID"></a>
# **deleteBasketsByIDPriceAdjustmentsByID**
> Basket deleteBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId)



Removes a custom manual price adjustment from the basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let priceAdjustmentId = "priceAdjustmentId_example"; // String | the uuid of the adjustment to be removed

apiInstance.deleteBasketsByIDPriceAdjustmentsByID(basketId, priceAdjustmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="deleteBasketsByIDShipmentsByID"></a>
# **deleteBasketsByIDShipmentsByID**
> Basket deleteBasketsByIDShipmentsByID(basketId, shipmentId)



Removes a specified shipment and all associated product, gift certificate,  shipping and price adjustment line items from a basket.  It is not permissible to remove the default shipment.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be modified
let shipmentId = "shipmentId_example"; // String | the id of the shipment to be deleted

apiInstance.deleteBasketsByIDShipmentsByID(basketId, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getBasketsByID"></a>
# **getBasketsByID**
> Basket getBasketsByID(basketId)



Gets a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket to be retrieved

apiInstance.getBasketsByID(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getBasketsByIDApproachingDiscounts"></a>
# **getBasketsByIDApproachingDiscounts**
> ApproachingDiscountResult getBasketsByIDApproachingDiscounts(basketId)



Gets the approaching discounts of a basket

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | The id of the basket to be checked.

apiInstance.getBasketsByIDApproachingDiscounts(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getBasketsByIDNotes"></a>
# **getBasketsByIDNotes**
> NotesResult getBasketsByIDNotes(basketId)



Retrieves notes for a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | The id of the basket for which you want to retrieve the notes.

apiInstance.getBasketsByIDNotes(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getBasketsByIDPaymentMethods"></a>
# **getBasketsByIDPaymentMethods**
> PaymentMethodResult getBasketsByIDPaymentMethods(basketId)



Gets applicable payment methods for an existing basket considering the open payment amount only.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the basket id

apiInstance.getBasketsByIDPaymentMethods(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="getBasketsByIDShipmentsByIDShippingMethods"></a>
# **getBasketsByIDShipmentsByIDShippingMethods**
> ShippingMethodResult getBasketsByIDShipmentsByIDShippingMethods(basketId, shipmentId)



Gets the applicable shipping methods for a certain shipment of a  basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the id of the basket
let shipmentId = "shipmentId_example"; // String | the id of the shipment

apiInstance.getBasketsByIDShipmentsByIDShippingMethods(basketId, shipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchBasketsByID"></a>
# **patchBasketsByID**
> Basket patchBasketsByID(bodybasketId)



Updates a basket. Only the currency of the basket, source code, and the custom  properties of the basket and of the shipping items will be considered.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.Basket(); // Basket | 
let basketId = "basketId_example"; // String | the id of the basket to be modified

apiInstance.patchBasketsByID(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Basket**](Basket.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchBasketsByIDGiftCertificateItemsByID"></a>
# **patchBasketsByIDGiftCertificateItemsByID**
> Basket patchBasketsByIDGiftCertificateItemsByID(bodybasketIdgiftCertificateItemId)



Updates a gift certificate item of an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.GiftCertificateItem(); // GiftCertificateItem | 
let basketId = "basketId_example"; // String | the id of the basket to be modified
let giftCertificateItemId = "giftCertificateItemId_example"; // String | the id of the gift certificate item to be updated

apiInstance.patchBasketsByIDGiftCertificateItemsByID(bodybasketIdgiftCertificateItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificateItem**](GiftCertificateItem.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 
 **giftCertificateItemId** | **String**| the id of the gift certificate item to be updated | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchBasketsByIDItemsByID"></a>
# **patchBasketsByIDItemsByID**
> Basket patchBasketsByIDItemsByID(bodybasketIditemId)



Updates an item in a basket.  The  following values in the request body are considered by the server:    product_id: a valid product id. The purpose of this  value is to exchange a variation of a variation product.  shipment_id: a valid shipment id. The purpose of  this value is to move a product item to another shipment.  quantity: a number between 0 and 999. The purpose of  this value is to change quantity of the product item. If quantity is 0,  the product item is removed.  option_items/option_value_id: a valid option value  id. The purpose of this value is to exchange an option value for an  option item of an option product.   This is only possible if the product item is an option product. To change  option values a collection of option items to be changed need to be  provided in property option_items. Those  option_items need to contain option_id  and option_value_id. The provided values must be valid  for the option product that this product item represents. Otherwise  InvalidProductOptionItemException or  InvalidProductOptionValueItemException will be thrown.  custom properties c_&lt;CUSTOM_NAME&gt;: a  value corresponding to the type defined for custom attribute  &lt;CUSTOM_NAME&gt; of ProductLineItem. The purpose of this value is to  add or change the value of a custom attribute defined for  ProductLineItem.  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.ProductItem(); // ProductItem | 
let basketId = "basketId_example"; // String | the id of the basket to be modified
let itemId = "itemId_example"; // String | the it of the item to be updated

apiInstance.patchBasketsByIDItemsByID(bodybasketIditemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductItem**](ProductItem.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 
 **itemId** | **String**| the it of the item to be updated | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchBasketsByIDPaymentInstrumentsByID"></a>
# **patchBasketsByIDPaymentInstrumentsByID**
> Basket patchBasketsByIDPaymentInstrumentsByID(bodybasketIdpaymentInstrumentId)



Updates a payment instrument of a basket.    Payment instruments are usually authorized after order creation, for example in a custom hook. The default  payment authorization process executes an authorization when a payment instrument is added to an order or  updated. See POST /orders/{order_no}/payment_instruments and PATCH  /orders/{order_no}/payment_instruments/{payment_instrument_id}  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.BasketPaymentInstrumentRequest(); // BasketPaymentInstrumentRequest | 
let basketId = "basketId_example"; // String | the basket id
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated

apiInstance.patchBasketsByIDPaymentInstrumentsByID(bodybasketIdpaymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BasketPaymentInstrumentRequest**](BasketPaymentInstrumentRequest.md)|  | 
 **basketId** | **String**| the basket id | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchBasketsByIDPriceAdjustmentsByID"></a>
# **patchBasketsByIDPriceAdjustmentsByID**
> Basket patchBasketsByIDPriceAdjustmentsByID(bodybasketIdpriceAdjustmentId)



Updates a custom manual price adjustment on the basket. Only the following PATH values are considered for the  update: discount, item_text, reason_code and custom properties; all other attributes are ignored. The discount  type of a price adjustment cannot be updated and therefore, the value of the existing type must be passed. For an  adjustment of type PERCENTAGE, the &#x27;percentage&#x27; attribute is mandatory. For adjustments of type AMOUNT and  FIXED_PRICE, the &#x27;amount&#x27; attribute is mandatory.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.PriceAdjustment(); // PriceAdjustment | 
let basketId = "basketId_example"; // String | the id of the basket to be modified
let priceAdjustmentId = "priceAdjustmentId_example"; // String | the uuid of the adjustment to be updated

apiInstance.patchBasketsByIDPriceAdjustmentsByID(bodybasketIdpriceAdjustmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PriceAdjustment**](PriceAdjustment.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 
 **priceAdjustmentId** | **String**| the uuid of the adjustment to be updated | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchBasketsByIDShipmentsByID"></a>
# **patchBasketsByIDShipmentsByID**
> Basket patchBasketsByIDShipmentsByID(bodybasketIdshipmentId)



Updates a shipment for a basket.    The shipment is initialized with values provided in the body  document and can be updated with further data API calls. Considered from  the body are the following properties if specified    the id  the shipping address  the shipping method  gift boolean flag  gift message  custom properties  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.Shipment(); // Shipment | 
let basketId = "basketId_example"; // String | the id of the basket to be modified
let shipmentId = "shipmentId_example"; // String | the id of the shipment to be modified

apiInstance.patchBasketsByIDShipmentsByID(bodybasketIdshipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Shipment**](Shipment.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 
 **shipmentId** | **String**| the id of the shipment to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBaskets"></a>
# **postBaskets**
> Basket postBaskets()



Creates a new basket. The created basket is initialized with default values. Data provided in the body document  will be populated into the created basket. It can be updated with further Shop API calls.   Considered values from the request body are:    customer information: PUT /baskets/{basket_id}/customer  billing address: PUT /baskets/{basket_id}/billing_address  shipments including shipping address and shipping method: POST /baskets/{basket_id}/shipments  product items: POST /baskets/{basket_id}/items  coupon items: POST /baskets/{basket_id}/coupons  gift certificate items: POST /baskets/{basket_id}/gift_certificates  payment method and card type: POST /baskets/{basket_id}/payment_instruments  custom properties: PATCH /baskets/{basket_id}    Related resource means with which resource you can specify the same data after the basket creation.   Identify the basket using the basket_id property, which  should be integrated into the path of an update request, for example a POST to  /baskets/{basket_id}/items.  The resource supports JWT or  OAuth tokens for authentication:    A customer must provide a JWT, which specifies exactly one customer (it may be a guest or a registered  customer). In this case the resource creates a basket for this customer.  An agent must provide an OAuth token. The agent can use this resource to create a basket for a new created  guest customer, and can later update the customer if desired.     The number of baskets which can be created per customer is limited. When a  basket is created it is said to be open. It remains open until either an order is created from it  using a POST to resource /orders or it is deleted using a DELETE to resource  /baskets/{basket_id}. The number of open baskets allowed depends on the authentication  method used:    When using JWT each customer can have just one open basket  When using OAuth each customer can have up to 4 open baskets (this is a quota setting which can be  updated by support)    Custom properties in the form c_&lt;CUSTOM_NAME&gt; are supported. A custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for the Basket system object, and its value must be valid for that custom  attribute. Other basket properties like the channel type or source code cannot be set with this resource.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();

apiInstance.postBaskets().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="postBasketsByIDCoupons"></a>
# **postBasketsByIDCoupons**
> Basket postBasketsByIDCoupons(bodybasketId)



Adds a coupon to an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.CouponItem(); // CouponItem | 
let basketId = "basketId_example"; // String | The id of the basket to be modified.

apiInstance.postBasketsByIDCoupons(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CouponItem**](CouponItem.md)|  | 
 **basketId** | **String**| The id of the basket to be modified. | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDGiftCertificateItems"></a>
# **postBasketsByIDGiftCertificateItems**
> Basket postBasketsByIDGiftCertificateItems(bodybasketId)



Adds a gift certificate item to an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.GiftCertificateItem(); // GiftCertificateItem | 
let basketId = "basketId_example"; // String | the id of the basket to be modified

apiInstance.postBasketsByIDGiftCertificateItems(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificateItem**](GiftCertificateItem.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDItems"></a>
# **postBasketsByIDItems**
> Basket postBasketsByIDItems(bodybasketId)



Adds new items to a basket.  The added items are associated with the  specified shipment. If no shipment id is specified, the added items are associated with the default shipment.   Considered values from the request body, for each item are:    product_id: a valid product id. This is the id of the product to be added to the basket. If the  product is already in the basket, the API either increments the quantity of the existing product line item or  creates a new product line item, based on the site preference &#x27;Add Product Behavior&#x27;. For option products and  product bundles containing variation masters, the API creates a new product line item regardless of the site  preference.  shipment_id: a valid shipment id (optional). This is the id of the shipment in which the product item  is created.  quantity: a number between 0.01 and 999. This is the quantity of the product to order.  inventory_id: a valid inventory id (optional). This is the id of the inventory from which the item is  allocated.  bonus_discount_line_item_id: a valid bonus discount line item id (optional). This is the id of the  bonus discount line item for which the added product is a selected bonus product.  option_items/option_value_id: a valid option value id. This is an option value for an option item of  an option product.  This is only possible if the product item is an option  product. To set option values, you must specify a collection of option items in the option_items  property. These option items must contain option_id and option_value_id. Also,  the values you specify must be valid for the option product that this product item represents. Otherwise, the  server throws an InvalidProductOptionItemException or an  InvalidProductOptionValueItemException.  custom properties in the form c_&lt;CUSTOM_NAME&gt;: the custom property must correspond to a custom  attribute (&lt;CUSTOM_NAME&gt;) defined for ProductLineItem. The value of this property must be valid for the  type of custom attribute defined for ProductLineItem.  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.ProductItem(); // ProductItem | 
let basketId = "basketId_example"; // String | The id of the basket to be modified.

apiInstance.postBasketsByIDItems(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProductItem**](ProductItem.md)|  | 
 **basketId** | **String**| The id of the basket to be modified. | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDNotes"></a>
# **postBasketsByIDNotes**
> Basket postBasketsByIDNotes(bodybasketId)



Adds a note to an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.Note(); // Note | 
let basketId = "basketId_example"; // String | The id of the basket to be modified.

apiInstance.postBasketsByIDNotes(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Note**](Note.md)|  | 
 **basketId** | **String**| The id of the basket to be modified. | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDPaymentInstruments"></a>
# **postBasketsByIDPaymentInstruments**
> Basket postBasketsByIDPaymentInstruments(bodybasketId)



Adds a payment instrument to a basket.    Payment instruments are usually authorized after order creation, for example in a custom hook. The default  payment authorization process executes an authorization when a payment instrument is added to an order or  updated. See POST /orders/{order_no}/payment_instruments and PATCH  /orders/{order_no}/payment_instruments/{payment_instrument_id}.  NOTE: If CREDIT_CARD is selected as the payment_method_id, it is mandatory to provide the property card_type.  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.BasketPaymentInstrumentRequest(); // BasketPaymentInstrumentRequest | 
let basketId = "basketId_example"; // String | the basket id

apiInstance.postBasketsByIDPaymentInstruments(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BasketPaymentInstrumentRequest**](BasketPaymentInstrumentRequest.md)|  | 
 **basketId** | **String**| the basket id | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDPriceAdjustments"></a>
# **postBasketsByIDPriceAdjustments**
> Basket postBasketsByIDPriceAdjustments(bodybasketId)



Adds a custom manual price adjustment to the basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.PriceAdjustmentRequest(); // PriceAdjustmentRequest | 
let basketId = "basketId_example"; // String | the id of the basket to be modified

apiInstance.postBasketsByIDPriceAdjustments(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PriceAdjustmentRequest**](PriceAdjustmentRequest.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsByIDShipments"></a>
# **postBasketsByIDShipments**
> Basket postBasketsByIDShipments(bodybasketId)



Creates a new shipment for a basket.    The created shipment is initialized with values provided in the body  document and can be updated with further data API calls. Considered from  the body are the following properties if specified:    the id  the shipping address  the shipping method  gift boolean flag  gift message  custom properties  

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.Shipment(); // Shipment | 
let basketId = "basketId_example"; // String | the id of the basket to be modified

apiInstance.postBasketsByIDShipments(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Shipment**](Shipment.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postBasketsReference"></a>
# **postBasketsReference**
> Basket postBasketsReference(body)



Creates a new basket based on a basket reference.    The returned basket will be a copy of the basket in the reference. The basket in the reference must be a basket  of an anonymous customer and the provided customer_id in the reference must match the anonymous customer in the  basket. In case customer_id not matching a BasketNotFoundException will be returned as fault. All personal data  like payment instruments and coupons will not be copied over to the new basket.  

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

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.BasketReference(); // BasketReference | 

apiInstance.postBasketsReference(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="putBasketsByIDAgent"></a>
# **putBasketsByIDAgent**
> Basket putBasketsByIDAgent(basketId)



Marks a basket as an agent basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the basket id

apiInstance.putBasketsByIDAgent(basketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="putBasketsByIDBillingAddress"></a>
# **putBasketsByIDBillingAddress**
> Basket putBasketsByIDBillingAddress(basketId, opts)



Sets the billing address of a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | The id of the basket to be modified.
let opts = { 
  'body': new ShopApi.OrderAddress() // OrderAddress | 
  'useAsShipping': true // Boolean | 
  'customerAddressId': "customerAddressId_example" // String | 
};
apiInstance.putBasketsByIDBillingAddress(basketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basketId** | **String**| The id of the basket to be modified. | 
 **body** | [**OrderAddress**](OrderAddress.md)|  | [optional] 
 **useAsShipping** | **Boolean**|  | [optional] 
 **customerAddressId** | **String**|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putBasketsByIDCustomer"></a>
# **putBasketsByIDCustomer**
> Basket putBasketsByIDCustomer(bodybasketId)



Sets customer information for an existing basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.CustomerInfo(); // CustomerInfo | 
let basketId = "basketId_example"; // String | the id of the basket to be modified

apiInstance.putBasketsByIDCustomer(bodybasketId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerInfo**](CustomerInfo.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putBasketsByIDShipmentsByIDShippingAddress"></a>
# **putBasketsByIDShipmentsByIDShippingAddress**
> Basket putBasketsByIDShipmentsByIDShippingAddress(bodybasketIdshipmentId, opts)



Sets a shipping address of a specific shipment of a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.OrderAddress(); // OrderAddress | 
let basketId = "basketId_example"; // String | The id of the basket to be modified.
let shipmentId = "shipmentId_example"; // String | The id of the shipment to be modified.
let opts = { 
  'useAsBilling': true // Boolean | 
  'customerAddressId': "customerAddressId_example" // String | 
};
apiInstance.putBasketsByIDShipmentsByIDShippingAddress(bodybasketIdshipmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderAddress**](OrderAddress.md)|  | 
 **basketId** | **String**| The id of the basket to be modified. | 
 **shipmentId** | **String**| The id of the shipment to be modified. | 
 **useAsBilling** | **Boolean**|  | [optional] 
 **customerAddressId** | **String**|  | [optional] 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putBasketsByIDShipmentsByIDShippingMethod"></a>
# **putBasketsByIDShipmentsByIDShippingMethod**
> Basket putBasketsByIDShipmentsByIDShippingMethod(bodybasketIdshipmentId)



Sets a shipping method to a specific shipment of a basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let body = new ShopApi.ShippingMethod(); // ShippingMethod | 
let basketId = "basketId_example"; // String | the id of the basket to be modified
let shipmentId = "shipmentId_example"; // String | the id of the shipment to be modified

apiInstance.putBasketsByIDShipmentsByIDShippingMethod(bodybasketIdshipmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShippingMethod**](ShippingMethod.md)|  | 
 **basketId** | **String**| the id of the basket to be modified | 
 **shipmentId** | **String**| the id of the shipment to be modified | 

### Return type

[**Basket**](Basket.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putBasketsByIDStorefront"></a>
# **putBasketsByIDStorefront**
> Basket putBasketsByIDStorefront(basketId, opts)



Marks a basket as storefront basket.

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

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new ShopApi.BasketsApi();
let basketId = "basketId_example"; // String | the basket id
let opts = { 
  'exchange': true // Boolean | 
};
apiInstance.putBasketsByIDStorefront(basketId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

