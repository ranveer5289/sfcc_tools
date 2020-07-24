# DataApi.LocaleResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**hits** | [**[Locale]**](Locale.md) | The locales found by the request | [optional] 
**id** | **String** | The input locale (none specifies get all locales) | [optional] 
**includeAll** | **Boolean** | True to get the all the hits for all the locales, not just the active allowed ones | [optional] 
**next** | **String** | The URL of the next result page. | [optional] 
**previous** | **String** | The URL of the previous result page. | [optional] 
**select** | **String** | The string describing the set of fields to return in the result. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 


