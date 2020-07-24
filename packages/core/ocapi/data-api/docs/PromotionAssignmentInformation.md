# DataApi.PromotionAssignmentInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abtestId** | **String** | If there is only one assignment, and that assignment is an A/B test segment, the id of the A/B test the segment  belongs to. Otherwise, empty. | [optional] 
**abtestSegmentId** | **String** | If there is only one assignment, and that assignment is an A/B test segment, the id of the A/B test segment.  Otherwise, empty. | [optional] 
**active** | **Boolean** | true if the individual assignment or the multiple assignments are currently active. | [optional] 
**activeAbtestAssignments** | [**[PromotionAbtestGroupAssignment]**](PromotionAbtestGroupAssignment.md) | A list of currently active A/B tests this is assigned to. | [optional] 
**activeCampaignAssignments** | [**[PromotionCampaignAssignment]**](PromotionCampaignAssignment.md) | A list of currently active campaigns this is assigned to. | [optional] 
**campaignId** | **String** | If there is only one assignment, and that assignment is a campaign, the id of the campaign. Otherwise, empty. | [optional] 
**enabled** | **Boolean** |  | [optional] 
**endDate** | **Date** | The end date of the container of the assignment (a Campaign or ABTest). If schedule_type is  schedule_type : \&quot;multiple\&quot; or schedule_type : \&quot;none\&quot;, then then result will be null. Also, a null  date will also return null. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | [optional] 
**scheduleType** | **String** | If there is only one active assignment, or no active assignments and one upcoming assignment, this is that type  of assignment (schedule_type : \&quot;campaign\&quot; or schedule_type : \&quot;abtest\&quot;). If there are no  assignments, it will be schedule_type : \&quot;none\&quot;, otherwise, schedule_type : \&quot;multiple\&quot;. | [optional] 
**startDate** | **Date** | The start date of the container of the assignment (a Campaign or ABTest). If schedule_type is  schedule_type : \&quot;multiple\&quot; or schedule_type : \&quot;none\&quot;, then then result will be null. Also, a null  date will also return null. | [optional] 
**upcomingAbtestAssignments** | [**[PromotionAbtestGroupAssignment]**](PromotionAbtestGroupAssignment.md) | A list of upcoming A/B tests this is assigned to. | [optional] 
**upcomingCampaignAssignments** | [**[PromotionCampaignAssignment]**](PromotionCampaignAssignment.md) | A list of upcoming campaigns this is assigned to. | [optional] 



## Enum: ScheduleTypeEnum


* `none` (value: `"none"`)

* `campaign` (value: `"campaign"`)

* `abtest` (value: `"abtest"`)

* `multiple` (value: `"multiple"`)




