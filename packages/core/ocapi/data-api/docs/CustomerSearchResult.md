# DataApi.CustomerSearchResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**dbStartRecord** | **Number** |  | [optional] 
**expand** | **[String]** | The list of expands set. Can be empty. | [optional] 
**hits** | [**[CustomerSearchHit]**](CustomerSearchHit.md) | The sorted array of search hits. Can be empty. | [optional] 
**next** | [**ResultPage**](ResultPage.md) |  | [optional] 
**previous** | [**ResultPage**](ResultPage.md) |  | [optional] 
**query** | **Object** | Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following:  | [optional] 
**select** | **String** | The fields that you want to select. | [optional] 
**sorts** | [**[Sort]**](Sort.md) |  | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 


