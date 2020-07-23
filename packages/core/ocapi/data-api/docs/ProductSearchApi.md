# DataApi.ProductSearchApi

All URIs are relative to *//demo-ocapi.demandware.net/s/-/dw/data/20.8*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postProductSearch**](ProductSearchApi.md#postProductSearch) | **POST** /product_search | 

<a name="postProductSearch"></a>
# **postProductSearch**
> ProductSearchResult postProductSearch(opts)



Searches for products.   The query attribute specifies a complex query that can be used to narrow down the search. Attributes are grouped  into different buckets.  These are the list of searchable attributes with their corresponding buckets:   Main:       id - String     name - String     online - SiteSpecific Boolean     searchable - SiteSpecific Boolean      valid_from - SiteSpefic DateTime      valid_to - SiteSpecfic DateTime      type - ProductType      creation_date - DateTime    Catalog:       catalog_id - String    Category:       category_id - String    Special:       type - {\&quot;item\&quot;, \&quot;set, \&quot;bundle\&quot;, \&quot;master\&quot;, \&quot;part_of_product_set\&quot;, \&quot;bundled\&quot;, \&quot;variant\&quot;, \&quot;variation_group\&quot;, \&quot;option\&quot;, \&quot;retail_set\&quot;, \&quot;part_of_retail_set\&quot;}     The sortable properties are:    id - String  name - String  creation_date - DateTime     Note that catalog_id is the id of the catalog to which products are assigned to.   Only attributes in the same bucket can be joined using a disjunction (OR).  For instance, when joining id and catalog_id above, only a conjunction is allowed (AND), whereas id  and searchable can be joined using a disjunction because they are in the same bucket.  If an attribute  is used in a disjunction (OR) that violates this rule, an exception will be thrown.   The product search retrieves additional properties of the product when expansions are used.  The available expand attribute values are:            &#x27;all&#x27; will retrieve all the product properties.           &#x27;availability&#x27; will retrieve the following properties:             ats             in_stock             online                  &#x27;categories&#x27; will retrieve the following properties:             assigned_categories               &#x27;images&#x27; will retrieve the following properties:             image        &#x27;all_images&#x27; used with images will retrieve the following properties:             image             image_groups               &#x27;prices&#x27; will retrieve the following properties:             price             price_currency               &#x27;sets&#x27; will retrieve the following properties:             set_products             product_sets               &#x27;bundles&#x27; will retrieve the following properties:             product_bundles             bundled_products                    

### Example
```javascript
import DataApi from 'data_api';
let defaultClient = DataApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2_application
let oauth2_application = defaultClient.authentications['oauth2_application'];
oauth2_application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new DataApi.ProductSearchApi();
let opts = { 
  'body': new DataApi.SearchRequest() // SearchRequest | 
  'siteId': "siteId_example" // String | The site context.
};
apiInstance.postProductSearch(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchRequest**](SearchRequest.md)|  | [optional] 
 **siteId** | **String**| The site context. | [optional] 

### Return type

[**ProductSearchResult**](ProductSearchResult.md)

### Authorization

[oauth2_application](../README.md#oauth2_application)

### HTTP request headers

 - **Content-Type**: application/json, text/xml, application/xml
 - **Accept**: application/json, text/xml, application/xml

