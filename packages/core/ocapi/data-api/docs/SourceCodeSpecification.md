# DataApi.SourceCodeSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expression** | **String** | Expression is a value for the \&quot;Source Code Specification\&quot; may be a literal source code, or it may contain wildcards.  A literal code is simply the literal code. Valid characters are letters and numbers (no spaces).  A wildcard allows a single source code specification to match multiple source codes. The following wildcards are supported:  ? - Matches any single alpha-numeric character. For example: the source code specification &#39;ABC?&#39; would match &#39;ABCD&#39; or &#39;ABC3&#39;, but not &#39;ABCDE&#39;.  * - Matches any sequence of alpha-numeric characters. For example: the source code specification &#39;ABC*&#39; would match &#39;ABCD&#39;, &#39;ABCDE&#39;, or &#39;ABC123&#39;.  [n1..n2] - Matches any number from n1 through and including n2.  For example: the source code specification &#39;ABC[3..22]&#39; would match &#39;ABC3&#39;, &#39;ABC4&#39; or &#39;ABC22&#39;, but not &#39;ABC33&#39; or &#39;ABCD&#39;. | [optional] 


