# DataApi.CustomLogSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debugPermitted** | **Boolean** | False if the current instance is production. | [optional] 
**debugToFile** | **Boolean** | Indicates if custom debug logs are written to file. | [optional] 
**emailTo** | **String** | Email addresses for fatal log messages with a maximum length of 1000 characters. | [optional] 
**errorToFile** | **Boolean** | Indicates if custom error logs are written to file. | [optional] 
**fatalToFile** | **Boolean** | Indicates if custom fatal logs are written to file. | [optional] 
**infoToFile** | **Boolean** | Indicates if custom info logs are written to file. | [optional] 
**logCategories** | [**[LogCategory]**](LogCategory.md) | Defined custom log categories. | [optional] 
**rootLevel** | **String** | Custom root category log level. | [optional] 
**warnToFile** | **Boolean** | Indicates if custom warn logs are written to file. | [optional] 


