# DataApi.CustomObjectsSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCustomObjectsSearchByID**](CustomObjectsSearchApi.md#postCustomObjectsSearchByID) | **POST** /custom_objects_search/{object_type} | 

<a name="postCustomObjectsSearchByID"></a>
# **postCustomObjectsSearchByID**
> CustomObjectSearchResult postCustomObjectsSearchByID(bodyobjectType)



Search resource for custom objects in scope of a specific custom object type.    The custom object search document contains a search object that allows filtering on various attributes.      The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    key_value_string - String  key_value_integer - Integer  creation_date - Date  last_modified - Date  site_id - String  any custom attribute      Note that only searchable attributes can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.CustomObjectsSearchApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let objectType = "objectType_example"; // String | ID of the object type to search objects for

apiInstance.postCustomObjectsSearchByID(bodyobjectType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **objectType** | **String**| ID of the object type to search objects for | 

### Return type

[**CustomObjectSearchResult**](CustomObjectSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

