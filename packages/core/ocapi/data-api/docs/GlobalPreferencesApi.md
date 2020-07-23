# DataApi.GlobalPreferencesApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGlobalPreferencesPreferenceGroupsByIDByID**](GlobalPreferencesApi.md#getGlobalPreferencesPreferenceGroupsByIDByID) | **GET** /global_preferences/preference_groups/{group_id}/{instance_type} | 
[**patchGlobalPreferencesPreferenceGroupsByIDByID**](GlobalPreferencesApi.md#patchGlobalPreferencesPreferenceGroupsByIDByID) | **PATCH** /global_preferences/preference_groups/{group_id}/{instance_type} | 

<a name="getGlobalPreferencesPreferenceGroupsByIDByID"></a>
# **getGlobalPreferencesPreferenceGroupsByIDByID**
> OrganizationPreferences getGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, opts)



For the specified instance, read the custom preferences in the preference group at the global(organization) level.  Specify &#x27;current&#x27; to retrieve the preferences for the instance on which this call is being made. The system will recognize its type.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.GlobalPreferencesApi();
let instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production,current}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let opts = { 
  'maskPasswords': true, // Boolean | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getGlobalPreferencesPreferenceGroupsByIDByID(instanceType, groupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

<a name="patchGlobalPreferencesPreferenceGroupsByIDByID"></a>
# **patchGlobalPreferencesPreferenceGroupsByIDByID**
> OrganizationPreferences patchGlobalPreferencesPreferenceGroupsByIDByID(bodyinstanceTypegroupId, opts)



For the specified instance, update one or more custom preferences in the preference group  at the global(organization) level.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.GlobalPreferencesApi();
let body = new DataApi.OrganizationPreferences(); // OrganizationPreferences | 
let instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let opts = { 
  'maskPasswords': true // Boolean | 
};
apiInstance.patchGlobalPreferencesPreferenceGroupsByIDByID(bodyinstanceTypegroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrganizationPreferences**](OrganizationPreferences.md)|  | 
 **instanceType** | **String**| One of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**OrganizationPreferences**](OrganizationPreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

