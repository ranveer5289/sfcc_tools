# DataApi.EcdnLogFetchRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endTime** | **Date** | Optional end time for log file entries, in Unix time stamp format. Must not be more than 1 hour after the start time. If not passed, a one hour time frame is assumed for the log file. | [optional] 
**startTime** | **Date** | Start time for log file entries, in Unix time stamp format. Must not be more than 7 days in the past | 
**zoneName** | **String** | The internationalized domain name representation (from RFC 3490) of the zone name | 
