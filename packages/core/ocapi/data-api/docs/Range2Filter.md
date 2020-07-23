# DataApi.Range2Filter

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filterMode** | **String** | Compare mode: overlap, containing, or contained. If not specified, the default is overlap. | [optional] 
**fromField** | **String** | The field name of the field that starts the first range. | 
**fromInclusive** | **Boolean** | Indicates whether the lower bound of the second range is inclusive. If not specified, the default is true. Set to false to make the lower bound exclusive. | [optional] 
**fromValue** | **Object** | The lower bound of the second range. If not specified, the range is  open-ended with respect to the lower bound. You can&#x27;t leave both the lower and upper bounds open-ended. | [optional] 
**toField** | **String** | The field name of the field that ends the first range. | 
**toInclusive** | **Boolean** | Indicates whether the upper bound of the second range is inclusive. If not specified, the default is true. Set to false to make the lower bound exclusive. | [optional] 
**toValue** | **Object** | The upper bound of the second range. If not specified, the range is  open-ended with respect to the upper bound. You can&#x27;t leave both the upper and lower bounds open-ended. | [optional] 

<a name="FilterModeEnum"></a>
## Enum: FilterModeEnum

* `overlap` (value: `"overlap"`)
* `containing` (value: `"containing"`)
* `contained` (value: `"contained"`)

