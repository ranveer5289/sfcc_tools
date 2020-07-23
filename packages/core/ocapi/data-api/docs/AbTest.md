# DataApi.AbTest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerGroups** | **[String]** | The list of customer group ids assigned to the A/B Test. Defaults to &#x27;Everyone&#x27; if not specified on create | [optional] 
**description** | **String** | The optional description of the A/B Test | [optional] 
**emailAddresses** | **[String]** | The optional list of email addresses to send A/B Test results | [optional] 
**enabled** | **Boolean** | The flag representing the enabled state of the A/B Test. Defaults to false if not specified on create | [optional] 
**endDate** | **Date** | The date that the A/B Test ends. Defaults to two weeks from creation date if both start and end dates are not specified on create | [optional] 
**expirationType** | **String** | The participant expiration type of the A/B Test. Defaults to &#x27;never&#x27; if not specified on create | [optional] 
**id** | **String** | The id of the A/B Test | [optional] 
**keyMetricId** | **String** | The key metric that is most important to the A/B Test, among the metrics collected. Defaults to &#x27;Revenue&#x27; if not specified from test participant activity | [optional] 
**link** | **String** | The URL to get the A/B test. This is a computed attribute and cannot be modified | [optional] 
**paused** | **Boolean** | The flag representing the paused state of the A/B Test. Defaults to false if not specified on create | [optional] 
**segmentCount** | **Number** | Segment count of A/B test. This is a computed attribute and cannot be modified | [optional] 
**startDate** | **Date** | The date that the A/B Test begins. Defaults to a week from creation date if both start and end dates are not specified on create | [optional] 
**status** | **String** | Status of A/B test. This is a computed attribute and cannot be modified | [optional] 
**tags** | **[String]** | The optional list of tags to group similar A/B Tests so that they can be searched easily. | [optional] 
**testGroups** | [**[AbTestGroup]**](AbTestGroup.md) | Test Groups created for an A/B Test. This is a read only attribute for now. | [optional] 
**testSegments** | [**[AbTestSegment]**](AbTestSegment.md) | Test Segments created for an A/B Test. This is a read only attribute for now | [optional] 
**trigger** | [**AbTestTrigger**](AbTestTrigger.md) |  | [optional] 

<a name="ExpirationTypeEnum"></a>
## Enum: ExpirationTypeEnum

* `session` (value: `"session"`)
* `never` (value: `"never"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `ended` (value: `"ended"`)
* `planned` (value: `"planned"`)
* `running` (value: `"running"`)

