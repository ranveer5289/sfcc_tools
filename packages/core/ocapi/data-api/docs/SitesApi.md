# DataApi.SitesApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

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



## deleteSitesByIDAbTestsByID

> deleteSitesByIDAbTestsByID(siteId, id)



Deletes the A/B Test by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
apiInstance.deleteSitesByIDAbTestsByID(siteId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDAbTestsByIDSegmentsByID

> deleteSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId)



Deletes the A/B Test Segment by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var segmentId = "segmentId_example"; // String | The id of the segment in the test.
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID

> deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId)



Action to unbind one promotions from a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var abTestId = "abTestId_example"; // String | The abTest ID that promotions are to be unbound from
var segmentId = "segmentId_example"; // String | the segment to bind to
var promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the abTest.
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID

> deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts)



Action to unbind a slot configuration from a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var abTestId = "abTestId_example"; // String | The id of the abTest
var segmentId = "segmentId_example"; // String | 
var siteId = "siteId_example"; // String | The id of the site
var slotId = "slotId_example"; // String | The of the slot
var slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
var opts = {
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID

> deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts)



Action to unbind a single sorting rule from a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the abTest, sorting rule and category.
var abTestId = "abTestId_example"; // String | The ID of the abTest to which the sorting rule is to be assigned.
var segmentId = "segmentId_example"; // String | 
var sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the abTest.
var categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
var opts = {
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.deleteSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByID

> deleteSitesByIDCampaignsByID(siteId, campaignId)



Deletes the campaign by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var campaignId = "campaignId_example"; // String | A campaign id to remove
apiInstance.deleteSitesByIDCampaignsByID(siteId, campaignId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDCouponsByID

> deleteSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId, opts)



Action to unbind a coupon from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be unbound from
var couponId = "couponId_example"; // String | The coupon ID to unbind from a campaign
var opts = {
  'removeInPCA': "removeInPCA_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDCustomerGroupsByID

> deleteSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId)



Action to unbind a customer group from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be unbound from
var customerGroupId = "customerGroupId_example"; // String | The customer group ID to unbind from a campaign
apiInstance.deleteSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDPromotionsByID

> deleteSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId)



Action to unbind a single promotion from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the campaign and promotion.
var campaignId = "campaignId_example"; // String | The ID of the campaign to which the promotion is to be assigned.
var promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the campaign.
apiInstance.deleteSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID

> deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts)



Action to unbind a slot configuration from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var campaignId = "campaignId_example"; // String | The id of the campaign
var siteId = "siteId_example"; // String | The id of the site
var slotId = "slotId_example"; // String | The of the slot
var slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
var opts = {
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDSortingRulesByIDByID

> deleteSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts)



Action to unbind a single sorting rule from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the campaign, sorting rule and category.
var campaignId = "campaignId_example"; // String | The ID of the campaign to which the sorting rule is to be assigned.
var sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the campaign.
var categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
var opts = {
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.deleteSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCampaignsByIDSourceCodeGroupsByID

> deleteSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId)



Action to unbind a source code group from a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that source code groups are to be unbound from
var sourceCodeGroupId = "sourceCodeGroupId_example"; // String | The source code group ID to unbind from a campaign
apiInstance.deleteSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCartridgesByID

> CartridgePathApiResponse deleteSitesByIDCartridgesByID(siteId, cartridgeName)



Remove a cartridge from cartridge path.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var cartridgeName = "cartridgeName_example"; // String | request body
apiInstance.deleteSitesByIDCartridgesByID(siteId, cartridgeName).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## deleteSitesByIDCouponsByID

> deleteSitesByIDCouponsByID(siteId, couponId)



