# DataApi.SitesApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSitesByIDAbTestsByID**](SitesApi.md#deleteSitesByIDAbTestsByID) | **DELETE** /sites/{site_id}/ab_tests/{id} | 
[**deleteSitesByIDAbTestsByIDSegmentsByID**](SitesApi.md#deleteSitesByIDAbTestsByIDSegmentsByID) | **DELETE** /sites/{site_id}/ab_tests/{id}/segments/{segment_id} | 
[**deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID**](SitesApi.md#deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID) | **DELETE** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/promotions/{promotion_id} | 
[**deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID**](SitesApi.md#deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID) | **DELETE** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/slot_configurations/{slot_id}/{slot_config_id} | 
[**deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID**](SitesApi.md#deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID) | **DELETE** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/sorting_rules/{sorting_rule_id}/{category_id} | 
[**deleteSitesByIDCampaignsByID**](SitesApi.md#deleteSitesByIDCampaignsByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id} | 
[**deleteSitesByIDCampaignsByIDCouponsByID**](SitesApi.md#deleteSitesByIDCampaignsByIDCouponsByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/coupons/{coupon_id} | 
[**deleteSitesByIDCampaignsByIDCustomerGroupsByID**](SitesApi.md#deleteSitesByIDCampaignsByIDCustomerGroupsByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/customer_groups/{customer_group_id} | 
[**deleteSitesByIDCampaignsByIDPromotionsByID**](SitesApi.md#deleteSitesByIDCampaignsByIDPromotionsByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/promotions/{promotion_id} | 
[**deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID**](SitesApi.md#deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/slot_configurations/{slot_id}/{slot_config_id} | 
[**deleteSitesByIDCampaignsByIDSortingRulesByIDByID**](SitesApi.md#deleteSitesByIDCampaignsByIDSortingRulesByIDByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/sorting_rules/{sorting_rule_id}/{category_id} | 
[**deleteSitesByIDCampaignsByIDSourceCodeGroupsByID**](SitesApi.md#deleteSitesByIDCampaignsByIDSourceCodeGroupsByID) | **DELETE** /sites/{site_id}/campaigns/{campaign_id}/source_code_groups/{source_code_group_id} | 
[**deleteSitesByIDCartridgesByID**](SitesApi.md#deleteSitesByIDCartridgesByID) | **DELETE** /sites/{site_id}/cartridges/{cartridge_name} | 
[**deleteSitesByIDCouponsByID**](SitesApi.md#deleteSitesByIDCouponsByID) | **DELETE** /sites/{site_id}/coupons/{coupon_id} | 
[**deleteSitesByIDCustomObjectsByIDByID**](SitesApi.md#deleteSitesByIDCustomObjectsByIDByID) | **DELETE** /sites/{site_id}/custom_objects/{object_type}/{key} | 
[**deleteSitesByIDCustomerGroupsByID**](SitesApi.md#deleteSitesByIDCustomerGroupsByID) | **DELETE** /sites/{site_id}/customer_groups/{id} | 
[**deleteSitesByIDCustomerGroupsByIDMembersByID**](SitesApi.md#deleteSitesByIDCustomerGroupsByIDMembersByID) | **DELETE** /sites/{site_id}/customer_groups/{id}/members/{customer_no} | 
[**deleteSitesByIDGiftCertificatesByID**](SitesApi.md#deleteSitesByIDGiftCertificatesByID) | **DELETE** /sites/{site_id}/gift_certificates/{merchant_id} | 
[**deleteSitesByIDPromotionsByID**](SitesApi.md#deleteSitesByIDPromotionsByID) | **DELETE** /sites/{site_id}/promotions/{id} | 
[**deleteSitesByIDSlotsByIDSlotConfigurationsByID**](SitesApi.md#deleteSitesByIDSlotsByIDSlotConfigurationsByID) | **DELETE** /sites/{site_id}/slots/{slot_id}/slot_configurations/{configuration_id} | 
[**deleteSitesByIDSourceCodeGroupsByID**](SitesApi.md#deleteSitesByIDSourceCodeGroupsByID) | **DELETE** /sites/{site_id}/source_code_groups/{id} | 
[**deleteSitesByIDStoresByID**](SitesApi.md#deleteSitesByIDStoresByID) | **DELETE** /sites/{site_id}/stores/{id} | 
[**getSites**](SitesApi.md#getSites) | **GET** /sites | 
[**getSitesByID**](SitesApi.md#getSitesByID) | **GET** /sites/{site_id} | 
[**getSitesByIDAbTests**](SitesApi.md#getSitesByIDAbTests) | **GET** /sites/{site_id}/ab_tests | 
[**getSitesByIDAbTestsByID**](SitesApi.md#getSitesByIDAbTestsByID) | **GET** /sites/{site_id}/ab_tests/{id} | 
[**getSitesByIDAbTestsByIDSegmentsByID**](SitesApi.md#getSitesByIDAbTestsByIDSegmentsByID) | **GET** /sites/{site_id}/ab_tests/{id}/segments/{segment_id} | 
[**getSitesByIDAiRecommenderNames**](SitesApi.md#getSitesByIDAiRecommenderNames) | **GET** /sites/{site_id}/ai/recommender_names | 
[**getSitesByIDCampaignsByID**](SitesApi.md#getSitesByIDCampaignsByID) | **GET** /sites/{site_id}/campaigns/{campaign_id} | 
[**getSitesByIDCoupons**](SitesApi.md#getSitesByIDCoupons) | **GET** /sites/{site_id}/coupons | 
[**getSitesByIDCouponsByID**](SitesApi.md#getSitesByIDCouponsByID) | **GET** /sites/{site_id}/coupons/{coupon_id} | 
[**getSitesByIDCouponsByIDCampaigns**](SitesApi.md#getSitesByIDCouponsByIDCampaigns) | **GET** /sites/{site_id}/coupons/{coupon_id}/campaigns | 
[**getSitesByIDCouponsByIDCampaignsByIDPromotions**](SitesApi.md#getSitesByIDCouponsByIDCampaignsByIDPromotions) | **GET** /sites/{site_id}/coupons/{coupon_id}/campaigns/{campaign_id}/promotions | 
[**getSitesByIDCouponsByIDCodes**](SitesApi.md#getSitesByIDCouponsByIDCodes) | **GET** /sites/{site_id}/coupons/{coupon_id}/codes | 
[**getSitesByIDCouponsByIDPromotions**](SitesApi.md#getSitesByIDCouponsByIDPromotions) | **GET** /sites/{site_id}/coupons/{coupon_id}/promotions | 
[**getSitesByIDCustomObjectsByIDByID**](SitesApi.md#getSitesByIDCustomObjectsByIDByID) | **GET** /sites/{site_id}/custom_objects/{object_type}/{key} | 
[**getSitesByIDCustomerGroups**](SitesApi.md#getSitesByIDCustomerGroups) | **GET** /sites/{site_id}/customer_groups | 
[**getSitesByIDCustomerGroupsByID**](SitesApi.md#getSitesByIDCustomerGroupsByID) | **GET** /sites/{site_id}/customer_groups/{id} | 
[**getSitesByIDCustomerGroupsByIDMembers**](SitesApi.md#getSitesByIDCustomerGroupsByIDMembers) | **GET** /sites/{site_id}/customer_groups/{id}/members | 
[**getSitesByIDCustomerGroupsByIDMembersByID**](SitesApi.md#getSitesByIDCustomerGroupsByIDMembersByID) | **GET** /sites/{site_id}/customer_groups/{id}/members/{customer_no} | 
[**getSitesByIDGiftCertificates**](SitesApi.md#getSitesByIDGiftCertificates) | **GET** /sites/{site_id}/gift_certificates | 
[**getSitesByIDGiftCertificatesByID**](SitesApi.md#getSitesByIDGiftCertificatesByID) | **GET** /sites/{site_id}/gift_certificates/{merchant_id} | 
[**getSitesByIDLocaleInfoLocales**](SitesApi.md#getSitesByIDLocaleInfoLocales) | **GET** /sites/{site_id}/locale_info/locales | 
[**getSitesByIDPromotionsByID**](SitesApi.md#getSitesByIDPromotionsByID) | **GET** /sites/{site_id}/promotions/{id} | 
[**getSitesByIDSitePreferencesPreferenceGroupsByIDByID**](SitesApi.md#getSitesByIDSitePreferencesPreferenceGroupsByIDByID) | **GET** /sites/{site_id}/site_preferences/preference_groups/{group_id}/{instance_type} | 
[**getSitesByIDSlotConfigurations**](SitesApi.md#getSitesByIDSlotConfigurations) | **GET** /sites/{site_id}/slot_configurations | 
[**getSitesByIDSlots**](SitesApi.md#getSitesByIDSlots) | **GET** /sites/{site_id}/slots | 
[**getSitesByIDSlotsByIDByID**](SitesApi.md#getSitesByIDSlotsByIDByID) | **GET** /sites/{site_id}/slots/{slot_id}/{context_type} | 
[**getSitesByIDSlotsByIDSlotConfigurationsByID**](SitesApi.md#getSitesByIDSlotsByIDSlotConfigurationsByID) | **GET** /sites/{site_id}/slots/{slot_id}/slot_configurations/{configuration_id} | 
[**getSitesByIDSourceCodeGroups**](SitesApi.md#getSitesByIDSourceCodeGroups) | **GET** /sites/{site_id}/source_code_groups | 
[**getSitesByIDSourceCodeGroupsByID**](SitesApi.md#getSitesByIDSourceCodeGroupsByID) | **GET** /sites/{site_id}/source_code_groups/{id} | 
[**getSitesByIDStores**](SitesApi.md#getSitesByIDStores) | **GET** /sites/{site_id}/stores | 
[**getSitesByIDStoresByID**](SitesApi.md#getSitesByIDStoresByID) | **GET** /sites/{site_id}/stores/{id} | 
[**patchSitesByIDAbTestsByID**](SitesApi.md#patchSitesByIDAbTestsByID) | **PATCH** /sites/{site_id}/ab_tests/{id} | 
[**patchSitesByIDAbTestsByIDSegmentsByID**](SitesApi.md#patchSitesByIDAbTestsByIDSegmentsByID) | **PATCH** /sites/{site_id}/ab_tests/{id}/segments/{segment_id} | 
[**patchSitesByIDCampaignsByID**](SitesApi.md#patchSitesByIDCampaignsByID) | **PATCH** /sites/{site_id}/campaigns/{campaign_id} | 
[**patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID**](SitesApi.md#patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID) | **PATCH** /sites/{site_id}/campaigns/{campaign_id}/slot_configurations/{slot_id}/{slot_config_id} | 
[**patchSitesByIDCouponsByID**](SitesApi.md#patchSitesByIDCouponsByID) | **PATCH** /sites/{site_id}/coupons/{coupon_id} | 
[**patchSitesByIDCustomObjectsByIDByID**](SitesApi.md#patchSitesByIDCustomObjectsByIDByID) | **PATCH** /sites/{site_id}/custom_objects/{object_type}/{key} | 
[**patchSitesByIDCustomerGroupsByID**](SitesApi.md#patchSitesByIDCustomerGroupsByID) | **PATCH** /sites/{site_id}/customer_groups/{id} | 
[**patchSitesByIDGiftCertificatesByID**](SitesApi.md#patchSitesByIDGiftCertificatesByID) | **PATCH** /sites/{site_id}/gift_certificates/{merchant_id} | 
[**patchSitesByIDOrdersByID**](SitesApi.md#patchSitesByIDOrdersByID) | **PATCH** /sites/{site_id}/orders/{order_no} | 
[**patchSitesByIDOrdersByIDPaymentInstrumentsByID**](SitesApi.md#patchSitesByIDOrdersByIDPaymentInstrumentsByID) | **PATCH** /sites/{site_id}/orders/{order_no}/payment_instruments/{payment_instrument_id} | 
[**patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction**](SitesApi.md#patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction) | **PATCH** /sites/{site_id}/orders/{order_no}/payment_instruments/{payment_instrument_id}/transaction | 
[**patchSitesByIDPromotionsByID**](SitesApi.md#patchSitesByIDPromotionsByID) | **PATCH** /sites/{site_id}/promotions/{id} | 
[**patchSitesByIDSitePreferencesPreferenceGroupsByIDByID**](SitesApi.md#patchSitesByIDSitePreferencesPreferenceGroupsByIDByID) | **PATCH** /sites/{site_id}/site_preferences/preference_groups/{group_id}/{instance_type} | 
[**patchSitesByIDSlotsByIDSlotConfigurationsByID**](SitesApi.md#patchSitesByIDSlotsByIDSlotConfigurationsByID) | **PATCH** /sites/{site_id}/slots/{slot_id}/slot_configurations/{configuration_id} | 
[**patchSitesByIDSourceCodeGroupsByID**](SitesApi.md#patchSitesByIDSourceCodeGroupsByID) | **PATCH** /sites/{site_id}/source_code_groups/{id} | 
[**patchSitesByIDStoresByID**](SitesApi.md#patchSitesByIDStoresByID) | **PATCH** /sites/{site_id}/stores/{id} | 
[**postSitesByIDAbTestSearch**](SitesApi.md#postSitesByIDAbTestSearch) | **POST** /sites/{site_id}/ab_test_search | 
[**postSitesByIDCampaignSearch**](SitesApi.md#postSitesByIDCampaignSearch) | **POST** /sites/{site_id}/campaign_search | 
[**postSitesByIDCartridges**](SitesApi.md#postSitesByIDCartridges) | **POST** /sites/{site_id}/cartridges | 
[**postSitesByIDCouponRedemptionSearch**](SitesApi.md#postSitesByIDCouponRedemptionSearch) | **POST** /sites/{site_id}/coupon_redemption_search | 
[**postSitesByIDCouponSearch**](SitesApi.md#postSitesByIDCouponSearch) | **POST** /sites/{site_id}/coupon_search | 
[**postSitesByIDCouponsByIDMultipleCodes**](SitesApi.md#postSitesByIDCouponsByIDMultipleCodes) | **POST** /sites/{site_id}/coupons/{coupon_id}/multiple_codes | 
[**postSitesByIDCustomerGroupSearch**](SitesApi.md#postSitesByIDCustomerGroupSearch) | **POST** /sites/{site_id}/customer_group_search | 
[**postSitesByIDCustomerGroupsByIDMemberSearch**](SitesApi.md#postSitesByIDCustomerGroupsByIDMemberSearch) | **POST** /sites/{site_id}/customer_groups/{id}/member_search | 
[**postSitesByIDGiftCertificateSearch**](SitesApi.md#postSitesByIDGiftCertificateSearch) | **POST** /sites/{site_id}/gift_certificate_search | 
[**postSitesByIDGiftCertificates**](SitesApi.md#postSitesByIDGiftCertificates) | **POST** /sites/{site_id}/gift_certificates | 
[**postSitesByIDPromotionCampaignAssignmentSearch**](SitesApi.md#postSitesByIDPromotionCampaignAssignmentSearch) | **POST** /sites/{site_id}/promotion_campaign_assignment_search | 
[**postSitesByIDPromotionSearch**](SitesApi.md#postSitesByIDPromotionSearch) | **POST** /sites/{site_id}/promotion_search | 
[**postSitesByIDSlotConfigurationCampaignAssignmentSearch**](SitesApi.md#postSitesByIDSlotConfigurationCampaignAssignmentSearch) | **POST** /sites/{site_id}/slot_configuration_campaign_assignment_search | 
[**postSitesByIDSlotConfigurationSearch**](SitesApi.md#postSitesByIDSlotConfigurationSearch) | **POST** /sites/{site_id}/slot_configuration_search | 
[**postSitesByIDSlotSearch**](SitesApi.md#postSitesByIDSlotSearch) | **POST** /sites/{site_id}/slot_search | 
[**postSitesByIDSortingRuleSearch**](SitesApi.md#postSitesByIDSortingRuleSearch) | **POST** /sites/{site_id}/sorting_rule_search | 
[**postSitesByIDSourceCodeGroupSearch**](SitesApi.md#postSitesByIDSourceCodeGroupSearch) | **POST** /sites/{site_id}/source_code_group_search | 
[**postSitesByIDStoreSearch**](SitesApi.md#postSitesByIDStoreSearch) | **POST** /sites/{site_id}/store_search | 
[**putSitesByIDAbTestsByID**](SitesApi.md#putSitesByIDAbTestsByID) | **PUT** /sites/{site_id}/ab_tests/{id} | 
[**putSitesByIDAbTestsByIDSegmentsByID**](SitesApi.md#putSitesByIDAbTestsByIDSegmentsByID) | **PUT** /sites/{site_id}/ab_tests/{id}/segments/{segment_id} | 
[**putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID**](SitesApi.md#putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID) | **PUT** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/promotions/{promotion_id} | 
[**putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID**](SitesApi.md#putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID) | **PUT** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/slot_configurations/{slot_id}/{slot_config_id} | 
[**putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID**](SitesApi.md#putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID) | **PUT** /sites/{site_id}/ab_tests/{ab_test_id}/segments/{segment_id}/sorting_rules/{sorting_rule_id}/{category_id} | 
[**putSitesByIDCampaignsByID**](SitesApi.md#putSitesByIDCampaignsByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id} | 
[**putSitesByIDCampaignsByIDCouponsByID**](SitesApi.md#putSitesByIDCampaignsByIDCouponsByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/coupons/{coupon_id} | 
[**putSitesByIDCampaignsByIDCustomerGroupsByID**](SitesApi.md#putSitesByIDCampaignsByIDCustomerGroupsByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/customer_groups/{customer_group_id} | 
[**putSitesByIDCampaignsByIDPromotionsByID**](SitesApi.md#putSitesByIDCampaignsByIDPromotionsByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/promotions/{promotion_id} | 
[**putSitesByIDCampaignsByIDSlotConfigurationsByIDByID**](SitesApi.md#putSitesByIDCampaignsByIDSlotConfigurationsByIDByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/slot_configurations/{slot_id}/{slot_config_id} | 
[**putSitesByIDCampaignsByIDSortingRulesByIDByID**](SitesApi.md#putSitesByIDCampaignsByIDSortingRulesByIDByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/sorting_rules/{sorting_rule_id}/{category_id} | 
[**putSitesByIDCampaignsByIDSourceCodeGroupsByID**](SitesApi.md#putSitesByIDCampaignsByIDSourceCodeGroupsByID) | **PUT** /sites/{site_id}/campaigns/{campaign_id}/source_code_groups/{source_code_group_id} | 
[**putSitesByIDCartridges**](SitesApi.md#putSitesByIDCartridges) | **PUT** /sites/{site_id}/cartridges | 
[**putSitesByIDCouponsByID**](SitesApi.md#putSitesByIDCouponsByID) | **PUT** /sites/{site_id}/coupons/{coupon_id} | 
[**putSitesByIDCustomObjectsByIDByID**](SitesApi.md#putSitesByIDCustomObjectsByIDByID) | **PUT** /sites/{site_id}/custom_objects/{object_type}/{key} | 
[**putSitesByIDCustomerGroupsByID**](SitesApi.md#putSitesByIDCustomerGroupsByID) | **PUT** /sites/{site_id}/customer_groups/{id} | 
[**putSitesByIDCustomerGroupsByIDMembersByID**](SitesApi.md#putSitesByIDCustomerGroupsByIDMembersByID) | **PUT** /sites/{site_id}/customer_groups/{id}/members/{customer_no} | 
[**putSitesByIDOrdersByIDConfirmationStatus**](SitesApi.md#putSitesByIDOrdersByIDConfirmationStatus) | **PUT** /sites/{site_id}/orders/{order_no}/confirmation_status | 
[**putSitesByIDOrdersByIDExportStatus**](SitesApi.md#putSitesByIDOrdersByIDExportStatus) | **PUT** /sites/{site_id}/orders/{order_no}/export_status | 
[**putSitesByIDOrdersByIDExternalStatus**](SitesApi.md#putSitesByIDOrdersByIDExternalStatus) | **PUT** /sites/{site_id}/orders/{order_no}/external_status | 
[**putSitesByIDOrdersByIDPaymentStatus**](SitesApi.md#putSitesByIDOrdersByIDPaymentStatus) | **PUT** /sites/{site_id}/orders/{order_no}/payment_status | 
[**putSitesByIDOrdersByIDShipmentsByIDShippingAddress**](SitesApi.md#putSitesByIDOrdersByIDShipmentsByIDShippingAddress) | **PUT** /sites/{site_id}/orders/{order_no}/shipments/{shipment_id}/shipping_address | 
[**putSitesByIDOrdersByIDShippingStatus**](SitesApi.md#putSitesByIDOrdersByIDShippingStatus) | **PUT** /sites/{site_id}/orders/{order_no}/shipping_status | 
[**putSitesByIDOrdersByIDStatus**](SitesApi.md#putSitesByIDOrdersByIDStatus) | **PUT** /sites/{site_id}/orders/{order_no}/status | 
[**putSitesByIDPromotionsByID**](SitesApi.md#putSitesByIDPromotionsByID) | **PUT** /sites/{site_id}/promotions/{id} | 
[**putSitesByIDSlotsByIDSlotConfigurationsByID**](SitesApi.md#putSitesByIDSlotsByIDSlotConfigurationsByID) | **PUT** /sites/{site_id}/slots/{slot_id}/slot_configurations/{configuration_id} | 
[**putSitesByIDSourceCodeGroupsByID**](SitesApi.md#putSitesByIDSourceCodeGroupsByID) | **PUT** /sites/{site_id}/source_code_groups/{id} | 
[**putSitesByIDStoresByID**](SitesApi.md#putSitesByIDStoresByID) | **PUT** /sites/{site_id}/stores/{id} | 

<a name="deleteSitesByIDAbTestsByID"></a>
# **deleteSitesByIDAbTestsByID**
> deleteSitesByIDAbTestsByID(siteId, id)



Deletes the A/B Test by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.

apiInstance.deleteSitesByIDAbTestsByID(siteId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDAbTestsByIDSegmentsByID"></a>
# **deleteSitesByIDAbTestsByIDSegmentsByID**
> deleteSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId)



Deletes the A/B Test Segment by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.
let segmentId = "segmentId_example"; // String | The id of the segment in the test.

apiInstance.deleteSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **segmentId** | **String**| The id of the segment in the test. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID"></a>
# **deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID**
> deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId)



Action to unbind one promotions from a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let abTestId = "abTestId_example"; // String | The abTest ID that promotions are to be unbound from
let segmentId = "segmentId_example"; // String | the segment to bind to
let promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the abTest.

apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **abTestId** | **String**| The abTest ID that promotions are to be unbound from | 
 **segmentId** | **String**| the segment to bind to | 
 **promotionId** | **String**| The ID of the promotion that is to be assigned to the abTest. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID"></a>
# **deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID**
> deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts)



Action to unbind a slot configuration from a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let abTestId = "abTestId_example"; // String | The id of the abTest
let segmentId = "segmentId_example"; // String | 
let siteId = "siteId_example"; // String | The id of the site
let slotId = "slotId_example"; // String | The of the slot
let slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abTestId** | **String**| The id of the abTest | 
 **segmentId** | **String**|  | 
 **siteId** | **String**| The id of the site | 
 **slotId** | **String**| The of the slot | 
 **slotConfigId** | **String**| The id of the slot configuration | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID"></a>
# **deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID**
> deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts)



Action to unbind a single sorting rule from a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the abTest, sorting rule and category.
let abTestId = "abTestId_example"; // String | The ID of the abTest to which the sorting rule is to be assigned.
let segmentId = "segmentId_example"; // String | 
let sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the abTest.
let categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
let opts = { 
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the abTest, sorting rule and category. | 
 **abTestId** | **String**| The ID of the abTest to which the sorting rule is to be assigned. | 
 **segmentId** | **String**|  | 
 **sortingRuleId** | **String**| The ID of sorting rule that is to be assigned to the abTest. | 
 **categoryId** | **String**| The ID of the category that is associated with the sorting rule. | 
 **ruleContext** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByID"></a>
# **deleteSitesByIDCampaignsByID**
> deleteSitesByIDCampaignsByID(siteId, campaignId)



Deletes the campaign by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let campaignId = "campaignId_example"; // String | A campaign id to remove

apiInstance.deleteSitesByIDCampaignsByID(siteId, campaignId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **campaignId** | **String**| A campaign id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDCouponsByID"></a>
# **deleteSitesByIDCampaignsByIDCouponsByID**
> deleteSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId, opts)



Action to unbind a coupon from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be unbound from
let couponId = "couponId_example"; // String | The coupon ID to unbind from a campaign
let opts = { 
  'removeInPCA': "removeInPCA_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that coupons are to be unbound from | 
 **couponId** | **String**| The coupon ID to unbind from a campaign | 
 **removeInPCA** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDCustomerGroupsByID"></a>
# **deleteSitesByIDCampaignsByIDCustomerGroupsByID**
> deleteSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId)



Action to unbind a customer group from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be unbound from
let customerGroupId = "customerGroupId_example"; // String | The customer group ID to unbind from a campaign

apiInstance.deleteSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that coupons are to be unbound from | 
 **customerGroupId** | **String**| The customer group ID to unbind from a campaign | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDPromotionsByID"></a>
# **deleteSitesByIDCampaignsByIDPromotionsByID**
> deleteSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId)



Action to unbind a single promotion from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the campaign and promotion.
let campaignId = "campaignId_example"; // String | The ID of the campaign to which the promotion is to be assigned.
let promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the campaign.

apiInstance.deleteSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the campaign and promotion. | 
 **campaignId** | **String**| The ID of the campaign to which the promotion is to be assigned. | 
 **promotionId** | **String**| The ID of the promotion that is to be assigned to the campaign. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID"></a>
# **deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID**
> deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts)



Action to unbind a slot configuration from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let campaignId = "campaignId_example"; // String | The id of the campaign
let siteId = "siteId_example"; // String | The id of the site
let slotId = "slotId_example"; // String | The of the slot
let slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| The id of the campaign | 
 **siteId** | **String**| The id of the site | 
 **slotId** | **String**| The of the slot | 
 **slotConfigId** | **String**| The id of the slot configuration | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDSortingRulesByIDByID"></a>
# **deleteSitesByIDCampaignsByIDSortingRulesByIDByID**
> deleteSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts)



Action to unbind a single sorting rule from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the campaign, sorting rule and category.
let campaignId = "campaignId_example"; // String | The ID of the campaign to which the sorting rule is to be assigned.
let sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the campaign.
let categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
let opts = { 
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the campaign, sorting rule and category. | 
 **campaignId** | **String**| The ID of the campaign to which the sorting rule is to be assigned. | 
 **sortingRuleId** | **String**| The ID of sorting rule that is to be assigned to the campaign. | 
 **categoryId** | **String**| The ID of the category that is associated with the sorting rule. | 
 **ruleContext** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCampaignsByIDSourceCodeGroupsByID"></a>
# **deleteSitesByIDCampaignsByIDSourceCodeGroupsByID**
> deleteSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId)



Action to unbind a source code group from a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that source code groups are to be unbound from
let sourceCodeGroupId = "sourceCodeGroupId_example"; // String | The source code group ID to unbind from a campaign

apiInstance.deleteSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that source code groups are to be unbound from | 
 **sourceCodeGroupId** | **String**| The source code group ID to unbind from a campaign | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCartridgesByID"></a>
# **deleteSitesByIDCartridgesByID**
> CartridgePathApiResponse deleteSitesByIDCartridgesByID(siteId, cartridgeName)



Remove a cartridge from cartridge path.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site.
let cartridgeName = "cartridgeName_example"; // String | request body

apiInstance.deleteSitesByIDCartridgesByID(siteId, cartridgeName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **cartridgeName** | **String**| request body | 

### Return type

[**CartridgePathApiResponse**](CartridgePathApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteSitesByIDCouponsByID"></a>
# **deleteSitesByIDCouponsByID**
> deleteSitesByIDCouponsByID(siteId, couponId)



Delete a coupon by id.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | Id of the coupon to delete from the site.

apiInstance.deleteSitesByIDCouponsByID(siteId, couponId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| Id of the coupon to delete from the site. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCustomObjectsByIDByID"></a>
# **deleteSitesByIDCustomObjectsByIDByID**
> deleteSitesByIDCustomObjectsByIDByID(siteId, objectType, key)



Deletes a site specific Custom Object. If the Custom Object does not exist, this will do nothing. Note that the customization scripts are only called, if the Custom Object does exist.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | the ID of the site
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.deleteSitesByIDCustomObjectsByIDByID(siteId, objectType, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| the ID of the site | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDCustomerGroupsByID"></a>
# **deleteSitesByIDCustomerGroupsByID**
> CustomerGroup deleteSitesByIDCustomerGroupsByID(siteId, id, opts)



Triggers customer group deletion by ID. Be aware that the deletion happens via asynchronous batch process  which is the reason the deletion itself is not necessarily finished after the call to this resource returned. The   customer group that is in deletion will be provided in the response.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | One customer group id to remove
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.deleteSitesByIDCustomerGroupsByID(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| One customer group id to remove | 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="deleteSitesByIDCustomerGroupsByIDMembersByID"></a>
# **deleteSitesByIDCustomerGroupsByIDMembersByID**
> deleteSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to remove a customer from a (static) customer group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the customer group.
let customerNo = "customerNo_example"; // String | The customer number of the customer to remove from the group.
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.deleteSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the customer group. | 
 **customerNo** | **String**| The customer number of the customer to remove from the group. | 
 **select** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDGiftCertificatesByID"></a>
# **deleteSitesByIDGiftCertificatesByID**
> deleteSitesByIDGiftCertificatesByID(siteId, merchantId)



Deletes the gift certificate by merchant ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let merchantId = "merchantId_example"; // String | One gift certificate merchant id to remove

apiInstance.deleteSitesByIDGiftCertificatesByID(siteId, merchantId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **merchantId** | **String**| One gift certificate merchant id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDPromotionsByID"></a>
# **deleteSitesByIDPromotionsByID**
> deleteSitesByIDPromotionsByID(siteId, id)



Deletes the promotion by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | Promotion id to remove

apiInstance.deleteSitesByIDPromotionsByID(siteId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| Promotion id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDSlotsByIDSlotConfigurationsByID"></a>
# **deleteSitesByIDSlotsByIDSlotConfigurationsByID**
> deleteSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts)



Removes a configuration for slot in a given context from a site.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
let slotId = "slotId_example"; // String | The id of the slot.
let configurationId = "configurationId_example"; // String | The id of the slot configuration.
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDSourceCodeGroupsByID"></a>
# **deleteSitesByIDSourceCodeGroupsByID**
> deleteSitesByIDSourceCodeGroupsByID(siteId, id)



Deletes the source code group by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | One source code group id to remove

apiInstance.deleteSitesByIDSourceCodeGroupsByID(siteId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| One source code group id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteSitesByIDStoresByID"></a>
# **deleteSitesByIDStoresByID**
> deleteSitesByIDStoresByID(siteId, id)



Deletes the store by ID

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | One store id to remove

apiInstance.deleteSitesByIDStoresByID(siteId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| One store id to remove | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSites"></a>
# **getSites**
> Sites getSites(opts)



Action to get all existing sites.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let opts = { 
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getSites(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Number**| Optional start index for retrieving the items from a given index (default 0). | [optional] 
 **count** | **Number**| Optional count for retrieving only a subset of the items (default is 25). | [optional] 
 **select** | **String**| The property selector. | [optional] 

### Return type

[**Sites**](Sites.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByID"></a>
# **getSitesByID**
> Site getSitesByID(siteId)



Action to read an existing site.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | the id of the site

apiInstance.getSitesByID(siteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| the id of the site | 

### Return type

[**Site**](Site.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDAbTests"></a>
# **getSitesByIDAbTests**
> AbTests getSitesByIDAbTests(siteId, opts)



Action to get all the A/B tests with searching.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDAbTests(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**AbTests**](AbTests.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDAbTestsByID"></a>
# **getSitesByIDAbTestsByID**
> AbTest getSitesByIDAbTestsByID(siteId, id, opts)



Action to get an A/B Test information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDAbTestsByID(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AbTest**](AbTest.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDAbTestsByIDSegmentsByID"></a>
# **getSitesByIDAbTestsByIDSegmentsByID**
> AbTestSegment getSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts)



Gets an A/B Test segment using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.
let segmentId = "segmentId_example"; // String | The id of the segment in the test.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **segmentId** | **String**| The id of the segment in the test. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AbTestSegment**](AbTestSegment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDAiRecommenderNames"></a>
# **getSitesByIDAiRecommenderNames**
> RecommendersResult getSitesByIDAiRecommenderNames(siteId)



Get a list of available AI recommenders. Recommenders are configured in the Einstein configurator and are required with AI recommendation API requests.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | Site ID to get a list of recommenders for.

apiInstance.getSitesByIDAiRecommenderNames(siteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Site ID to get a list of recommenders for. | 

### Return type

[**RecommendersResult**](RecommendersResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCampaignsByID"></a>
# **getSitesByIDCampaignsByID**
> Campaign getSitesByIDCampaignsByID(siteId, campaignId)



Action to get campaign information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site the requested campaign belongs to.
let campaignId = "campaignId_example"; // String | The id of the requested campaign.

apiInstance.getSitesByIDCampaignsByID(siteId, campaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site the requested campaign belongs to. | 
 **campaignId** | **String**| The id of the requested campaign. | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCoupons"></a>
# **getSitesByIDCoupons**
> Coupons getSitesByIDCoupons(siteId, opts)



Action to get all the coupons with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDCoupons(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Coupons**](Coupons.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCouponsByID"></a>
# **getSitesByIDCouponsByID**
> Coupon getSitesByIDCouponsByID(siteId, couponId, opts)



Action to get coupon information.   The following fields are returned in the Coupon document when specifying the stats expand:        exported_code_count      redemption_count      total_codes_count       If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the requested coupon.
let opts = { 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDCouponsByID(siteId, couponId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the requested coupon. | 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCouponsByIDCampaigns"></a>
# **getSitesByIDCouponsByIDCampaigns**
> Campaigns getSitesByIDCouponsByIDCampaigns(siteId, couponId, opts)



Get the campaigns that have a coupon assigned to them either directly or through promotions

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon that is assigned to campaigns directly or through promotions.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCampaigns(siteId, couponId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon that is assigned to campaigns directly or through promotions. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Campaigns**](Campaigns.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCouponsByIDCampaignsByIDPromotions"></a>
# **getSitesByIDCouponsByIDCampaignsByIDPromotions**
> Promotions getSitesByIDCouponsByIDCampaignsByIDPromotions(siteId, couponId, campaignId, opts)



Get the promotions for a campaign that have a coupon assigned to them either directly or through campaigns.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon that is assigned to promotions directly or through campaigns.
let campaignId = "campaignId_example"; // String | The id of the campaign that we want to restrict the set of promotions for.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCampaignsByIDPromotions(siteId, couponId, campaignId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon that is assigned to promotions directly or through campaigns. | 
 **campaignId** | **String**| The id of the campaign that we want to restrict the set of promotions for. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Promotions**](Promotions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCouponsByIDCodes"></a>
# **getSitesByIDCouponsByIDCodes**
> CouponCodes getSitesByIDCouponsByIDCodes(siteId, couponId, opts)



Get the coupon codes for the given coupon.   If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon from which to delete codes (must be a multiple code coupon).
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCodes(siteId, couponId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon from which to delete codes (must be a multiple code coupon). | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**CouponCodes**](CouponCodes.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCouponsByIDPromotions"></a>
# **getSitesByIDCouponsByIDPromotions**
> Promotions getSitesByIDCouponsByIDPromotions(siteId, couponId, opts)



Get the promotions that have a coupon assigned to them either directly or through campaigns.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon that is assigned to promotions directly or through campaigns.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDPromotions(siteId, couponId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon that is assigned to promotions directly or through campaigns. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Promotions**](Promotions.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCustomObjectsByIDByID"></a>
# **getSitesByIDCustomObjectsByIDByID**
> CustomObject getSitesByIDCustomObjectsByIDByID(siteId, objectType, key)



Reads a site specific Custom Object with a given object type ID and a value for the key attribute of the object which represents its unique identifier.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | the ID of the site
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.getSitesByIDCustomObjectsByIDByID(siteId, objectType, key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| the ID of the site | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCustomerGroups"></a>
# **getSitesByIDCustomerGroups**
> CustomerGroups getSitesByIDCustomerGroups(siteId, opts)



Action to get all the customer groups with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroups(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroups**](CustomerGroups.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCustomerGroupsByID"></a>
# **getSitesByIDCustomerGroupsByID**
> CustomerGroup getSitesByIDCustomerGroupsByID(siteId, id, opts)



Action to get customer group information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested customer group.
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByID(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested customer group. | 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCustomerGroupsByIDMembers"></a>
# **getSitesByIDCustomerGroupsByIDMembers**
> CustomerGroupMembers getSitesByIDCustomerGroupsByIDMembers(siteId, id, opts)



Action to get all the customer group members with no filtering. For dynamic customer groups and the system groups \&quot;Everyone\&quot; and \&quot;Unregistered\&quot; no result is returned (Status Code: 204 - No Content).

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let id = "id_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByIDMembers(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **id** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroupMembers**](CustomerGroupMembers.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDCustomerGroupsByIDMembersByID"></a>
# **getSitesByIDCustomerGroupsByIDMembersByID**
> CustomerGroupMember getSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to get customer group member information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested members customer group.
let customerNo = "customerNo_example"; // String | The customer number of the requested customer group member.
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested members customer group. | 
 **customerNo** | **String**| The customer number of the requested customer group member. | 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroupMember**](CustomerGroupMember.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDGiftCertificates"></a>
# **getSitesByIDGiftCertificates**
> GiftCertificates getSitesByIDGiftCertificates(siteId, opts)



Action to get all the gift certificates with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDGiftCertificates(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**GiftCertificates**](GiftCertificates.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDGiftCertificatesByID"></a>
# **getSitesByIDGiftCertificatesByID**
> GiftCertificate getSitesByIDGiftCertificatesByID(siteId, merchantId)



Action to get gift certificate information using merchant ID.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let merchantId = "merchantId_example"; // String | The merchant id of the requested gift certificate.

apiInstance.getSitesByIDGiftCertificatesByID(siteId, merchantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **merchantId** | **String**| The merchant id of the requested gift certificate. | 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDLocaleInfoLocales"></a>
# **getSitesByIDLocaleInfoLocales**
> LocaleResult getSitesByIDLocaleInfoLocales(siteId, opts)



Action to get the set of locales with the system given a site.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | Only locales specified for the site are returned
let opts = { 
  'includeAll': true, // Boolean | 
  'id': "id_example", // String | 
  'select': "select_example", // String | 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getSitesByIDLocaleInfoLocales(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| Only locales specified for the site are returned | 
 **includeAll** | **Boolean**|  | [optional] 
 **id** | **String**|  | [optional] 
 **select** | **String**|  | [optional] 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 

### Return type

[**LocaleResult**](LocaleResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDPromotionsByID"></a>
# **getSitesByIDPromotionsByID**
> Promotion getSitesByIDPromotionsByID(siteId, id)



Action to get promotion information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the requested promotion.

apiInstance.getSitesByIDPromotionsByID(siteId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested promotion. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSitePreferencesPreferenceGroupsByIDByID"></a>
# **getSitesByIDSitePreferencesPreferenceGroupsByIDByID**
> SitePreferences getSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, opts)



For the specified site and instance, read the custom preferences in the preference group.  Specify &#x27;current&#x27; to retrieve the preferences for the instance on which this call is being made. The system will recognize its type.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production,current}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let opts = { 
  'maskPasswords': true // Boolean | 
};
apiInstance.getSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **instanceType** | **String**| One of {staging,development,sandbox,production,current}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**SitePreferences**](SitePreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSlotConfigurations"></a>
# **getSitesByIDSlotConfigurations**
> SlotConfigurations getSitesByIDSlotConfigurations(siteId, opts)



Action to get all the slot configurations with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlotConfigurations(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**SlotConfigurations**](SlotConfigurations.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSlots"></a>
# **getSitesByIDSlots**
> Slots getSitesByIDSlots(siteId, opts)



Action to get all the slots with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlots(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Slots**](Slots.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSlotsByIDByID"></a>
# **getSitesByIDSlotsByIDByID**
> Slot getSitesByIDSlotsByIDByID(siteId, slotId, contextType, opts)



Action to get slot information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let slotId = "slotId_example"; // String | The id of the requested slot.
let contextType = "contextType_example"; // String | The context type (folder, global, category).
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlotsByIDByID(siteId, slotId, contextType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **slotId** | **String**| The id of the requested slot. | 
 **contextType** | **String**| The context type (folder, global, category). | 
 **select** | **String**|  | [optional] 

### Return type

[**Slot**](Slot.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSlotsByIDSlotConfigurationsByID"></a>
# **getSitesByIDSlotsByIDSlotConfigurationsByID**
> SlotConfiguration getSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts)



Action to read an existing slot configuration.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
let slotId = "slotId_example"; // String | The id of the slot.
let configurationId = "configurationId_example"; // String | The id of the slot configuration.
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.getSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **context** | **String**|  | [optional] 

### Return type

[**SlotConfiguration**](SlotConfiguration.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSourceCodeGroups"></a>
# **getSitesByIDSourceCodeGroups**
> SourceCodeGroups getSitesByIDSourceCodeGroups(siteId, opts)



Action to get all the source code groups with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDSourceCodeGroups(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**SourceCodeGroups**](SourceCodeGroups.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDSourceCodeGroupsByID"></a>
# **getSitesByIDSourceCodeGroupsByID**
> SourceCodeGroup getSitesByIDSourceCodeGroupsByID(siteId, id, opts)



Action to retrieve source code group information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested source code group.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};
apiInstance.getSitesByIDSourceCodeGroupsByID(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested source code group. | 
 **expand** | [**[String]**](String.md)|  | [optional] 

### Return type

[**SourceCodeGroup**](SourceCodeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDStores"></a>
# **getSitesByIDStores**
> Stores getSitesByIDStores(siteId, opts)



Action to get all the stores with no filtering.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let opts = { 
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDStores(siteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **start** | **Number**|  | [optional] 
 **count** | **Number**|  | [optional] 
 **select** | **String**|  | [optional] 

### Return type

[**Stores**](Stores.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="getSitesByIDStoresByID"></a>
# **getSitesByIDStoresByID**
> Store getSitesByIDStoresByID(siteId, id, opts)



Action to get store information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the requested store.
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDStoresByID(siteId, id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested store. | 
 **select** | **String**|  | [optional] 

### Return type

[**Store**](Store.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDAbTestsByID"></a>
# **patchSitesByIDAbTestsByID**
> AbTest patchSitesByIDAbTestsByID(siteIdid)



Updates the A/B Test with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.

apiInstance.patchSitesByIDAbTestsByID(siteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **body** | [**AbTest**](AbTest.md)|  | [optional] 

### Return type

[**AbTest**](AbTest.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDAbTestsByIDSegmentsByID"></a>
# **patchSitesByIDAbTestsByIDSegmentsByID**
> AbTestSegment patchSitesByIDAbTestsByIDSegmentsByID(siteIdidsegmentId)



Updates the A/B Test segment with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.
let segmentId = "segmentId_example"; // String | The id of the segment in the test.

apiInstance.patchSitesByIDAbTestsByIDSegmentsByID(siteIdidsegmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **segmentId** | **String**| The id of the segment in the test. | 
 **body** | [**AbTestSegment**](AbTestSegment.md)|  | [optional] 

### Return type

[**AbTestSegment**](AbTestSegment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDCampaignsByID"></a>
# **patchSitesByIDCampaignsByID**
> Campaign patchSitesByIDCampaignsByID(bodysiteIdcampaignId)



Updates the campaign with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Campaign(); // Campaign | 
let siteId = "siteId_example"; // String | The site context.
let campaignId = "campaignId_example"; // String | The id of the requested campaign.

apiInstance.patchSitesByIDCampaignsByID(bodysiteIdcampaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Campaign**](Campaign.md)|  | 
 **siteId** | **String**| The site context. | 
 **campaignId** | **String**| The id of the requested campaign. | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID"></a>
# **patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID**
> patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID(bodycampaignIdsiteIdslotIdslotConfigId, opts)



Action to update the assignment of slot configuration to a campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SlotConfigurationCampaignAssignment(); // SlotConfigurationCampaignAssignment | 
let campaignId = "campaignId_example"; // String | The ID of the campaign.
let siteId = "siteId_example"; // String | The ID of the site.
let slotId = "slotId_example"; // String | The ID of the slot.
let slotConfigId = "slotConfigId_example"; // String | The ID of the slot configuration.
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID(bodycampaignIdsiteIdslotIdslotConfigId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SlotConfigurationCampaignAssignment**](SlotConfigurationCampaignAssignment.md)|  | 
 **campaignId** | **String**| The ID of the campaign. | 
 **siteId** | **String**| The ID of the site. | 
 **slotId** | **String**| The ID of the slot. | 
 **slotConfigId** | **String**| The ID of the slot configuration. | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="patchSitesByIDCouponsByID"></a>
# **patchSitesByIDCouponsByID**
> Coupon patchSitesByIDCouponsByID(bodysiteIdcouponId)



Updates the coupon with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Coupon(); // Coupon | 
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the requested coupon.

apiInstance.patchSitesByIDCouponsByID(bodysiteIdcouponId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Coupon**](Coupon.md)|  | 
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the requested coupon. | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDCustomObjectsByIDByID"></a>
# **patchSitesByIDCustomObjectsByIDByID**
> CustomObject patchSitesByIDCustomObjectsByIDByID(bodysiteIdobjectTypekey)



Updates a site specific Custom Object with information from request body. Note that only mentioned attributes will be updated and the key attribute is ignored. All other attributes will be left unattended.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.CustomObject(); // CustomObject | 
let siteId = "siteId_example"; // String | the ID of the site
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.patchSitesByIDCustomObjectsByIDByID(bodysiteIdobjectTypekey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomObject**](CustomObject.md)|  | 
 **siteId** | **String**| the ID of the site | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDCustomerGroupsByID"></a>
# **patchSitesByIDCustomerGroupsByID**
> CustomerGroup patchSitesByIDCustomerGroupsByID(bodysiteIdid)



Updates the customer group with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.CustomerGroup(); // CustomerGroup | 
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested customer group.

apiInstance.patchSitesByIDCustomerGroupsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerGroup**](CustomerGroup.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested customer group. | 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDGiftCertificatesByID"></a>
# **patchSitesByIDGiftCertificatesByID**
> GiftCertificate patchSitesByIDGiftCertificatesByID(bodysiteIdmerchantId)



Updates the gift certificate with the specified information using merchant ID.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.GiftCertificate(); // GiftCertificate | 
let siteId = "siteId_example"; // String | The id of the site.
let merchantId = "merchantId_example"; // String | The merchant id of the requested gift certificate.

apiInstance.patchSitesByIDGiftCertificatesByID(bodysiteIdmerchantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificate**](GiftCertificate.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **merchantId** | **String**| The merchant id of the requested gift certificate. | 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDOrdersByID"></a>
# **patchSitesByIDOrdersByID**
> patchSitesByIDOrdersByID(bodysiteIdorderNo)



Updates the order.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderUpdateRequest(); // OrderUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site
let orderNo = "orderNo_example"; // String | The order number

apiInstance.patchSitesByIDOrdersByID(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderUpdateRequest**](OrderUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="patchSitesByIDOrdersByIDPaymentInstrumentsByID"></a>
# **patchSitesByIDOrdersByIDPaymentInstrumentsByID**
> patchSitesByIDOrdersByIDPaymentInstrumentsByID(bodysiteIdorderNopaymentInstrumentId)



Updates the payment instrument of an order.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.PaymentInstrumentUpdateRequest(); // PaymentInstrumentUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site
let orderNo = "orderNo_example"; // String | The order number
let paymentInstrumentId = "paymentInstrumentId_example"; // String | ID of the payment instrument

apiInstance.patchSitesByIDOrdersByIDPaymentInstrumentsByID(bodysiteIdorderNopaymentInstrumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentInstrumentUpdateRequest**](PaymentInstrumentUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **paymentInstrumentId** | **String**| ID of the payment instrument | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction"></a>
# **patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction**
> patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction(bodysiteIdorderNopaymentInstrumentId)



Updates the transaction of an order payment instrument.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.PaymentTransactionUpdateRequest(); // PaymentTransactionUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site
let orderNo = "orderNo_example"; // String | The order number
let paymentInstrumentId = "paymentInstrumentId_example"; // String | ID of the payment instrument

apiInstance.patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction(bodysiteIdorderNopaymentInstrumentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentTransactionUpdateRequest**](PaymentTransactionUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **paymentInstrumentId** | **String**| ID of the payment instrument | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="patchSitesByIDPromotionsByID"></a>
# **patchSitesByIDPromotionsByID**
> Promotion patchSitesByIDPromotionsByID(bodysiteIdid)



Updates the promotion with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Promotion(); // Promotion | 
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the requested promotion.

apiInstance.patchSitesByIDPromotionsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Promotion**](Promotion.md)|  | 
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested promotion. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDSitePreferencesPreferenceGroupsByIDByID"></a>
# **patchSitesByIDSitePreferencesPreferenceGroupsByIDByID**
> SitePreferences patchSitesByIDSitePreferencesPreferenceGroupsByIDByID(bodysiteIdinstanceTypegroupId, opts)



For the specified site and instance, update one or more custom preferences in the preference group.  Preferences of type password cannot be set to \&quot;************\&quot; since it is a reserved value.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SitePreferences(); // SitePreferences | 
let siteId = "siteId_example"; // String | The site context.
let instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production}.
let groupId = "groupId_example"; // String | The ID of the preference group.
let opts = { 
  'maskPasswords': true // Boolean | 
};
apiInstance.patchSitesByIDSitePreferencesPreferenceGroupsByIDByID(bodysiteIdinstanceTypegroupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SitePreferences**](SitePreferences.md)|  | 
 **siteId** | **String**| The site context. | 
 **instanceType** | **String**| One of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**SitePreferences**](SitePreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDSlotsByIDSlotConfigurationsByID"></a>
# **patchSitesByIDSlotsByIDSlotConfigurationsByID**
> SlotConfiguration patchSitesByIDSlotsByIDSlotConfigurationsByID(bodysiteIdslotIdconfigurationId, opts)



Updates an existing slot configuration. This action ignores the slot_id and  the context information in the input document. Note that this operation will  not touch any relational properties, which means, that e.g. the rank on a specific  campaign assignment will not be changed, when the rank for the slot configuration  itself is updated.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SlotConfiguration(); // SlotConfiguration | 
let siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
let slotId = "slotId_example"; // String | The id of the slot.
let configurationId = "configurationId_example"; // String | The id of the slot configuration.
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.patchSitesByIDSlotsByIDSlotConfigurationsByID(bodysiteIdslotIdconfigurationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SlotConfiguration**](SlotConfiguration.md)|  | 
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **context** | **String**|  | [optional] 

### Return type

[**SlotConfiguration**](SlotConfiguration.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDSourceCodeGroupsByID"></a>
# **patchSitesByIDSourceCodeGroupsByID**
> SourceCodeGroup patchSitesByIDSourceCodeGroupsByID(bodysiteIdid)



Updates the source code group with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SourceCodeGroup(); // SourceCodeGroup | 
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested source code group.

apiInstance.patchSitesByIDSourceCodeGroupsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SourceCodeGroup**](SourceCodeGroup.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested source code group. | 

### Return type

[**SourceCodeGroup**](SourceCodeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="patchSitesByIDStoresByID"></a>
# **patchSitesByIDStoresByID**
> Store patchSitesByIDStoresByID(bodysiteIdid)



Updates the store with the specified information.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Store(); // Store | 
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the requested store.

apiInstance.patchSitesByIDStoresByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Store**](Store.md)|  | 
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested store. | 

### Return type

[**Store**](Store.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDAbTestSearch"></a>
# **postSitesByIDAbTestSearch**
> AbTestSearchResult postSitesByIDAbTestSearch(bodysiteId)



Searches for A/B Tests. The query attribute specifies a complex query that can be used to narrow down the search. This is the list of searchable attributes:  id - String description - String enabled - Boolean paused - Boolean key_metric_id - String email_addresses - String tags- String expiration_type - String enum[session, never] start_date - DateTime end_date - DateTime  These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction (OR) an exception will be thrown. The output of the query can also be sorted. These are the list of sortable attributes:  id - String description - String enabled - Boolean paused - Boolean key_metric_id - String 

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.

apiInstance.postSitesByIDAbTestSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 

### Return type

[**AbTestSearchResult**](AbTestSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCampaignSearch"></a>
# **postSitesByIDCampaignSearch**
> CampaignSearchResult postSitesByIDCampaignSearch(bodysiteId)



Searches for campaigns.    The Campaign Search document contains a search object that allows filtering on various attributes.     The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:        campaign_id - String      description - String      enabled - Boolean      coupon_id* - String      customer_group* - String      source_code* - String      start_date - Date      end_date - Date      last_modified - Date           These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction  (OR) an exception will be thrown.   Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting  Additionally start_date, end_date and last_modified cannot be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDCampaignSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**CampaignSearchResult**](CampaignSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCartridges"></a>
# **postSitesByIDCartridges**
> CartridgePathApiResponse postSitesByIDCartridges(bodysiteId)



Add a cartridge to current cartridge path.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.CartridgePathAddRequest(); // CartridgePathAddRequest | 
let siteId = "siteId_example"; // String | ID of the site.

apiInstance.postSitesByIDCartridges(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartridgePathAddRequest**](CartridgePathAddRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 

### Return type

[**CartridgePathApiResponse**](CartridgePathApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCouponRedemptionSearch"></a>
# **postSitesByIDCouponRedemptionSearch**
> CouponRedemptionSearchResult postSitesByIDCouponRedemptionSearch(bodysiteId)



Searches for coupon redemptions.    The Coupon Redemption Search document contains a search object that allows filtering on various attributes.     The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:        code - String      coupon_id - String      customer_email - String      order_no - String     Note that only searchable attributes can be used in sorting.   If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDCouponRedemptionSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**CouponRedemptionSearchResult**](CouponRedemptionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCouponSearch"></a>
# **postSitesByIDCouponSearch**
> CouponSearchResult postSitesByIDCouponSearch(bodysiteId)



Searches for coupons.   The Coupon Search document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    coupon_id - String  description - String  type - one of {\&quot;single_code\&quot;, \&quot;multiple_codes\&quot;, \&quot;system_codes\&quot;}  enabled - boolean     Note that only searchable attributes can be used in sorting.   The stats expand value is required to return the following fields in the Coupon document:        exported_code_count      redemption_count      total_codes_count  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDCouponSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**CouponSearchResult**](CouponSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCouponsByIDMultipleCodes"></a>
# **postSitesByIDCouponsByIDMultipleCodes**
> postSitesByIDCouponsByIDMultipleCodes(siteIdcouponId, opts)



Add or delete (modify) multiple codes to/from the supplied coupon.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon to modify codes (must be multiple code coupon).
let opts = { 
  'body': new DataApi.CouponMultiCodesRequest() // CouponMultiCodesRequest | 
  '_delete': true // Boolean | 
};
apiInstance.postSitesByIDCouponsByIDMultipleCodes(siteIdcouponId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon to modify codes (must be multiple code coupon). | 
 **body** | [**CouponMultiCodesRequest**](CouponMultiCodesRequest.md)|  | [optional] 
 **_delete** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="postSitesByIDCustomerGroupSearch"></a>
# **postSitesByIDCustomerGroupSearch**
> CustomerGroupSearchResult postSitesByIDCustomerGroupSearch(bodysiteId)



Searches for customer groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  type - String Enum value[system, dynamic, static]     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The id of the site.

apiInstance.postSitesByIDCustomerGroupSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The id of the site. | 

### Return type

[**CustomerGroupSearchResult**](CustomerGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDCustomerGroupsByIDMemberSearch"></a>
# **postSitesByIDCustomerGroupsByIDMemberSearch**
> CustomerGroupMemberSearchResult postSitesByIDCustomerGroupsByIDMemberSearch(bodysiteIdid)



Searches for customer group members. For dynamic customer groups and the system groups \&quot;Everyone\&quot; and \&quot;Unregistered\&quot; no result is returned (Status Code: 204 - No Content).   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:         login - String       active - Boolean    Customer Profile:         customer_no - String       first_name - String       last_name - String       email - String       zip - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining login and customer_no above, only a conjunction is allowed (AND), whereas customer_no  and email can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The output of the query can also be sorted. These are the list of sortable attributes:    customer_no - String  login - String     If the Business manager customer search is configured to use the new Search Service, the following differences apply:        all attributes can be used for sorting (except for &#x27;active&#x27;)      searching for &#x27;zip&#x27; will only search in the customers default address      logical operators can be used without limits (but may result in degraded performance, depending on how they are combined)      new assignments might not be found immediately via the search service, and removed assignments      might also not be in effect immediately (there is a slight delay in updating the index)  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the requested members customer group.

apiInstance.postSitesByIDCustomerGroupsByIDMemberSearch(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested members customer group. | 

### Return type

[**CustomerGroupMemberSearchResult**](CustomerGroupMemberSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDGiftCertificateSearch"></a>
# **postSitesByIDGiftCertificateSearch**
> GiftCertificateSearchResult postSitesByIDGiftCertificateSearch(bodysiteId)



Searches for gift certificates.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    merchant_id - String  masked_gift_certificate_code* - String  order_no - String  sender_name - String  recipient_name - String  recipient_email - String  status - String  enabled - Boolean  message - String  description - String  creation_date - Date  currency_mnemonic* - String     * masked_gift_certificate_code, also known as just code, can only be used in a term query.  If a  four-character code is supplied, it is assumed that the search is on the unmasked portion of the code, otherwise  the full code must be matched.  Text queries are not allowed.   * currency_mnemonic can only be joined with other attributes using a conjunction (AND).   Note that only searchable attributes can be used in sorting.  The code attribute cannot be used for sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The id of the site.

apiInstance.postSitesByIDGiftCertificateSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The id of the site. | 

### Return type

[**GiftCertificateSearchResult**](GiftCertificateSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDGiftCertificates"></a>
# **postSitesByIDGiftCertificates**
> GiftCertificate postSitesByIDGiftCertificates(bodysiteId)



Creates a gift certificate using the information provided. If a gift certificate with   the same unique identifier, it will be deleted and a new one will be created.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.GiftCertificate(); // GiftCertificate | 
let siteId = "siteId_example"; // String | The id of the site.

apiInstance.postSitesByIDGiftCertificates(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GiftCertificate**](GiftCertificate.md)|  | 
 **siteId** | **String**| The id of the site. | 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDPromotionCampaignAssignmentSearch"></a>
# **postSitesByIDPromotionCampaignAssignmentSearch**
> PromotionCampaignAssignmentSearchResult postSitesByIDPromotionCampaignAssignmentSearch(bodysiteId)



Searches for promotion campaign assignments.    The PromotionCampaignAssignment Search document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:        rank - Integer      start_date - Date      end_date - Date    Campaign:        campaign_id - String    Promotion:        promotion_id - String      description - String      enabled - Boolean    Special handling:        coupon_id - String     Only fields in the same bucket can be joined using a disjunction (OR). For instance, when joining  campaign_id and rank above, only a conjunction is allowed (AND), whereas promotion_id and description can be  joined to each other using an OR because they are in the same bucket.  Special handling fields must always use  conjunctions. If the field is used in a disjunction (OR) that violates this rule, an exception will be thrown.   Expands that can be applied for the search request        promotion      campaign     Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDPromotionCampaignAssignmentSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**PromotionCampaignAssignmentSearchResult**](PromotionCampaignAssignmentSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDPromotionSearch"></a>
# **postSitesByIDPromotionSearch**
> PromotionSearchResult postSitesByIDPromotionSearch(bodysiteId)



Searches for promotions.    The SearchRequest document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. These are the searchable  attributes:    id - String  name - String  currency_code - String  exclusivity - String  enabled - Boolean    Note that only searchable attributes can be used in sorting. Additionally, the following attribute can be used to  sort:    promotion_class - String  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDPromotionSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**PromotionSearchResult**](PromotionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDSlotConfigurationCampaignAssignmentSearch"></a>
# **postSitesByIDSlotConfigurationCampaignAssignmentSearch**
> SlotConfigurationCampaignAssignmentSearchResult postSitesByIDSlotConfigurationCampaignAssignmentSearch(bodysiteId)



Searches for slotconfiguration campaign assignments.    The SlotConfigCampaignAssignment Search document contains a search object that allows filtering on various attributes.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:        rank - Integer      start_date - Date      end_date - Date    Campaign:        campaign_id - String      enabled - Boolean    Slot configuration:        slot_configuration_id - String      description - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining rank and description above, only a conjunction is allowed (AND), whereas slot_configuration_id  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   Expands that can be applied for the search request        campaign      slotConfiguration      Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDSlotConfigurationCampaignAssignmentSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**SlotConfigurationCampaignAssignmentSearchResult**](SlotConfigurationCampaignAssignmentSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDSlotConfigurationSearch"></a>
# **postSitesByIDSlotConfigurationSearch**
> SlotConfigurationSearchResult postSitesByIDSlotConfigurationSearch(bodysiteId)



Searches for slot configurations.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       configuration_id - String     default - Boolean     description - String     enabled - Boolean    Slot:       context - String     slot_id - String     Only fields in the same bucket can be joined using a disjunction (OR). For instance, when joining context and  description above, only a conjunction is allowed (AND), whereas context and slot_id can be joined to each other  using a disjunction because they are in the same bucket.  If the field is used in a disjunction (OR) that  violates this rule, an exception will be thrown.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDSlotConfigurationSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**SlotConfigurationSearchResult**](SlotConfigurationSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDSlotSearch"></a>
# **postSitesByIDSlotSearch**
> SlotSearchResult postSitesByIDSlotSearch(bodysiteId)



Searches for slots.    The query attribute specifies a complex query that can be used to narrow down the search. The set of fields that  are available to search are:    slot_id - String  description - String  context_type - String      Note that only searchable attributes can be used in sorting. \&quot;context_type\&quot; value is restricted to Global/Folder/Category.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDSlotSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**SlotSearchResult**](SlotSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDSortingRuleSearch"></a>
# **postSitesByIDSortingRuleSearch**
> SortingRuleSearchResult postSitesByIDSortingRuleSearch(bodysiteId, opts)



Searches for product sorting rules.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  creation_date - date of creation     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  creation_date - date of creation     This resource does not support expand options.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The id of the site.
let opts = { 
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.postSitesByIDSortingRuleSearch(bodysiteId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **ruleContext** | **String**|  | [optional] 

### Return type

[**SortingRuleSearchResult**](SortingRuleSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDSourceCodeGroupSearch"></a>
# **postSitesByIDSourceCodeGroupSearch**
> SourceCodeGroupSearchResult postSitesByIDSourceCodeGroupSearch(bodysiteId)



Searches for source code groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  source_code* - String   start_time - DateTime  end_time - DateTime  creation_date - DateTime  enabled - Boolean  active* - Boolean      * - These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction  (OR) an exception will be thrown.    The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  enabled - Boolean  creation_date - DateTime      Expands that can be applied for the search request    specifications - String  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The id of the site.

apiInstance.postSitesByIDSourceCodeGroupSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The id of the site. | 

### Return type

[**SourceCodeGroupSearchResult**](SourceCodeGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="postSitesByIDStoreSearch"></a>
# **postSitesByIDStoreSearch**
> StoreSearchResult postSitesByIDStoreSearch(bodysiteId)



Searches for stores.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list  of searchable attributes:    address1 - String  address2 - String  city - String  country_code - String  email - String  fax - String  id - String  inventory_id - String  latitude - double  longitude - double  name - String  phone - String  postal_code - String  state_code - String  store_hours - String  store_events - String  

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SearchRequest(); // SearchRequest | 
let siteId = "siteId_example"; // String | The site context.

apiInstance.postSitesByIDStoreSearch(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **siteId** | **String**| The site context. | 

### Return type

[**StoreSearchResult**](StoreSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDAbTestsByID"></a>
# **putSitesByIDAbTestsByID**
> AbTest putSitesByIDAbTestsByID(siteIdid)



Creates an A/B Test using the information provided. If an A/B Test with the same unique identifier exists, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.

apiInstance.putSitesByIDAbTestsByID(siteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **body** | [**AbTest**](AbTest.md)|  | [optional] 

### Return type

[**AbTest**](AbTest.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDAbTestsByIDSegmentsByID"></a>
# **putSitesByIDAbTestsByIDSegmentsByID**
> AbTestSegment putSitesByIDAbTestsByIDSegmentsByID(siteIdidsegmentId)



Creates an A/B Test segment using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
let id = "id_example"; // String | The id of the requested A/B Test.
let segmentId = "segmentId_example"; // String | The id of the segment in the test.

apiInstance.putSitesByIDAbTestsByIDSegmentsByID(siteIdidsegmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **id** | **String**| The id of the requested A/B Test. | 
 **segmentId** | **String**| The id of the segment in the test. | 
 **body** | [**AbTestSegment**](AbTestSegment.md)|  | [optional] 

### Return type

[**AbTestSegment**](AbTestSegment.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID"></a>
# **putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID**
> putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId)



Action to bind a single promotion to a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the abTest and promotion.
let abTestId = "abTestId_example"; // String | The ID of the abTest which contains the segment.
let segmentId = "segmentId_example"; // String | The ID of the segment to to which the promotion is to be assigned.
let promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the abTest.

apiInstance.putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the abTest and promotion. | 
 **abTestId** | **String**| The ID of the abTest which contains the segment. | 
 **segmentId** | **String**| The ID of the segment to to which the promotion is to be assigned. | 
 **promotionId** | **String**| The ID of the promotion that is to be assigned to the abTest. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID"></a>
# **putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID**
> putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts)



Action to bind a slot configuration to a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let abTestId = "abTestId_example"; // String | The id of the abTest
let segmentId = "segmentId_example"; // String | 
let siteId = "siteId_example"; // String | The id of the site
let slotId = "slotId_example"; // String | The of the slot
let slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **abTestId** | **String**| The id of the abTest | 
 **segmentId** | **String**|  | 
 **siteId** | **String**| The id of the site | 
 **slotId** | **String**| The of the slot | 
 **slotConfigId** | **String**| The id of the slot configuration | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID"></a>
# **putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID**
> putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts)



Action to bind a single sorting rule to a given abTest.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the abTest, sorting rule and category.
let abTestId = "abTestId_example"; // String | The ID of the abTest to which the sorting rule is to be assigned.
let segmentId = "segmentId_example"; // String | 
let sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the abTest.
let categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
let opts = { 
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the abTest, sorting rule and category. | 
 **abTestId** | **String**| The ID of the abTest to which the sorting rule is to be assigned. | 
 **segmentId** | **String**|  | 
 **sortingRuleId** | **String**| The ID of sorting rule that is to be assigned to the abTest. | 
 **categoryId** | **String**| The ID of the category that is associated with the sorting rule. | 
 **ruleContext** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByID"></a>
# **putSitesByIDCampaignsByID**
> Campaign putSitesByIDCampaignsByID(bodysiteIdcampaignId)



Creates a campaign using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Campaign(); // Campaign | 
let siteId = "siteId_example"; // String | The site context.
let campaignId = "campaignId_example"; // String | The id of the campaign to create.

apiInstance.putSitesByIDCampaignsByID(bodysiteIdcampaignId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Campaign**](Campaign.md)|  | 
 **siteId** | **String**| The site context. | 
 **campaignId** | **String**| The id of the campaign to create. | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDCampaignsByIDCouponsByID"></a>
# **putSitesByIDCampaignsByIDCouponsByID**
> putSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId)



Action to bind a single coupon to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be bound to
let couponId = "couponId_example"; // String | The coupon ID to bind to a campaign

apiInstance.putSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that coupons are to be bound to | 
 **couponId** | **String**| The coupon ID to bind to a campaign | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByIDCustomerGroupsByID"></a>
# **putSitesByIDCampaignsByIDCustomerGroupsByID**
> putSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId)



Action to bind a single customer group to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be bound to
let customerGroupId = "customerGroupId_example"; // String | The customer group ID to bind to a campaign

apiInstance.putSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that coupons are to be bound to | 
 **customerGroupId** | **String**| The customer group ID to bind to a campaign | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByIDPromotionsByID"></a>
# **putSitesByIDCampaignsByIDPromotionsByID**
> putSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId)



Action to bind a single promotion to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the campaign and promotion.
let campaignId = "campaignId_example"; // String | The ID of the campaign to which the promotion is to be assigned.
let promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the campaign.

apiInstance.putSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the campaign and promotion. | 
 **campaignId** | **String**| The ID of the campaign to which the promotion is to be assigned. | 
 **promotionId** | **String**| The ID of the promotion that is to be assigned to the campaign. | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByIDSlotConfigurationsByIDByID"></a>
# **putSitesByIDCampaignsByIDSlotConfigurationsByIDByID**
> putSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignIdsiteIdslotIdslotConfigId, opts)



Action to bind a slot configuration to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let campaignId = "campaignId_example"; // String | The ID of the campaign.
let siteId = "siteId_example"; // String | The ID of the site.
let slotId = "slotId_example"; // String | The ID of the slot.
let slotConfigId = "slotConfigId_example"; // String | The ID of the slot configuration.
let opts = { 
  'body': new DataApi.SlotConfigurationCampaignAssignment() // SlotConfigurationCampaignAssignment | 
  'context': "context_example" // String | 
};
apiInstance.putSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignIdsiteIdslotIdslotConfigId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | **String**| The ID of the campaign. | 
 **siteId** | **String**| The ID of the site. | 
 **slotId** | **String**| The ID of the slot. | 
 **slotConfigId** | **String**| The ID of the slot configuration. | 
 **body** | [**SlotConfigurationCampaignAssignment**](SlotConfigurationCampaignAssignment.md)|  | [optional] 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByIDSortingRulesByIDByID"></a>
# **putSitesByIDCampaignsByIDSortingRulesByIDByID**
> putSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts)



Action to bind a single sorting rule to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The ID of the site that contains the campaign, sorting rule and category.
let campaignId = "campaignId_example"; // String | The ID of the campaign to which the sorting rule is to be assigned.
let sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the campaign.
let categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
let opts = { 
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.putSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The ID of the site that contains the campaign, sorting rule and category. | 
 **campaignId** | **String**| The ID of the campaign to which the sorting rule is to be assigned. | 
 **sortingRuleId** | **String**| The ID of sorting rule that is to be assigned to the campaign. | 
 **categoryId** | **String**| The ID of the category that is associated with the sorting rule. | 
 **ruleContext** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCampaignsByIDSourceCodeGroupsByID"></a>
# **putSitesByIDCampaignsByIDSourceCodeGroupsByID**
> putSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId)



Action to bind a single source code group to a given campaign.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | 
let campaignId = "campaignId_example"; // String | The campaign ID that source code group are to be bound to
let sourceCodeGroupId = "sourceCodeGroupId_example"; // String | The source code group ID to bind to a campaign

apiInstance.putSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**|  | 
 **campaignId** | **String**| The campaign ID that source code group are to be bound to | 
 **sourceCodeGroupId** | **String**| The source code group ID to bind to a campaign | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="putSitesByIDCartridges"></a>
# **putSitesByIDCartridges**
> CartridgePathApiResponse putSitesByIDCartridges(bodysiteId)



Overwrite cartridge path.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.CartridgePathCreateRequest(); // CartridgePathCreateRequest | 
let siteId = "siteId_example"; // String | ID of the site.

apiInstance.putSitesByIDCartridges(bodysiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CartridgePathCreateRequest**](CartridgePathCreateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 

### Return type

[**CartridgePathApiResponse**](CartridgePathApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDCouponsByID"></a>
# **putSitesByIDCouponsByID**
> Coupon putSitesByIDCouponsByID(bodysiteIdcouponId)



Creates a coupon using the information provided. If a coupon exists with the same unique identifier,  the coupon is replaced completely.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Coupon(); // Coupon | 
let siteId = "siteId_example"; // String | The site context.
let couponId = "couponId_example"; // String | The id of the coupon to create.

apiInstance.putSitesByIDCouponsByID(bodysiteIdcouponId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Coupon**](Coupon.md)|  | 
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon to create. | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDCustomObjectsByIDByID"></a>
# **putSitesByIDCustomObjectsByIDByID**
> CustomObject putSitesByIDCustomObjectsByIDByID(siteIdobjectTypekey)



Creates a site specific Custom Object from request body for the specified site. Note that an existing Custom Object for the site, with the same key, will be overwritten by this action.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | the ID of the site
let objectType = "objectType_example"; // String | the ID of the object type
let key = "key_example"; // String | the key attribute value of the Custom Object

apiInstance.putSitesByIDCustomObjectsByIDByID(siteIdobjectTypekey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| the ID of the site | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 
 **body** | [**CustomObject**](CustomObject.md)|  | [optional] 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDCustomerGroupsByID"></a>
# **putSitesByIDCustomerGroupsByID**
> CustomerGroup putSitesByIDCustomerGroupsByID(bodysiteIdid)



Creates a customer group using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.CustomerGroup(); // CustomerGroup | 
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the customer group to create.

apiInstance.putSitesByIDCustomerGroupsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CustomerGroup**](CustomerGroup.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the customer group to create. | 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDCustomerGroupsByIDMembersByID"></a>
# **putSitesByIDCustomerGroupsByIDMembersByID**
> CustomerGroupMember putSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to add customer to (static) customer group.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the customer group.
let customerNo = "customerNo_example"; // String | The customer number of the customer to add to the group.
let opts = { 
  'select': "select_example" // String | 
};
apiInstance.putSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the customer group. | 
 **customerNo** | **String**| The customer number of the customer to add to the group. | 
 **select** | **String**|  | [optional] 

### Return type

[**CustomerGroupMember**](CustomerGroupMember.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDOrdersByIDConfirmationStatus"></a>
# **putSitesByIDOrdersByIDConfirmationStatus**
> putSitesByIDOrdersByIDConfirmationStatus(bodysiteIdorderNo)



Updates the order confirmation status.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderConfirmationStatusUpdateRequest(); // OrderConfirmationStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site.
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDConfirmationStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderConfirmationStatusUpdateRequest**](OrderConfirmationStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDExportStatus"></a>
# **putSitesByIDOrdersByIDExportStatus**
> putSitesByIDOrdersByIDExportStatus(bodysiteIdorderNo)



Updates the order export status. Setting the status to EXPORTED will also trigger the finalization of on-order inventory transactions for this order, meaning that all inventory transactions with type on-order will be moved into final inventory transactions. This is only relevant when on-order inventory is turned on for the inventory list ordered products are in.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderExportStatusUpdateRequest(); // OrderExportStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site.
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDExportStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderExportStatusUpdateRequest**](OrderExportStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDExternalStatus"></a>
# **putSitesByIDOrdersByIDExternalStatus**
> putSitesByIDOrdersByIDExternalStatus(bodysiteIdorderNo)



Updates the order external status.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderExternalStatusUpdateRequest(); // OrderExternalStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site.
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDExternalStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderExternalStatusUpdateRequest**](OrderExternalStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDPaymentStatus"></a>
# **putSitesByIDOrdersByIDPaymentStatus**
> putSitesByIDOrdersByIDPaymentStatus(bodysiteIdorderNo)



Updates the order payment status.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderPaymentStatusUpdateRequest(); // OrderPaymentStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site.
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDPaymentStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderPaymentStatusUpdateRequest**](OrderPaymentStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDShipmentsByIDShippingAddress"></a>
# **putSitesByIDOrdersByIDShipmentsByIDShippingAddress**
> putSitesByIDOrdersByIDShipmentsByIDShippingAddress(bodysiteIdorderNoshipmentId)



Updates (create or replace) the order shipment address.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.ShippingAddressUpdateRequest(); // ShippingAddressUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site
let orderNo = "orderNo_example"; // String | The order number
let shipmentId = "shipmentId_example"; // String | ID of the shipment

apiInstance.putSitesByIDOrdersByIDShipmentsByIDShippingAddress(bodysiteIdorderNoshipmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ShippingAddressUpdateRequest**](ShippingAddressUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **shipmentId** | **String**| ID of the shipment | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDShippingStatus"></a>
# **putSitesByIDOrdersByIDShippingStatus**
> putSitesByIDOrdersByIDShippingStatus(bodysiteIdorderNo)



Updates the order shipping status.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderShippingStatusUpdateRequest(); // OrderShippingStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site.
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDShippingStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderShippingStatusUpdateRequest**](OrderShippingStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDOrdersByIDStatus"></a>
# **putSitesByIDOrdersByIDStatus**
> putSitesByIDOrdersByIDStatus(bodysiteIdorderNo)



Updates the order status by using the corresponding methods (fail, undoFail, place, cancel and undoCancel) from the dw.order.OrderMgr. Orders which are not in status CREATED or FAILED can not be set back.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.OrderStatusUpdateRequest(); // OrderStatusUpdateRequest | 
let siteId = "siteId_example"; // String | ID of the site
let orderNo = "orderNo_example"; // String | The order number

apiInstance.putSitesByIDOrdersByIDStatus(bodysiteIdorderNo).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderStatusUpdateRequest**](OrderStatusUpdateRequest.md)|  | 
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: Not defined

<a name="putSitesByIDPromotionsByID"></a>
# **putSitesByIDPromotionsByID**
> Promotion putSitesByIDPromotionsByID(bodysiteIdid)



Creates a promotion using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Promotion(); // Promotion | 
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the promotion to create.

apiInstance.putSitesByIDPromotionsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Promotion**](Promotion.md)|  | 
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the promotion to create. | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDSlotsByIDSlotConfigurationsByID"></a>
# **putSitesByIDSlotsByIDSlotConfigurationsByID**
> SlotConfiguration putSitesByIDSlotsByIDSlotConfigurationsByID(bodysiteIdslotIdconfigurationId, opts)



Creates a new configuration for an existing slot. If a slot configuration  exists with the specified configuration_id, slot_id, and context, the existing  slot configuration is overwritten.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SlotConfiguration(); // SlotConfiguration | 
let siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
let slotId = "slotId_example"; // String | The id of the slot.
let configurationId = "configurationId_example"; // String | The id of the slot configuration.
let opts = { 
  'context': "context_example" // String | 
};
apiInstance.putSitesByIDSlotsByIDSlotConfigurationsByID(bodysiteIdslotIdconfigurationId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SlotConfiguration**](SlotConfiguration.md)|  | 
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **context** | **String**|  | [optional] 

### Return type

[**SlotConfiguration**](SlotConfiguration.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDSourceCodeGroupsByID"></a>
# **putSitesByIDSourceCodeGroupsByID**
> SourceCodeGroup putSitesByIDSourceCodeGroupsByID(bodysiteIdid)



Creates a source code group using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.SourceCodeGroup(); // SourceCodeGroup | 
let siteId = "siteId_example"; // String | The id of the site.
let id = "id_example"; // String | The id of the source code group to create.

apiInstance.putSitesByIDSourceCodeGroupsByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SourceCodeGroup**](SourceCodeGroup.md)|  | 
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the source code group to create. | 

### Return type

[**SourceCodeGroup**](SourceCodeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

<a name="putSitesByIDStoresByID"></a>
# **putSitesByIDStoresByID**
> Store putSitesByIDStoresByID(bodysiteIdid)



Creates a store using the information provided.

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.SitesApi();
let body = new DataApi.Store(); // Store | 
let siteId = "siteId_example"; // String | The site context.
let id = "id_example"; // String | The id of the store to create.

apiInstance.putSitesByIDStoresByID(bodysiteIdid).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Store**](Store.md)|  | 
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the store to create. | 

### Return type

[**Store**](Store.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

