# DataApi.ObjectAttributeDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultValue** | [**ObjectAttributeValueDefinition**](ObjectAttributeValueDefinition.md) |  | [optional] 
**description** | **{String: String}** | The localized description of the attribute. | [optional] 
**displayName** | **{String: String}** | The localized name presented to the user in forms. | [optional] 
**effectiveId** | **String** | The effective ID, which is c_id if the attribute is custom, and just the id otherwise. It is read only. | [optional] 
**externallyDefined** | **Boolean** | Flag indicating if this attribute is externally defined. | [optional] 
**externallyManaged** | **Boolean** | Flag indicating if this attribute is externally managed. | [optional] 
**fieldHeight** | **Number** | The height of the field for this attribute in the editor. | [optional] 
**fieldLength** | **Number** | The length of the field for this attribute in the editor. | [optional] 
**id** | **String** | The user supplied ID of the attribute. | [optional] 
**key** | **Boolean** | Flag indicating if this is a key attribute. | [optional] 
**link** | **String** | The URL that is used to get this instance.  Value is computed and read-only. | [optional] 
**localizable** | **Boolean** | Flag indicating if this attribute can be localized. | [optional] 
**mandatory** | **Boolean** | Flag indicating if a value is mandatory for the attribute. | [optional] 
**maxValue** | **Number** | The maximum possible value for this attribute. | [optional] 
**minLength** | **Number** | The minimum length of the field for this attribute. | [optional] 
**minValue** | **Number** | The minimum possible value for this attribute. | [optional] 
**multiValueType** | **Boolean** | True if the attribute can have multiple values.  Attributes of the following types are multi-value capable:    set_of_int  set_of_number  set_of_string    Additionally, attributes of the following types can be multi-value  enabled:    enum_of_int  enum_of_string   | [optional] 
**orderRequired** | **Boolean** | Flag indicating if this attribute is required for order of the attribute model&#39;s product. The set of these can be used  in order line items. | [optional] 
**queryable** | **Boolean** | Returns true if the attribute definition is explicitly marked queryable. If no explicit queryable is found  and the attribute value type belongs to a queryable type, true is returned too. In all other cases false is returned.  Value is computed and read-only. | [optional] 
**readOnly** | **Boolean** | Flag indicating if this attribute is read-only. It is read only. | [optional] 
**regularExpression** | **String** | A regular expression that defines the legal values for this attribute. | [optional] 
**requiresEncoding** | **Boolean** | Flag indicating if this attribute can be encoded using the encoding&#x3D;\&quot;off\&quot; flag in ISML templates. It is read only. | [optional] 
**scale** | **Number** | The minimum number of fraction digits for a value of this attribute. | [optional] 
**searchable** | **Boolean** | Flag indicating if this attribute is searchable. | [optional] 
**setValueType** | **Boolean** | Flag indicating if this attribute is of type &#39;Set of&#39;. It is read only. | [optional] 
**siteSpecific** | **Boolean** | Flag indicating if this attribute is site-specific. | [optional] 
**system** | **Boolean** | Flag indicating if this attribute is a system attribute. | [optional] 
**unit** | **{String: String}** | The unit of measure for this attribute. | [optional] 
**valueDefinitions** | [**[ObjectAttributeValueDefinition]**](ObjectAttributeValueDefinition.md) | A set of values that are possible for this attribute. It is read only. | [optional] 
**valueType** | **String** | The type of this attribute. | [optional] 
**visible** | **Boolean** | Flag indicating if this attribute is visible. | [optional] 



## Enum: ValueTypeEnum


* `string` (value: `"string"`)

* `int` (value: `"int"`)

* `double` (value: `"double"`)

* `text` (value: `"text"`)

* `html` (value: `"html"`)

* `date` (value: `"date"`)

* `image` (value: `"image"`)

* `boolean` (value: `"boolean"`)

* `money` (value: `"money"`)

* `quantity` (value: `"quantity"`)

* `datetime` (value: `"datetime"`)

* `email` (value: `"email"`)

* `password` (value: `"password"`)

* `set_of_string` (value: `"set_of_string"`)

* `set_of_int` (value: `"set_of_int"`)

* `set_of_double` (value: `"set_of_double"`)

* `enum_of_string` (value: `"enum_of_string"`)

* `enum_of_int` (value: `"enum_of_int"`)

* `unknown` (value: `"unknown"`)