Delete a coupon by id.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | Id of the coupon to delete from the site.
apiInstance.deleteSitesByIDCouponsByID(siteId, couponId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCustomObjectsByIDByID

> deleteSitesByIDCustomObjectsByIDByID(siteId, objectType, key)



Deletes a site specific Custom Object. If the Custom Object does not exist, this will do nothing. Note that the customization scripts are only called, if the Custom Object does exist.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | the ID of the site
var objectType = "objectType_example"; // String | the ID of the object type
var key = "key_example"; // String | the key attribute value of the Custom Object
apiInstance.deleteSitesByIDCustomObjectsByIDByID(siteId, objectType, key).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDCustomerGroupsByID

> CustomerGroup deleteSitesByIDCustomerGroupsByID(siteId, id, opts)



Triggers customer group deletion by ID. Be aware that the deletion happens via asynchronous batch process  which is the reason the deletion itself is not necessarily finished after the call to this resource returned. The   customer group that is in deletion will be provided in the response.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | One customer group id to remove
var opts = {
  'select': "select_example" // String | 
};
apiInstance.deleteSitesByIDCustomerGroupsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## deleteSitesByIDCustomerGroupsByIDMembersByID

> deleteSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to remove a customer from a (static) customer group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the customer group.
var customerNo = "customerNo_example"; // String | The customer number of the customer to remove from the group.
var opts = {
  'select': "select_example" // String | 
};
apiInstance.deleteSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDGiftCertificatesByID

> deleteSitesByIDGiftCertificatesByID(siteId, merchantId)



Deletes the gift certificate by merchant ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var merchantId = "merchantId_example"; // String | One gift certificate merchant id to remove
apiInstance.deleteSitesByIDGiftCertificatesByID(siteId, merchantId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDPromotionsByID

> deleteSitesByIDPromotionsByID(siteId, id)



Deletes the promotion by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | Promotion id to remove
apiInstance.deleteSitesByIDPromotionsByID(siteId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDSlotsByIDSlotConfigurationsByID

> deleteSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts)



Removes a configuration for slot in a given context from a site.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
var slotId = "slotId_example"; // String | The id of the slot.
var configurationId = "configurationId_example"; // String | The id of the slot configuration.
var opts = {
  'context': "context_example" // String | 
};
apiInstance.deleteSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDSourceCodeGroupsByID

> deleteSitesByIDSourceCodeGroupsByID(siteId, id)



Deletes the source code group by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | One source code group id to remove
apiInstance.deleteSitesByIDSourceCodeGroupsByID(siteId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## deleteSitesByIDStoresByID

> deleteSitesByIDStoresByID(siteId, id)



Deletes the store by ID

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | One store id to remove
apiInstance.deleteSitesByIDStoresByID(siteId, id).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## getSites

> Sites getSites(opts)



Action to get all existing sites.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var opts = {
  'start': 56, // Number | Optional start index for retrieving the items from a given index (default 0).
  'count': 56, // Number | Optional count for retrieving only a subset of the items (default is 25).
  'select': "select_example" // String | The property selector.
};
apiInstance.getSites(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByID

> Site getSitesByID(siteId)



Action to read an existing site.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | the id of the site
apiInstance.getSitesByID(siteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDAbTests

> AbTests getSitesByIDAbTests(siteId, opts)



Action to get all the A/B tests with searching.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDAbTests(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDAbTestsByID

> AbTest getSitesByIDAbTestsByID(siteId, id, opts)



Action to get an A/B Test information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDAbTestsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDAbTestsByIDSegmentsByID

> AbTestSegment getSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts)



Gets an A/B Test segment using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var segmentId = "segmentId_example"; // String | The id of the segment in the test.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDAiRecommenderNames

> RecommendersResult getSitesByIDAiRecommenderNames(siteId)



Get a list of available AI recommenders. Recommenders are configured in the Einstein configurator and are required with AI recommendation API requests.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | Site ID to get a list of recommenders for.
apiInstance.getSitesByIDAiRecommenderNames(siteId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCampaignsByID

> Campaign getSitesByIDCampaignsByID(siteId, campaignId)



Action to get campaign information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site the requested campaign belongs to.
var campaignId = "campaignId_example"; // String | The id of the requested campaign.
apiInstance.getSitesByIDCampaignsByID(siteId, campaignId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCoupons

> Coupons getSitesByIDCoupons(siteId, opts)



Action to get all the coupons with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDCoupons(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCouponsByID

> Coupon getSitesByIDCouponsByID(siteId, couponId, opts)



Action to get coupon information.   The following fields are returned in the Coupon document when specifying the stats expand:        exported_code_count      redemption_count      total_codes_count       If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the requested coupon.
var opts = {
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDCouponsByID(siteId, couponId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCouponsByIDCampaigns

> Campaigns getSitesByIDCouponsByIDCampaigns(siteId, couponId, opts)



Get the campaigns that have a coupon assigned to them either directly or through promotions

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon that is assigned to campaigns directly or through promotions.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCampaigns(siteId, couponId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCouponsByIDCampaignsByIDPromotions

> Promotions getSitesByIDCouponsByIDCampaignsByIDPromotions(siteId, couponId, campaignId, opts)



Get the promotions for a campaign that have a coupon assigned to them either directly or through campaigns.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon that is assigned to promotions directly or through campaigns.
var campaignId = "campaignId_example"; // String | The id of the campaign that we want to restrict the set of promotions for.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCampaignsByIDPromotions(siteId, couponId, campaignId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCouponsByIDCodes

> CouponCodes getSitesByIDCouponsByIDCodes(siteId, couponId, opts)



Get the coupon codes for the given coupon.   If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon from which to delete codes (must be a multiple code coupon).
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDCodes(siteId, couponId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCouponsByIDPromotions

> Promotions getSitesByIDCouponsByIDPromotions(siteId, couponId, opts)



Get the promotions that have a coupon assigned to them either directly or through campaigns.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon that is assigned to promotions directly or through campaigns.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCouponsByIDPromotions(siteId, couponId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCustomObjectsByIDByID

> CustomObject getSitesByIDCustomObjectsByIDByID(siteId, objectType, key)



Reads a site specific Custom Object with a given object type ID and a value for the key attribute of the object which represents its unique identifier.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | the ID of the site
var objectType = "objectType_example"; // String | the ID of the object type
var key = "key_example"; // String | the key attribute value of the Custom Object
apiInstance.getSitesByIDCustomObjectsByIDByID(siteId, objectType, key).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCustomerGroups

> CustomerGroups getSitesByIDCustomerGroups(siteId, opts)



Action to get all the customer groups with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroups(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCustomerGroupsByID

> CustomerGroup getSitesByIDCustomerGroupsByID(siteId, id, opts)



Action to get customer group information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested customer group.
var opts = {
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCustomerGroupsByIDMembers

> CustomerGroupMembers getSitesByIDCustomerGroupsByIDMembers(siteId, id, opts)



Action to get all the customer group members with no filtering. For dynamic customer groups and the system groups \&quot;Everyone\&quot; and \&quot;Unregistered\&quot; no result is returned (Status Code: 204 - No Content).

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var id = "id_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByIDMembers(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDCustomerGroupsByIDMembersByID

> CustomerGroupMember getSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to get customer group member information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested members customer group.
var customerNo = "customerNo_example"; // String | The customer number of the requested customer group member.
var opts = {
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDGiftCertificates

> GiftCertificates getSitesByIDGiftCertificates(siteId, opts)



Action to get all the gift certificates with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDGiftCertificates(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDGiftCertificatesByID

> GiftCertificate getSitesByIDGiftCertificatesByID(siteId, merchantId)



Action to get gift certificate information using merchant ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var merchantId = "merchantId_example"; // String | The merchant id of the requested gift certificate.
apiInstance.getSitesByIDGiftCertificatesByID(siteId, merchantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDLocaleInfoLocales

> LocaleResult getSitesByIDLocaleInfoLocales(siteId, opts)



Action to get the set of locales with the system given a site.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | Only locales specified for the site are returned
var opts = {
  'includeAll': true, // Boolean | 
  'id': "id_example", // String | 
  'select': "select_example", // String | 
  'start': 56, // Number | 
  'count': 56 // Number | 
};
apiInstance.getSitesByIDLocaleInfoLocales(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDPromotionsByID

> Promotion getSitesByIDPromotionsByID(siteId, id)



Action to get promotion information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the requested promotion.
apiInstance.getSitesByIDPromotionsByID(siteId, id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSitePreferencesPreferenceGroupsByIDByID

> SitePreferences getSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, opts)



For the specified site and instance, read the custom preferences in the preference group.  Specify &#39;current&#39; to retrieve the preferences for the instance on which this call is being made. The system will recognize its type.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production,current}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var opts = {
  'maskPasswords': true // Boolean | 
};
apiInstance.getSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSlotConfigurations

> SlotConfigurations getSitesByIDSlotConfigurations(siteId, opts)



Action to get all the slot configurations with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlotConfigurations(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSlots

> Slots getSitesByIDSlots(siteId, opts)



Action to get all the slots with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlots(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSlotsByIDByID

> Slot getSitesByIDSlotsByIDByID(siteId, slotId, contextType, opts)



Action to get slot information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var slotId = "slotId_example"; // String | The id of the requested slot.
var contextType = "contextType_example"; // String | The context type (folder, global, category).
var opts = {
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDSlotsByIDByID(siteId, slotId, contextType, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSlotsByIDSlotConfigurationsByID

> SlotConfiguration getSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts)



Action to read an existing slot configuration.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
var slotId = "slotId_example"; // String | The id of the slot.
var configurationId = "configurationId_example"; // String | The id of the slot configuration.
var opts = {
  'context': "context_example" // String | 
};
apiInstance.getSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSourceCodeGroups

> SourceCodeGroups getSitesByIDSourceCodeGroups(siteId, opts)



Action to get all the source code groups with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example", // String | 
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDSourceCodeGroups(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDSourceCodeGroupsByID

> SourceCodeGroup getSitesByIDSourceCodeGroupsByID(siteId, id, opts)



Action to retrieve source code group information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested source code group.
var opts = {
  'expand': ["null"] // [String] | 
};
apiInstance.getSitesByIDSourceCodeGroupsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDStores

> Stores getSitesByIDStores(siteId, opts)



Action to get all the stores with no filtering.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var opts = {
  'start': 56, // Number | 
  'count': 56, // Number | 
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDStores(siteId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## getSitesByIDStoresByID

> Store getSitesByIDStoresByID(siteId, id, opts)



Action to get store information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the requested store.
var opts = {
  'select': "select_example" // String | 
};
apiInstance.getSitesByIDStoresByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## patchSitesByIDAbTestsByID

> AbTest patchSitesByIDAbTestsByID(siteId, id, opts)



Updates the A/B Test with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var opts = {
  'body': new DataApi.AbTest() // AbTest | 
};
apiInstance.patchSitesByIDAbTestsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## patchSitesByIDAbTestsByIDSegmentsByID

> AbTestSegment patchSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts)



Updates the A/B Test segment with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var segmentId = "segmentId_example"; // String | The id of the segment in the test.
var opts = {
  'body': new DataApi.AbTestSegment() // AbTestSegment | 
};
apiInstance.patchSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## patchSitesByIDCampaignsByID

> Campaign patchSitesByIDCampaignsByID(siteId, campaignId, body)



Updates the campaign with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var campaignId = "campaignId_example"; // String | The id of the requested campaign.
var body = new DataApi.Campaign(); // Campaign | 
apiInstance.patchSitesByIDCampaignsByID(siteId, campaignId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **campaignId** | **String**| The id of the requested campaign. | 
 **body** | [**Campaign**](Campaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID

> patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, body, opts)



Action to update the assignment of slot configuration to a campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var campaignId = "campaignId_example"; // String | The ID of the campaign.
var siteId = "siteId_example"; // String | The ID of the site.
var slotId = "slotId_example"; // String | The ID of the slot.
var slotConfigId = "slotConfigId_example"; // String | The ID of the slot configuration.
var body = new DataApi.SlotConfigurationCampaignAssignment(); // SlotConfigurationCampaignAssignment | 
var opts = {
  'context': "context_example" // String | 
};
apiInstance.patchSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, body, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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
 **body** | [**SlotConfigurationCampaignAssignment**](SlotConfigurationCampaignAssignment.md)|  | 
 **context** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## patchSitesByIDCouponsByID

> Coupon patchSitesByIDCouponsByID(siteId, couponId, body)



Updates the coupon with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the requested coupon.
var body = new DataApi.Coupon(); // Coupon | 
apiInstance.patchSitesByIDCouponsByID(siteId, couponId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the requested coupon. | 
 **body** | [**Coupon**](Coupon.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDCustomObjectsByIDByID

> CustomObject patchSitesByIDCustomObjectsByIDByID(siteId, objectType, key, body)



Updates a site specific Custom Object with information from request body. Note that only mentioned attributes will be updated and the key attribute is ignored. All other attributes will be left unattended.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | the ID of the site
var objectType = "objectType_example"; // String | the ID of the object type
var key = "key_example"; // String | the key attribute value of the Custom Object
var body = new DataApi.CustomObject(); // CustomObject | 
apiInstance.patchSitesByIDCustomObjectsByIDByID(siteId, objectType, key, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| the ID of the site | 
 **objectType** | **String**| the ID of the object type | 
 **key** | **String**| the key attribute value of the Custom Object | 
 **body** | [**CustomObject**](CustomObject.md)|  | 

### Return type

[**CustomObject**](CustomObject.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDCustomerGroupsByID

> CustomerGroup patchSitesByIDCustomerGroupsByID(siteId, id, body)



Updates the customer group with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested customer group.
var body = new DataApi.CustomerGroup(); // CustomerGroup | 
apiInstance.patchSitesByIDCustomerGroupsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested customer group. | 
 **body** | [**CustomerGroup**](CustomerGroup.md)|  | 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDGiftCertificatesByID

> GiftCertificate patchSitesByIDGiftCertificatesByID(siteId, merchantId, body)



Updates the gift certificate with the specified information using merchant ID.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var merchantId = "merchantId_example"; // String | The merchant id of the requested gift certificate.
var body = new DataApi.GiftCertificate(); // GiftCertificate | 
apiInstance.patchSitesByIDGiftCertificatesByID(siteId, merchantId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **merchantId** | **String**| The merchant id of the requested gift certificate. | 
 **body** | [**GiftCertificate**](GiftCertificate.md)|  | 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDOrdersByID

> patchSitesByIDOrdersByID(siteId, orderNo, body)



Updates the order.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site
var orderNo = "orderNo_example"; // String | The order number
var body = null; // Object | 
apiInstance.patchSitesByIDOrdersByID(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## patchSitesByIDOrdersByIDPaymentInstrumentsByID

> patchSitesByIDOrdersByIDPaymentInstrumentsByID(siteId, orderNo, paymentInstrumentId, body)



Updates the payment instrument of an order.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site
var orderNo = "orderNo_example"; // String | The order number
var paymentInstrumentId = "paymentInstrumentId_example"; // String | ID of the payment instrument
var body = null; // Object | 
apiInstance.patchSitesByIDOrdersByIDPaymentInstrumentsByID(siteId, orderNo, paymentInstrumentId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **paymentInstrumentId** | **String**| ID of the payment instrument | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction

> patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction(siteId, orderNo, paymentInstrumentId, body)



Updates the transaction of an order payment instrument.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site
var orderNo = "orderNo_example"; // String | The order number
var paymentInstrumentId = "paymentInstrumentId_example"; // String | ID of the payment instrument
var body = null; // Object | 
apiInstance.patchSitesByIDOrdersByIDPaymentInstrumentsByIDTransaction(siteId, orderNo, paymentInstrumentId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **paymentInstrumentId** | **String**| ID of the payment instrument | 
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## patchSitesByIDPromotionsByID

> Promotion patchSitesByIDPromotionsByID(siteId, id, body)



Updates the promotion with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the requested promotion.
var body = new DataApi.Promotion(); // Promotion | 
apiInstance.patchSitesByIDPromotionsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested promotion. | 
 **body** | [**Promotion**](Promotion.md)|  | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDSitePreferencesPreferenceGroupsByIDByID

> SitePreferences patchSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, body, opts)



For the specified site and instance, update one or more custom preferences in the preference group.  Preferences of type password cannot be set to \&quot;************\&quot; since it is a reserved value.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var instanceType = "instanceType_example"; // String | One of {staging,development,sandbox,production}.
var groupId = "groupId_example"; // String | The ID of the preference group.
var body = new DataApi.SitePreferences(); // SitePreferences | 
var opts = {
  'maskPasswords': true // Boolean | 
};
apiInstance.patchSitesByIDSitePreferencesPreferenceGroupsByIDByID(siteId, instanceType, groupId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **instanceType** | **String**| One of {staging,development,sandbox,production}. | 
 **groupId** | **String**| The ID of the preference group. | 
 **body** | [**SitePreferences**](SitePreferences.md)|  | 
 **maskPasswords** | **Boolean**|  | [optional] 

### Return type

[**SitePreferences**](SitePreferences.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDSlotsByIDSlotConfigurationsByID

> SlotConfiguration patchSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, body, opts)



Updates an existing slot configuration. This action ignores the slot_id and  the context information in the input document. Note that this operation will  not touch any relational properties, which means, that e.g. the rank on a specific  campaign assignment will not be changed, when the rank for the slot configuration  itself is updated.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
var slotId = "slotId_example"; // String | The id of the slot.
var configurationId = "configurationId_example"; // String | The id of the slot configuration.
var body = new DataApi.SlotConfiguration(); // SlotConfiguration | 
var opts = {
  'context': "context_example" // String | 
};
apiInstance.patchSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **body** | [**SlotConfiguration**](SlotConfiguration.md)|  | 
 **context** | **String**|  | [optional] 

### Return type

[**SlotConfiguration**](SlotConfiguration.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDSourceCodeGroupsByID

> SourceCodeGroup patchSitesByIDSourceCodeGroupsByID(siteId, id, body)



Updates the source code group with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested source code group.
var body = new DataApi.SourceCodeGroup(); // SourceCodeGroup | 
apiInstance.patchSitesByIDSourceCodeGroupsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested source code group. | 
 **body** | [**SourceCodeGroup**](SourceCodeGroup.md)|  | 

### Return type

[**SourceCodeGroup**](SourceCodeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## patchSitesByIDStoresByID

> Store patchSitesByIDStoresByID(siteId, id, body)



Updates the store with the specified information.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the requested store.
var body = new DataApi.Store(); // Store | 
apiInstance.patchSitesByIDStoresByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the requested store. | 
 **body** | [**Store**](Store.md)|  | 

### Return type

[**Store**](Store.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDAbTestSearch

> AbTestSearchResult postSitesByIDAbTestSearch(siteId, body)



Searches for A/B Tests. The query attribute specifies a complex query that can be used to narrow down the search. This is the list of searchable attributes:  id - String description - String enabled - Boolean paused - Boolean key_metric_id - String email_addresses - String tags- String expiration_type - String enum[session, never] start_date - DateTime end_date - DateTime  These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction (OR) an exception will be thrown. The output of the query can also be sorted. These are the list of sortable attributes:  id - String description - String enabled - Boolean paused - Boolean key_metric_id - String 

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDAbTestSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site that the A/B tests are contained within. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**AbTestSearchResult**](AbTestSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCampaignSearch

> CampaignSearchResult postSitesByIDCampaignSearch(siteId, body)



Searches for campaigns.    The Campaign Search document contains a search object that allows filtering on various attributes.     The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:        campaign_id - String      description - String      enabled - Boolean      coupon_id* - String      customer_group* - String      source_code* - String      start_date - Date      end_date - Date      last_modified - Date           These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction  (OR) an exception will be thrown.   Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting  Additionally start_date, end_date and last_modified cannot be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDCampaignSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CampaignSearchResult**](CampaignSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCartridges

> CartridgePathApiResponse postSitesByIDCartridges(siteId, body)



Add a cartridge to current cartridge path.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var body = new DataApi.CartridgePathAddRequest(); // CartridgePathAddRequest | 
apiInstance.postSitesByIDCartridges(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **body** | [**CartridgePathAddRequest**](CartridgePathAddRequest.md)|  | 

### Return type

[**CartridgePathApiResponse**](CartridgePathApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCouponRedemptionSearch

> CouponRedemptionSearchResult postSitesByIDCouponRedemptionSearch(siteId, body)



Searches for coupon redemptions.    The Coupon Redemption Search document contains a search object that allows filtering on various attributes.     The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:        code - String      coupon_id - String      customer_email - String      order_no - String     Note that only searchable attributes can be used in sorting.   If the role to which the user belongs does not have View_Coupon_Codes permission, then the coupon codes returned will be masked.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDCouponRedemptionSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CouponRedemptionSearchResult**](CouponRedemptionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCouponSearch

> CouponSearchResult postSitesByIDCouponSearch(siteId, body)



Searches for coupons.   The Coupon Search document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    coupon_id - String  description - String  type - one of {\&quot;single_code\&quot;, \&quot;multiple_codes\&quot;, \&quot;system_codes\&quot;}  enabled - boolean     Note that only searchable attributes can be used in sorting.   The stats expand value is required to return the following fields in the Coupon document:        exported_code_count      redemption_count      total_codes_count  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDCouponSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CouponSearchResult**](CouponSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCouponsByIDMultipleCodes

> postSitesByIDCouponsByIDMultipleCodes(siteId, couponId, opts)



Add or delete (modify) multiple codes to/from the supplied coupon.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon to modify codes (must be multiple code coupon).
var opts = {
  '_delete': true, // Boolean | 
  'body': new DataApi.CouponMultiCodesRequest() // CouponMultiCodesRequest | 
};
apiInstance.postSitesByIDCouponsByIDMultipleCodes(siteId, couponId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon to modify codes (must be multiple code coupon). | 
 **_delete** | **Boolean**|  | [optional] 
 **body** | [**CouponMultiCodesRequest**](CouponMultiCodesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## postSitesByIDCustomerGroupSearch

> CustomerGroupSearchResult postSitesByIDCustomerGroupSearch(siteId, body)



Searches for customer groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  type - String Enum value[system, dynamic, static]     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDCustomerGroupSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CustomerGroupSearchResult**](CustomerGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDCustomerGroupsByIDMemberSearch

> CustomerGroupMemberSearchResult postSitesByIDCustomerGroupsByIDMemberSearch(siteId, id, body)



Searches for customer group members. For dynamic customer groups and the system groups \&quot;Everyone\&quot; and \&quot;Unregistered\&quot; no result is returned (Status Code: 204 - No Content).   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:         login - String       active - Boolean    Customer Profile:         customer_no - String       first_name - String       last_name - String       email - String       zip - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining login and customer_no above, only a conjunction is allowed (AND), whereas customer_no  and email can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The output of the query can also be sorted. These are the list of sortable attributes:    customer_no - String  login - String     If the Business manager customer search is configured to use the new Search Service, the following differences apply:        all attributes can be used for sorting (except for &#39;active&#39;)      searching for &#39;zip&#39; will only search in the customers default address      logical operators can be used without limits (but may result in degraded performance, depending on how they are combined)      new assignments might not be found immediately via the search service, and removed assignments      might also not be in effect immediately (there is a slight delay in updating the index)  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the requested members customer group.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDCustomerGroupsByIDMemberSearch(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the requested members customer group. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**CustomerGroupMemberSearchResult**](CustomerGroupMemberSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDGiftCertificateSearch

> GiftCertificateSearchResult postSitesByIDGiftCertificateSearch(siteId, body)



Searches for gift certificates.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    merchant_id - String  masked_gift_certificate_code* - String  order_no - String  sender_name - String  recipient_name - String  recipient_email - String  status - String  enabled - Boolean  message - String  description - String  creation_date - Date  currency_mnemonic* - String     * masked_gift_certificate_code, also known as just code, can only be used in a term query.  If a  four-character code is supplied, it is assumed that the search is on the unmasked portion of the code, otherwise  the full code must be matched.  Text queries are not allowed.   * currency_mnemonic can only be joined with other attributes using a conjunction (AND).   Note that only searchable attributes can be used in sorting.  The code attribute cannot be used for sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDGiftCertificateSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**GiftCertificateSearchResult**](GiftCertificateSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDGiftCertificates

> GiftCertificate postSitesByIDGiftCertificates(siteId, body)



Creates a gift certificate using the information provided. If a gift certificate with   the same unique identifier, it will be deleted and a new one will be created.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var body = new DataApi.GiftCertificate(); // GiftCertificate | 
apiInstance.postSitesByIDGiftCertificates(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **body** | [**GiftCertificate**](GiftCertificate.md)|  | 

### Return type

[**GiftCertificate**](GiftCertificate.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDPromotionCampaignAssignmentSearch

> PromotionCampaignAssignmentSearchResult postSitesByIDPromotionCampaignAssignmentSearch(siteId, body)



Searches for promotion campaign assignments.    The PromotionCampaignAssignment Search document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:        rank - Integer      start_date - Date      end_date - Date    Campaign:        campaign_id - String    Promotion:        promotion_id - String      description - String      enabled - Boolean    Special handling:        coupon_id - String     Only fields in the same bucket can be joined using a disjunction (OR). For instance, when joining  campaign_id and rank above, only a conjunction is allowed (AND), whereas promotion_id and description can be  joined to each other using an OR because they are in the same bucket.  Special handling fields must always use  conjunctions. If the field is used in a disjunction (OR) that violates this rule, an exception will be thrown.   Expands that can be applied for the search request        promotion      campaign     Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDPromotionCampaignAssignmentSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**PromotionCampaignAssignmentSearchResult**](PromotionCampaignAssignmentSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDPromotionSearch

> PromotionSearchResult postSitesByIDPromotionSearch(siteId, body)



Searches for promotions.    The SearchRequest document contains a search object that allows filtering on various attributes.    The query attribute specifies a complex query that can be used to narrow down the search. These are the searchable  attributes:    id - String  name - String  currency_code - String  exclusivity - String  enabled - Boolean    Note that only searchable attributes can be used in sorting. Additionally, the following attribute can be used to  sort:    promotion_class - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDPromotionSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**PromotionSearchResult**](PromotionSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDSlotConfigurationCampaignAssignmentSearch

> SlotConfigurationCampaignAssignmentSearchResult postSitesByIDSlotConfigurationCampaignAssignmentSearch(siteId, body)



Searches for slotconfiguration campaign assignments.    The SlotConfigCampaignAssignment Search document contains a search object that allows filtering on various attributes.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:        rank - Integer      start_date - Date      end_date - Date    Campaign:        campaign_id - String      enabled - Boolean    Slot configuration:        slot_configuration_id - String      description - String     Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining rank and description above, only a conjunction is allowed (AND), whereas slot_configuration_id  and description can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   Expands that can be applied for the search request        campaign      slotConfiguration      Note that only searchable attributes (excluding the ones marked with above with an asterisk) can be used in sorting.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDSlotConfigurationCampaignAssignmentSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SlotConfigurationCampaignAssignmentSearchResult**](SlotConfigurationCampaignAssignmentSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDSlotConfigurationSearch

> SlotConfigurationSearchResult postSitesByIDSlotConfigurationSearch(siteId, body)



Searches for slot configurations.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       configuration_id - String     default - Boolean     description - String     enabled - Boolean    Slot:       context - String     slot_id - String     Only fields in the same bucket can be joined using a disjunction (OR). For instance, when joining context and  description above, only a conjunction is allowed (AND), whereas context and slot_id can be joined to each other  using a disjunction because they are in the same bucket.  If the field is used in a disjunction (OR) that  violates this rule, an exception will be thrown.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDSlotConfigurationSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SlotConfigurationSearchResult**](SlotConfigurationSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDSlotSearch

> SlotSearchResult postSitesByIDSlotSearch(siteId, body)



Searches for slots.    The query attribute specifies a complex query that can be used to narrow down the search. The set of fields that  are available to search are:    slot_id - String  description - String  context_type - String      Note that only searchable attributes can be used in sorting. \&quot;context_type\&quot; value is restricted to Global/Folder/Category.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDSlotSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SlotSearchResult**](SlotSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDSortingRuleSearch

> SortingRuleSearchResult postSitesByIDSortingRuleSearch(siteId, body, opts)



Searches for product sorting rules.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  creation_date - date of creation     The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  creation_date - date of creation     This resource does not support expand options.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var body = new DataApi.SearchRequest(); // SearchRequest | 
var opts = {
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.postSitesByIDSortingRuleSearch(siteId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 
 **ruleContext** | **String**|  | [optional] 

### Return type

[**SortingRuleSearchResult**](SortingRuleSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDSourceCodeGroupSearch

> SourceCodeGroupSearchResult postSitesByIDSourceCodeGroupSearch(siteId, body)



Searches for source code groups.    The query attribute specifies a complex query that can be used to narrow down the search. These are the list  of searchable attributes:    id - String  description - String  source_code* - String   start_time - DateTime  end_time - DateTime  creation_date - DateTime  enabled - Boolean  active* - Boolean      * - These fields can only be used in Queries as conjunctions (using AND).  If the field is used in a disjunction  (OR) an exception will be thrown.    The output of the query can also be sorted. These are the list of sortable attributes:    id - String  description - String  enabled - Boolean  creation_date - DateTime      Expands that can be applied for the search request    specifications - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDSourceCodeGroupSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SourceCodeGroupSearchResult**](SourceCodeGroupSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## postSitesByIDStoreSearch

> StoreSearchResult postSitesByIDStoreSearch(siteId, body)



Searches for stores.    The query attribute specifies a complex query that can be used to narrow down the search. This is the list  of searchable attributes:    address1 - String  address2 - String  city - String  country_code - String  email - String  fax - String  id - String  inventory_id - String  latitude - double  longitude - double  name - String  phone - String  postal_code - String  state_code - String  store_hours - String  store_events - String  

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var body = new DataApi.SearchRequest(); // SearchRequest | 
apiInstance.postSitesByIDStoreSearch(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **body** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**StoreSearchResult**](StoreSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDAbTestsByID

> AbTest putSitesByIDAbTestsByID(siteId, id, opts)



Creates an A/B Test using the information provided. If an A/B Test with the same unique identifier exists, it will be deleted and a new one will be created unless the header x-dw-validate-existing&#x3D;true is passed in with the request.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var opts = {
  'body': new DataApi.AbTest() // AbTest | 
};
apiInstance.putSitesByIDAbTestsByID(siteId, id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## putSitesByIDAbTestsByIDSegmentsByID

> AbTestSegment putSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts)



Creates an A/B Test segment using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site that the A/B tests are contained within.
var id = "id_example"; // String | The id of the requested A/B Test.
var segmentId = "segmentId_example"; // String | The id of the segment in the test.
var opts = {
  'body': new DataApi.AbTestSegment() // AbTestSegment | 
};
apiInstance.putSitesByIDAbTestsByIDSegmentsByID(siteId, id, segmentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID

> putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId)



Action to bind a single promotion to a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the abTest and promotion.
var abTestId = "abTestId_example"; // String | The ID of the abTest which contains the segment.
var segmentId = "segmentId_example"; // String | The ID of the segment to to which the promotion is to be assigned.
var promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the abTest.
apiInstance.putSitesByIDAbTestsByIDSegmentsByIDPromotionsByID(siteId, abTestId, segmentId, promotionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID

> putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts)



Action to bind a slot configuration to a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var abTestId = "abTestId_example"; // String | The id of the abTest
var segmentId = "segmentId_example"; // String | 
var siteId = "siteId_example"; // String | The id of the site
var slotId = "slotId_example"; // String | The of the slot
var slotConfigId = "slotConfigId_example"; // String | The id of the slot configuration
var opts = {
  'context': "context_example" // String | 
};
apiInstance.putSitesByIDAbTestsByIDSegmentsByIDSlotConfigurationsByIDByID(abTestId, segmentId, siteId, slotId, slotConfigId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID

> putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts)



Action to bind a single sorting rule to a given abTest.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the abTest, sorting rule and category.
var abTestId = "abTestId_example"; // String | The ID of the abTest to which the sorting rule is to be assigned.
var segmentId = "segmentId_example"; // String | 
var sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the abTest.
var categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
var opts = {
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.putSitesByIDAbTestsByIDSegmentsByIDSortingRulesByIDByID(siteId, abTestId, segmentId, sortingRuleId, categoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCampaignsByID

> Campaign putSitesByIDCampaignsByID(siteId, campaignId, body)



Creates a campaign using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var campaignId = "campaignId_example"; // String | The id of the campaign to create.
var body = new DataApi.Campaign(); // Campaign | 
apiInstance.putSitesByIDCampaignsByID(siteId, campaignId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **campaignId** | **String**| The id of the campaign to create. | 
 **body** | [**Campaign**](Campaign.md)|  | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDCampaignsByIDCouponsByID

> putSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId)



Action to bind a single coupon to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be bound to
var couponId = "couponId_example"; // String | The coupon ID to bind to a campaign
apiInstance.putSitesByIDCampaignsByIDCouponsByID(siteId, campaignId, couponId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCampaignsByIDCustomerGroupsByID

> putSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId)



Action to bind a single customer group to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that coupons are to be bound to
var customerGroupId = "customerGroupId_example"; // String | The customer group ID to bind to a campaign
apiInstance.putSitesByIDCampaignsByIDCustomerGroupsByID(siteId, campaignId, customerGroupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCampaignsByIDPromotionsByID

> putSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId)



Action to bind a single promotion to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the campaign and promotion.
var campaignId = "campaignId_example"; // String | The ID of the campaign to which the promotion is to be assigned.
var promotionId = "promotionId_example"; // String | The ID of the promotion that is to be assigned to the campaign.
apiInstance.putSitesByIDCampaignsByIDPromotionsByID(siteId, campaignId, promotionId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCampaignsByIDSlotConfigurationsByIDByID

> putSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts)



Action to bind a slot configuration to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var campaignId = "campaignId_example"; // String | The ID of the campaign.
var siteId = "siteId_example"; // String | The ID of the site.
var slotId = "slotId_example"; // String | The ID of the slot.
var slotConfigId = "slotConfigId_example"; // String | The ID of the slot configuration.
var opts = {
  'context': "context_example", // String | 
  'body': new DataApi.SlotConfigurationCampaignAssignment() // SlotConfigurationCampaignAssignment | 
};
apiInstance.putSitesByIDCampaignsByIDSlotConfigurationsByIDByID(campaignId, siteId, slotId, slotConfigId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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
 **context** | **String**|  | [optional] 
 **body** | [**SlotConfigurationCampaignAssignment**](SlotConfigurationCampaignAssignment.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDCampaignsByIDSortingRulesByIDByID

> putSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts)



Action to bind a single sorting rule to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The ID of the site that contains the campaign, sorting rule and category.
var campaignId = "campaignId_example"; // String | The ID of the campaign to which the sorting rule is to be assigned.
var sortingRuleId = "sortingRuleId_example"; // String | The ID of sorting rule that is to be assigned to the campaign.
var categoryId = "categoryId_example"; // String | The ID of the category that is associated with the sorting rule.
var opts = {
  'ruleContext': "ruleContext_example" // String | 
};
apiInstance.putSitesByIDCampaignsByIDSortingRulesByIDByID(siteId, campaignId, sortingRuleId, categoryId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCampaignsByIDSourceCodeGroupsByID

> putSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId)



Action to bind a single source code group to a given campaign.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | 
var campaignId = "campaignId_example"; // String | The campaign ID that source code group are to be bound to
var sourceCodeGroupId = "sourceCodeGroupId_example"; // String | The source code group ID to bind to a campaign
apiInstance.putSitesByIDCampaignsByIDSourceCodeGroupsByID(siteId, campaignId, sourceCodeGroupId).then(function() {
  console.log('API called successfully.');
}, function(error) {
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


## putSitesByIDCartridges

> CartridgePathApiResponse putSitesByIDCartridges(siteId, body)



Overwrite cartridge path.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var body = new DataApi.CartridgePathCreateRequest(); // CartridgePathCreateRequest | 
apiInstance.putSitesByIDCartridges(siteId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **body** | [**CartridgePathCreateRequest**](CartridgePathCreateRequest.md)|  | 

### Return type

[**CartridgePathApiResponse**](CartridgePathApiResponse.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDCouponsByID

> Coupon putSitesByIDCouponsByID(siteId, couponId, body)



Creates a coupon using the information provided. If a coupon exists with the same unique identifier,  the coupon is replaced completely.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var couponId = "couponId_example"; // String | The id of the coupon to create.
var body = new DataApi.Coupon(); // Coupon | 
apiInstance.putSitesByIDCouponsByID(siteId, couponId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **couponId** | **String**| The id of the coupon to create. | 
 **body** | [**Coupon**](Coupon.md)|  | 

### Return type

[**Coupon**](Coupon.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDCustomObjectsByIDByID

> CustomObject putSitesByIDCustomObjectsByIDByID(siteId, objectType, key, opts)



Creates a site specific Custom Object from request body for the specified site. Note that an existing Custom Object for the site, with the same key, will be overwritten by this action.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | the ID of the site
var objectType = "objectType_example"; // String | the ID of the object type
var key = "key_example"; // String | the key attribute value of the Custom Object
var opts = {
  'body': new DataApi.CustomObject() // CustomObject | 
};
apiInstance.putSitesByIDCustomObjectsByIDByID(siteId, objectType, key, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## putSitesByIDCustomerGroupsByID

> CustomerGroup putSitesByIDCustomerGroupsByID(siteId, id, body)



Creates a customer group using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the customer group to create.
var body = new DataApi.CustomerGroup(); // CustomerGroup | 
apiInstance.putSitesByIDCustomerGroupsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the customer group to create. | 
 **body** | [**CustomerGroup**](CustomerGroup.md)|  | 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDCustomerGroupsByIDMembersByID

> CustomerGroupMember putSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts)



Action to add customer to (static) customer group.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the customer group.
var customerNo = "customerNo_example"; // String | The customer number of the customer to add to the group.
var opts = {
  'select': "select_example" // String | 
};
apiInstance.putSitesByIDCustomerGroupsByIDMembersByID(siteId, id, customerNo, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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


## putSitesByIDOrdersByIDConfirmationStatus

> putSitesByIDOrdersByIDConfirmationStatus(siteId, orderNo, body)



Updates the order confirmation status.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderConfirmationStatusUpdateRequest(); // OrderConfirmationStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDConfirmationStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderConfirmationStatusUpdateRequest**](OrderConfirmationStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDExportStatus

> putSitesByIDOrdersByIDExportStatus(siteId, orderNo, body)



Updates the order export status. Setting the status to EXPORTED will also trigger the finalization of on-order inventory transactions for this order, meaning that all inventory transactions with type on-order will be moved into final inventory transactions. This is only relevant when on-order inventory is turned on for the inventory list ordered products are in.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderExportStatusUpdateRequest(); // OrderExportStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDExportStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderExportStatusUpdateRequest**](OrderExportStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDExternalStatus

> putSitesByIDOrdersByIDExternalStatus(siteId, orderNo, body)



Updates the order external status.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderExternalStatusUpdateRequest(); // OrderExternalStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDExternalStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderExternalStatusUpdateRequest**](OrderExternalStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDPaymentStatus

> putSitesByIDOrdersByIDPaymentStatus(siteId, orderNo, body)



Updates the order payment status.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderPaymentStatusUpdateRequest(); // OrderPaymentStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDPaymentStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderPaymentStatusUpdateRequest**](OrderPaymentStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDShipmentsByIDShippingAddress

> putSitesByIDOrdersByIDShipmentsByIDShippingAddress(siteId, orderNo, shipmentId, body)



Updates (create or replace) the order shipment address.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site
var orderNo = "orderNo_example"; // String | The order number
var shipmentId = "shipmentId_example"; // String | ID of the shipment
var body = new DataApi.ShippingAddressUpdateRequest(); // ShippingAddressUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDShipmentsByIDShippingAddress(siteId, orderNo, shipmentId, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **shipmentId** | **String**| ID of the shipment | 
 **body** | [**ShippingAddressUpdateRequest**](ShippingAddressUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDShippingStatus

> putSitesByIDOrdersByIDShippingStatus(siteId, orderNo, body)



Updates the order shipping status.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site.
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderShippingStatusUpdateRequest(); // OrderShippingStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDShippingStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site. | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderShippingStatusUpdateRequest**](OrderShippingStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDOrdersByIDStatus

> putSitesByIDOrdersByIDStatus(siteId, orderNo, body)



Updates the order status by using the corresponding methods (fail, undoFail, place, cancel and undoCancel) from the dw.order.OrderMgr. Orders which are not in status CREATED or FAILED can not be set back.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | ID of the site
var orderNo = "orderNo_example"; // String | The order number
var body = new DataApi.OrderStatusUpdateRequest(); // OrderStatusUpdateRequest | 
apiInstance.putSitesByIDOrdersByIDStatus(siteId, orderNo, body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| ID of the site | 
 **orderNo** | **String**| The order number | 
 **body** | [**OrderStatusUpdateRequest**](OrderStatusUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: Not defined


## putSitesByIDPromotionsByID

> Promotion putSitesByIDPromotionsByID(siteId, id, body)



Creates a promotion using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the promotion to create.
var body = new DataApi.Promotion(); // Promotion | 
apiInstance.putSitesByIDPromotionsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the promotion to create. | 
 **body** | [**Promotion**](Promotion.md)|  | 

### Return type

[**Promotion**](Promotion.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDSlotsByIDSlotConfigurationsByID

> SlotConfiguration putSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, body, opts)



Creates a new configuration for an existing slot. If a slot configuration  exists with the specified configuration_id, slot_id, and context, the existing  slot configuration is overwritten.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site for which you want to create the slot configuration.
var slotId = "slotId_example"; // String | The id of the slot.
var configurationId = "configurationId_example"; // String | The id of the slot configuration.
var body = new DataApi.SlotConfiguration(); // SlotConfiguration | 
var opts = {
  'context': "context_example" // String | 
};
apiInstance.putSitesByIDSlotsByIDSlotConfigurationsByID(siteId, slotId, configurationId, body, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site for which you want to create the slot configuration. | 
 **slotId** | **String**| The id of the slot. | 
 **configurationId** | **String**| The id of the slot configuration. | 
 **body** | [**SlotConfiguration**](SlotConfiguration.md)|  | 
 **context** | **String**|  | [optional] 

### Return type

[**SlotConfiguration**](SlotConfiguration.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDSourceCodeGroupsByID

> SourceCodeGroup putSitesByIDSourceCodeGroupsByID(siteId, id, body)



Creates a source code group using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The id of the site.
var id = "id_example"; // String | The id of the source code group to create.
var body = new DataApi.SourceCodeGroup(); // SourceCodeGroup | 
apiInstance.putSitesByIDSourceCodeGroupsByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The id of the site. | 
 **id** | **String**| The id of the source code group to create. | 
 **body** | [**SourceCodeGroup**](SourceCodeGroup.md)|  | 

### Return type

[**SourceCodeGroup**](SourceCodeGroup.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml


## putSitesByIDStoresByID

> Store putSitesByIDStoresByID(siteId, id, body)



Creates a store using the information provided.

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.SitesApi();
var siteId = "siteId_example"; // String | The site context.
var id = "id_example"; // String | The id of the store to create.
var body = new DataApi.Store(); // Store | 
apiInstance.putSitesByIDStoresByID(siteId, id, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | 
 **id** | **String**| The id of the store to create. | 
 **body** | [**Store**](Store.md)|  | 

### Return type

[**Store**](Store.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

