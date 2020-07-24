# DataApi.ContentFolderResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | The number of search results in the current page. | [optional] 
**data** | **[Object]** | The returned objects. | [optional] 
**hits** | [**[ContentFolder]**](ContentFolder.md) | The sorted array of search hits. This array can be empty. | [optional] 
**next** | **String** | The URL of the next result page. | [optional] 
**previous** | **String** | The URL of the previous result page. | [optional] 
**select** | **String** | The fields that you want to select. | [optional] 
**start** | **Number** | The zero-based index of the first search result to include in the document. | [optional] 
**total** | **Number** | The total number of search results. | [optional] 


