# ShopApi.SessionsApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/shop/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postSessions**](SessionsApi.md#postSessions) | **POST** /sessions | 

<a name="postSessions"></a>
# **postSessions**
> postSessions()



  Exchanges a valid JWT into a new session, which is associated with the authenticated or anonymous customer. All  Set-Cookie headers for handling the session are applied on the response.      Only the JWT is used to create the new session. Any session IDs included in the request are ignored.      Once you create a session from a JWT, you can use it in parallel with stateless OCAPI calls that use the JWT.  There is no need to call the bridging resources again.      If the customer is authenticated and has a storefront basket, that basket is transferred into the session and can  be retrieved using BasketMgr.getCurrentBasket(), along with sensitive data such as addresses and payment  information. The following examples show why this behavior is important to understand as it relates to guest  customers:      Basket created after the session is created:      POST /customers/auth with type “guest”  POST /sessions  POST /baskets  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is erased from the basket due to security considerations        Basket created before the session is created:      POST /customers/auth with type “guest”  POST /baskets  POST /sessions  Storefront request (controller with BasketMgr.getCurrentBasket())  -&gt; Sensitive data is accessible because the basket is marked as secured for this session    

### Example
```javascript
import ShopApi from 'shop_api';
let defaultClient = ShopApi.ApiClient.instance;
// Configure HTTP basic authorization: customers_auth
let customers_auth = defaultClient.authentications['customers_auth'];
customers_auth.username = 'YOUR USERNAME';
customers_auth.password = 'YOUR PASSWORD';

let apiInstance = new ShopApi.SessionsApi();
apiInstance.postSessions().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[customers_auth](../README.md#customers_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

