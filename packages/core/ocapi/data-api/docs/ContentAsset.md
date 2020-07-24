# DataApi.ContentAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cYear** | **String** |  | [optional] 
**cBody** | [**{String: MarkupText}**](MarkupText.md) |  | [optional] 
**cCustomCSSFile** | [**MediaFile**](MediaFile.md) |  | [optional] 
**classificationFolderId** | **String** | The ID of the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as &#39;default&#39;. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as &#39;default&#39;. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource. | [optional] 
**classificationFolderLink** | **String** | The link to the classification folder. It is only part of the response, if the assignment from  this content asset to the folder is marked as &#39;default&#39;. The property is read-only. To  set the classification folder just create/update an assignment between this content asset and  a folder and mark it as &#39;default&#39;. See details in  /libraries/{library_id}/folder_assignments/{content_id}/{folder_id} resource. | [optional] 
**creationDate** | **Date** | Returns the value of attribute &#39;creationDate&#39;. | [optional] [readonly] 
**description** | **{String: String}** | The localized content asset description. | [optional] 
**id** | **String** | The id of the content asset. | [optional] 
**lastModified** | **Date** | Returns the value of attribute &#39;lastModified&#39;. | [optional] [readonly] 
**link** | **String** | The link to the content asset resource. | [optional] 
**name** | **{String: String}** | The localized content asset name. | [optional] 
**online** | **{String: Boolean}** | Is the asset online? | [optional] 
**pageDescription** | **{String: String}** | The localized content asset page description. | [optional] 
**pageKeywords** | **{String: String}** | The localized content asset page keywords. | [optional] 
**pageTitle** | **{String: String}** | The localized content asset page title. | [optional] 
**pageUrl** | **{String: String}** | The localized content asset page url. | [optional] 
**searchable** | **{String: Boolean}** | Is the asset searchable? | [optional] 
**siteMapChangeFrequency** | **{String: String}** | The content assets change frequency needed for the sitemap creation  (always, hourly, daily, weekly, monthly, yearly, never). | [optional] 
**siteMapIncluded** | **{String: Number}** | The status if the content asset is included into the sitemap (either 0 or  1). | [optional] 
**siteMapPriority** | **{String: Number}** | The content assets priority needed for the sitemap creation (0.0 for no  priority defined). | [optional] 
**template** | **String** | The rendering template. | [optional] 



## Enum: {String: String}


* `always` (value: `"always"`)

* `hourly` (value: `"hourly"`)

* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)

* `yearly` (value: `"yearly"`)

* `never` (value: `"never"`)





## Enum: {String: Number}


* `1` (value: `1`)

* `0` (value: `0`)




