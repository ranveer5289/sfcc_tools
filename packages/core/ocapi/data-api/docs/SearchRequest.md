# DataApi.SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents | [optional] 
**dbStartRecord** | **Number** | The zero-based index of the record that we want to start with, used to optimize special handling | [optional] 
**expand** | **[String]** | List of expansions to be applied to each search results. Expands are optional | [optional] 
**query** | **Object** | Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following:  | 
**select** | **String** | The field to be selected. | [optional] 
**sorts** | [**[Sort]**](Sort.md) | The list of sort clauses configured for the search request. Sort clauses are optional. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 


