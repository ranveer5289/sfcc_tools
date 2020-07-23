# ShopApi.OrdersApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrdersByIDNotesByID**](OrdersApi.md#deleteOrdersByIDNotesByID) | **DELETE** /orders/{order_no}/notes/{note_id} | 
[**deleteOrdersByIDPaymentInstrumentsByID**](OrdersApi.md#deleteOrdersByIDPaymentInstrumentsByID) | **DELETE** /orders/{order_no}/payment_instruments/{payment_instrument_id} | 
[**getOrdersByID**](OrdersApi.md#getOrdersByID) | **GET** /orders/{order_no} | 
[**getOrdersByIDNotes**](OrdersApi.md#getOrdersByIDNotes) | **GET** /orders/{order_no}/notes | 
[**getOrdersByIDPaymentMethods**](OrdersApi.md#getOrdersByIDPaymentMethods) | **GET** /orders/{order_no}/payment_methods | 
[**patchOrdersByID**](OrdersApi.md#patchOrdersByID) | **PATCH** /orders/{order_no} | 
[**patchOrdersByIDPaymentInstrumentsByID**](OrdersApi.md#patchOrdersByIDPaymentInstrumentsByID) | **PATCH** /orders/{order_no}/payment_instruments/{payment_instrument_id} | 
[**postOrders**](OrdersApi.md#postOrders) | **POST** /orders | 
[**postOrdersByIDNotes**](OrdersApi.md#postOrdersByIDNotes) | **POST** /orders/{order_no}/notes | 
[**postOrdersByIDPaymentInstruments**](OrdersApi.md#postOrdersByIDPaymentInstruments) | **POST** /orders/{order_no}/payment_instruments | 
[**putOrdersByID**](OrdersApi.md#putOrdersByID) | **PUT** /orders/{order_no} | 

<a name="deleteOrdersByIDNotesByID"></a>
# **deleteOrdersByIDNotesByID**
> Order deleteOrdersByIDNotesByID(orderNo, noteId)



Removes an order note.

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

let apiInstance = new ShopApi.OrdersApi();
let orderNo = "orderNo_example"; // String | the id of the order to be modified
let noteId = "noteId_example"; // String | the id of the note to be removed

apiInstance.deleteOrdersByIDNotesByID(orderNo, noteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the id of the order to be modified | 
 **noteId** | **String**| the id of the note to be removed | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteOrdersByIDPaymentInstrumentsByID"></a>
# **deleteOrdersByIDPaymentInstrumentsByID**
> Order deleteOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId)



Removes a payment instrument of an order.

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

let apiInstance = new ShopApi.OrdersApi();
let orderNo = "orderNo_example"; // String | the order number
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated

apiInstance.deleteOrdersByIDPaymentInstrumentsByID(orderNo, paymentInstrumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByID"></a>
# **getOrdersByID**
> Order getOrdersByID(orderNo)



Gets information for an order.

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

let apiInstance = new ShopApi.OrdersApi();
let orderNo = "orderNo_example"; // String | the order number

apiInstance.getOrdersByID(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByIDNotes"></a>
# **getOrdersByIDNotes**
> NotesResult getOrdersByIDNotes(orderNo)



Retrieves notes for an order.

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

let apiInstance = new ShopApi.OrdersApi();
let orderNo = "orderNo_example"; // String | The id of the order from which you want to retrieve notes.

apiInstance.getOrdersByIDNotes(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| The id of the order from which you want to retrieve notes. | 

### Return type

[**NotesResult**](NotesResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getOrdersByIDPaymentMethods"></a>
# **getOrdersByIDPaymentMethods**
> PaymentMethodResult getOrdersByIDPaymentMethods(orderNo)



Gets the applicable payment methods for an existing order considering the open payment amount only.

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

let apiInstance = new ShopApi.OrdersApi();
let orderNo = "orderNo_example"; // String | the order number

apiInstance.getOrdersByIDPaymentMethods(orderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderNo** | **String**| the order number | 

### Return type

[**PaymentMethodResult**](PaymentMethodResult.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="patchOrdersByID"></a>
# **patchOrdersByID**
> Order patchOrdersByID(bodyorderNo)



Update an order.   Considered fields for update are status (same status transitions are possible as for dw.order.Order.setStatus(int  status) plus CREATED to FAILED) and custom properties. During the call the correct channel type will be assured to be set for the order  in a successful call. Without agent context the channel type will be storefront otherwise callcenter.

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.Order(); // Order | 
let orderNo = "orderNo_example"; // String | the order number

apiInstance.patchOrdersByID(bodyorderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Order**](Order.md)|  | 
 **orderNo** | **String**| the order number | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchOrdersByIDPaymentInstrumentsByID"></a>
# **patchOrdersByIDPaymentInstrumentsByID**
> Order patchOrdersByIDPaymentInstrumentsByID(bodyorderNopaymentInstrumentId, opts)



Updates a payment instrument of an order and passes the order and updated payment instrument to the correct  payment authorizeCreditcard or authorize hook.   Details:    The payment instrument is updated with the provided details. The payment method must be applicable for the  order see GET /baskets/{basket_id}/payment_methods, if the payment method is &#x27;CREDIT_CARD&#x27; a  payment_card must be specified in the request.      Order authorization:      To authorize the order one of two possible customization hooks is called and an  dw.order.OrderPaymentInstrument is passed as an input argument.      Which hook is called?      If the request includes a payment_card or the dw.order.OrderPaymentInstrument  contains a creditCardType the customization hook dw.order.payment.authorizeCreditCard is called.  See dw.order.hooks.PaymentHooks.authorizeCreditCard(order : Order, paymentDetails : OrderPaymentInstrument, cvn : String) : Status.  Otherwise dw.order.payment.authorize is called.  See dw.order.hooks.PaymentHooks.authorize(order : Order, paymentDetails : OrderPaymentInstrument) : Status.      What is the dw.order.OrderPaymentInstrument input argument passed to the hook?      If the request contains a customer_payment_instrument_id the  dw.order.OrderPaymentInstrument is copied from the customer payment instrument (An exception is thrown  if none was found).  Otherwise the data from the request document is passed (payment_card or  payment_bank_account etc. information).      Note: the amount and the security_code (cvn) contained in the  payment_card data will be propagated if available to  dw.order.payment.authorizeCreditCard even if the dw.order.OrderPaymentInstrument is  resolved from a customer payment instrument.      Customization hook dw.ocapi.shop.order.afterPatchPaymentInstrument is called. The default  implementation places the order if the order status is CREATED and the authorization amount equals or exceeds the  order total. Placing the order (equivalent to calling dw.order.OrderMgr.placeOrder(order : Order)  in the scripting API) results in the order being changed to status NEW and prepared for export.  

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.OrderPaymentInstrumentRequest(); // OrderPaymentInstrumentRequest | 
let orderNo = "orderNo_example"; // String | the order number
let paymentInstrumentId = "paymentInstrumentId_example"; // String | the id of the payment instrument to be updated
let opts = { 
  'skipAuthorization': true // Boolean | 
};
apiInstance.patchOrdersByIDPaymentInstrumentsByID(bodyorderNopaymentInstrumentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderPaymentInstrumentRequest**](OrderPaymentInstrumentRequest.md)|  | 
 **orderNo** | **String**| the order number | 
 **paymentInstrumentId** | **String**| the id of the payment instrument to be updated | 
 **skipAuthorization** | **Boolean**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrders"></a>
# **postOrders**
> Order postOrders(body)



Submits an order based on a prepared basket.  Note: If the basket has been submitted  using Order Center (considered by it&#x27;s client id) the channel type will  be set to \&quot;Call Center\&quot;. In case another channel type was set by a script  before submitting the basket, the channel type will be reset to  \&quot;Call Center\&quot; and a warning will be logged.  The only considered value from the request body is basket_id.

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.Basket(); // Basket | 

apiInstance.postOrders(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Basket**](Basket.md)|  | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrdersByIDNotes"></a>
# **postOrdersByIDNotes**
> Order postOrdersByIDNotes(bodyorderNo)



Adds a note to an existing order.

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.Note(); // Note | 
let orderNo = "orderNo_example"; // String | The id of the order to be modified.

apiInstance.postOrdersByIDNotes(bodyorderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Note**](Note.md)|  | 
 **orderNo** | **String**| The id of the order to be modified. | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postOrdersByIDPaymentInstruments"></a>
# **postOrdersByIDPaymentInstruments**
> Order postOrdersByIDPaymentInstruments(bodyorderNo, opts)



Adds a payment instrument to an order. It is possible either to supply the full payment information or only a  customer payment instrument id and amount. In case the customer payment instrument id was set all the other  properties (except amount) are ignored and the payment data is resolved from the stored customer payment  information. An attempt is made to authorize the order by passing it to the authorize or authorizeCreditCard  hook.   Details:    The payment instrument is added with the provided details or the details from the customer payment  instrument. The payment method must be applicable for the order see GET  /baskets/{basket_id}/payment_methods, if the payment method is &#x27;CREDIT_CARD&#x27; a  payment_card must be specified in the request.      Order authorization:      To authorize the order one of two possible customization hooks is called and an  dw.order.OrderPaymentInstrument is passed as an input argument.      Which hook is called?      If the request includes a payment_card or the dw.order.OrderPaymentInstrument  contains a creditCardType the customization hook dw.order.payment.authorizeCreditCard is called.   See dw.order.hooks.PaymentHooks.authorizeCreditCard(order : Order, paymentDetails : OrderPaymentInstrument, cvn : String) : Status.  Otherwise dw.order.payment.authorize is called. See dw.order.hooks.PaymentHooks.authorize(order : Order, paymentDetails : OrderPaymentInstrument) : Status.      What is the dw.order.OrderPaymentInstrument input argument passed to the hook?      If the request contains a customer_payment_instrument_id the  dw.order.OrderPaymentInstrument is copied from the customer payment instrument (An exception is thrown  if none was found).  Otherwise the data from the request document is passed (payment_card or  payment_bank_account etc. information).      Note: the amount and the security_code (cvn) contained in the  payment_card data will be propagated if available to  dw.order.payment.authorizeCreditCard even if the dw.order.OrderPaymentInstrument is  resolved from a customer payment instrument.      Customization hook dw.ocapi.shop.order.afterPostPaymentInstrument is called. The default  implementation places the order if the order status is CREATED and the authorization amount equals or exceeds the  order total. Placing the order (equivalent to calling dw.order.OrderMgr.placeOrder(order : Order) in the  scripting API) results in the order being changed to status NEW and prepared for export.  

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.OrderPaymentInstrumentRequest(); // OrderPaymentInstrumentRequest | 
let orderNo = "orderNo_example"; // String | the order number
let opts = { 
  'skipAuthorization': true // Boolean | 
};
apiInstance.postOrdersByIDPaymentInstruments(bodyorderNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderPaymentInstrumentRequest**](OrderPaymentInstrumentRequest.md)|  | 
 **orderNo** | **String**| the order number | 
 **skipAuthorization** | **Boolean**|  | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putOrdersByID"></a>
# **putOrdersByID**
> Order putOrdersByID(bodyorderNo)



Submits an order with a given order number, based on a prepared basket.  The  only considered value from the request body is basket_id. This resource is available for OAuth  authentication and requires no user i.e. it supports server-server communication with client grant authentication  and no user is specified.

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

let apiInstance = new ShopApi.OrdersApi();
let body = new ShopApi.Basket(); // Basket | 
let orderNo = "orderNo_example"; // String | The order number to assign to the new order.

apiInstance.putOrdersByID(bodyorderNo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Basket**](Basket.md)|  | 
 **orderNo** | **String**| The order number to assign to the new order. | 

### Return type

[**Order**](Order.md)

### Authorization

[client_id](../README.md#client_id), [customers_auth](../README.md#customers_auth), [oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

