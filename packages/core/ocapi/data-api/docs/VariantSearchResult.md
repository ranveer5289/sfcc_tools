# DataApi.VariantSearchResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**data** | **[Object]** |  | [optional] 
**dbStartRecord_** | **Number** | The zero-based index of the record that we want to start with, used to optimize special handling | [optional] 
**expand** | **[String]** | List of expansions to be applied to each search results. Expands are optional | [optional] 
**hits** | [**[Variant]**](Variant.md) | The hits from the search | [optional] 
**next** | [**ResultPage**](ResultPage.md) |  | [optional] 
**previous** | [**ResultPage**](ResultPage.md) |  | [optional] 
**query** | [**Query**](Query.md) |  | [optional] 
**select** | **String** | The fields that you want to select. | [optional] 
**sorts** | [**[Sort]**](Sort.md) | The list of sort clauses configured for the search request. Sort clauses are optional. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 
**total** | **Number** | The total number of documents. | [optional] 
