# DataApi.GlobalPreferencesApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGlobalPreferencesPreferenceGroupsByIDByID**](GlobalPreferencesApi.md#getGlobalPreferencesPreferenceGroupsByIDByID) | **GET** /global_preferences/preference_groups/{group_id}/{instance_type} | 
[**patchGlobalPreferencesPreferenceGroupsByIDByID**](GlobalPreferencesApi.md#patchGlobalPreferencesPreferenceGroupsByIDByID) | **PATCH** /global_preferences/preference_groups/{group_id}/{instance_type} | 



## getGlobalPreferencesPreferenceGroupsByIDByID

> OrganizationPreferences getGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, opts)



For the specified instance, read the custom preferences in the preference group at the global(organization) level.  Specify &#39;current&#39; to retrieve the preferences for the instance on which this call is being made. The system will recognize its type.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.GlobalPreferencesApi();
var instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production,current}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var opts = {
  'maskPasswords': true, // Boolean | 
  'expand': ["null"] // [String] | 
};
apiInstance.getGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceType** | **String**| One of {staging,development,sandbox,production,current}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **maskPasswords** | **Boolean**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**OrganizationPreferences**](OrganizationPreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/xml, application/xml


## patchGlobalPreferencesPreferenceGroupsByIDByID

> OrganizationPreferences patchGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, body, opts)



For the specified instance, update one or more custom preferences in the preference group  at the global(organization) level.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.GlobalPreferencesApi();
var instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var body = new DataApi.OrganizationPreferences(); // OrganizationPreferences | 
var opts = {
  'maskPasswords': true // Boolean | 
};
apiInstance.patchGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceType** | **String**| One of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **body** | [**OrganizationPreferences**](OrganizationPreferences.md)|  | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**OrganizationPreferences**](OrganizationPreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

