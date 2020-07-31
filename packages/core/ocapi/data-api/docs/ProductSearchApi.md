# DataApi.ProductSearchApi

All URIs are relative to *http://demo-ocapi.demandware.net/s/-/dw/data/20.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postProductSearch**](ProductSearchApi.md#postProductSearch) | **POST** /product_search | 



## postProductSearch

> ProductSearchResult postProductSearch(opts)



Searches for products.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     name - String     online - SiteSpecific Boolean     searchable - SiteSpecific Boolean      valid_from - SiteSpefic DateTime      valid_to - SiteSpecfic DateTime      type - ProductType      creation_date - DateTime    Catalog:       catalog_id - String    Category:       category_id - String    Special:       type - {\&quot;item\&quot;, \&quot;set, \&quot;bundle\&quot;, \&quot;master\&quot;, \&quot;part_of_product_set\&quot;, \&quot;bundled\&quot;, \&quot;variant\&quot;, \&quot;variation_group\&quot;, \&quot;option\&quot;, \&quot;retail_set\&quot;, \&quot;part_of_retail_set\&quot;}     The sortable properties are:    id - String  name - String  creation_date - DateTime     Note that catalog_id is the id of the catalog to which products are assigned to.   Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining id and catalog_id above, only a conjunction is allowed (AND), whereas id  and searchable can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The product search retrieves additional properties of the product when expansions are used.  The available expand attribute values are:            &#39;all&#39; will retrieve all the product properties.           &#39;availability&#39; will retrieve the following properties:             ats             in_stock             online                  &#39;categories&#39; will retrieve the following properties:             assigned_categories               &#39;images&#39; will retrieve the following properties:             image        &#39;all_images&#39; used with images will retrieve the following properties:             image             image_groups               &#39;prices&#39; will retrieve the following properties:             price             price_currency               &#39;sets&#39; will retrieve the following properties:             set_products             product_sets               &#39;bundles&#39; will retrieve the following properties:             product_bundles             bundled_products                    

### Example

```javascript
var DataApi = require('data_api');
var defaultClient = DataApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2_application
var oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new DataApi.ProductSearchApi();
var opts = {
  'siteId': "siteId_example", // String | The site context.
  'body': new DataApi.SearchRequest() // SearchRequest | 
};
apiInstance.postProductSearch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **siteId** | **String**| The site context. | [optional] 
 **body** | [**SearchRequest**](SearchRequest.md)|  | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

- **Content-Type**: application/json, text/xml, application/xml
- **Accept**: application/json, text/xml, application/xml

