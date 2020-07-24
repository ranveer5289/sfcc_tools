# DataApi.RangeFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | The search field. | 
**from** | [**Object**](.md) | The lower bound of the filter range. If not specified, the range is  open-ended with respect to the lower bound. You can&#39;t leave both the lower and upper bounds open-ended. | [optional] 
**fromInclusive** | **Boolean** | Indicates whether the lower bound of the range is inclusive. If not specified, the default is true. Set to false to make the lower bound exclusive. | [optional] 
**to** | [**Object**](.md) | The upper bound of the filter range. If not specified, the range is  open-ended with respect to the upper bound. You can&#39;t leave both the upper and lower bounds open-ended. | [optional] 
**toInclusive** | **Boolean** | Indicates whether the upper bound of the range is inclusive. If not specified, the default is true. Set to false to made the upper bound  exclusive. | [optional] 


