# DataApi.SitePreferencesApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID**](SitePreferencesApi.md#getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID) | **GET** /site_preferences/preference_groups/{group_id}/{instance_type}/preferences/{preference_id} | 
[**postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch**](SitePreferencesApi.md#postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch) | **POST** /site_preferences/preference_groups/{group_id}/{instance_type}/preference_search | 

<a name="getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID"></a>
# **getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID**
> PreferenceValue getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID(instanceType, groupId, preferenceId, opts)



Get a preference across sites in the specified preference group and instance.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitePreferencesApi();
let instanceType = "instanceType_example"; // String | An instance type, one of {staging,development,sandbox,production}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let preferenceId = "preferenceId_example"; // String | The ID of the preference to retrieve.
let opts = { 
  'maskPasswords': true // Boolean | 
};
apiInstance.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID(instanceType, groupId, preferenceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceType** | **String**| An instance type, one of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **preferenceId** | **String**| The ID of the preference to retrieve. | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**PreferenceValue**](PreferenceValue.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch"></a>
# **postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch**
> PreferenceValueSearchResult postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch(bodyinstanceTypegroupId, opts)



Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitePreferencesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let instanceType = "instanceType_example"; // String | An instance type, one of {staging,development,sandbox,production}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let opts = { 
  'maskPasswords': true // Boolean | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch(bodyinstanceTypegroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **instanceType** | **String**| An instance type, one of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **maskPasswords** | **Boolean**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PreferenceValueSearchResult**](PreferenceValueSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

