# DataApi.CategoryProductAssignmentSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of returned documents. | [optional] 
**dbStartRecord** | **Number** | The zero-based index of the record that we want to start with, used to optimize special handling | [optional] 
**expand** | **[String]** | The list of expansions that can be applied:    product_base - String - This expand will enable retrieval of the following basic Product information:       brand      ean       link    long_description       manufacturer_name       manufacturer_sku    name       page_description       page_keywords       page_title       searchable     short_description       type       unit       upc      | [optional] 
**query** | [**Object**](.md) | Document representing a query. A query contains a set of objects that define criteria  used to select records. A query can contain one of the following:  | 
**select** | **String** | The fields that you want to select. | [optional] 
**sorts** | [**[Sort]**](Sort.md) | The list of sort clauses configured for the search request. Sort clauses are optional. | [optional] 
**start** | **Number** | The zero-based index of the first search hit to include in the result. | [optional] 


