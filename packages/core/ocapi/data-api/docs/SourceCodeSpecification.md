# DataApi.SourceCodeSpecification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **String** | Expression is a value for the \&quot;Source Code Specification\&quot; may be a literal source code, or it may contain wildcards.  A literal code is simply the literal code. Valid characters are letters and numbers (no spaces).  A wildcard allows a single source code specification to match multiple source codes. The following wildcards are supported:  ? - Matches any single alpha-numeric character. For example: the source code specification &#x27;ABC?&#x27; would match &#x27;ABCD&#x27; or &#x27;ABC3&#x27;, but not &#x27;ABCDE&#x27;.  * - Matches any sequence of alpha-numeric characters. For example: the source code specification &#x27;ABC*&#x27; would match &#x27;ABCD&#x27;, &#x27;ABCDE&#x27;, or &#x27;ABC123&#x27;.  [n1..n2] - Matches any number from n1 through and including n2.  For example: the source code specification &#x27;ABC[3..22]&#x27; would match &#x27;ABC3&#x27;, &#x27;ABC4&#x27; or &#x27;ABC22&#x27;, but not &#x27;ABC33&#x27; or &#x27;ABCD&#x27;. | [optional] 
