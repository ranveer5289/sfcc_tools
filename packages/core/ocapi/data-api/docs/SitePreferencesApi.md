# DataApi.SitePreferencesApi

All URIs are relative to *http://dev14-global-iic.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID**](SitePreferencesApi.md#getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID) | **GET** /site_preferences/preference_groups/{group_id}/{instance_type}/preferences/{preference_id} | 
[**postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch**](SitePreferencesApi.md#postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch) | **POST** /site_preferences/preference_groups/{group_id}/{instance_type}/preference_search | 



## getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID

> PreferenceValue getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID(instanceType, groupId, preferenceId, opts)



Get a preference across sites in the specified preference group and instance.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitePreferencesApi();
var instanceType = "instanceType_example"; // String | An instance type, one of {staging,development,sandbox,production}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var preferenceId = "preferenceId_example"; // String | The ID of the preference to retrieve.
var opts = {
  'maskPasswords': true // Boolean | 
};
apiInstance.getSitePreferencesPreferenceGroupsByIDByIDPreferencesByID(instanceType, groupId, preferenceId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch

> PreferenceValueSearchResult postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch(instanceType, groupId, body, opts)



Search preferences across sites in the specified preference group and instance.    The query attribute specifies a complex query that can be used to narrow down the search.   The following is a list of searchable fields:     id - String  display_name - Localized String  description - Localized String  value_type* - one of {string, int, double, text, html, date, image, boolean, money, quantity, datetime, email, password, set_of_string, set_of_int, set_of_double, enum_of_string, enum_of_int}     * value_type can only be joined with other attributes using a conjunction (AND).  Note that only searchable attributes can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitePreferencesApi();
var instanceType = "instanceType_example"; // String | An instance type, one of {staging,development,sandbox,production}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var body = new DataApi.SearchRequest(); // SearchRequest | 
var opts = {
  'maskPasswords': true, // Boolean | 
  'expand': ["null"] // [String] | 
};
apiInstance.postSitePreferencesPreferenceGroupsByIDByIDPreferenceSearch(instanceType, groupId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceType** | **String**| An instance type, one of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **maskPasswords** | **Boolean**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**PreferenceValueSearchResult**](PreferenceValueSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

