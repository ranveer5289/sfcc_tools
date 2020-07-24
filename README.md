# sfcc_tools
Command line utility scripts and tools for Salesforce Commerce Cloud(SFCC)

```js
npm init --scope=sfcc_tools --yes

lerna add @sfcc_tools/data_api --scope=@sfcc_tools/ecdn-waf-logs
lerna add @sfcc_tools/shop_api --scope=@sfcc_tools/generate-order-report
lerna add axios --scope=@sfcc_tools/ecdn-waf-logs

lerna add line-by-line --scope=@sfcc_tools/elasticsearch

lerna run lint

╰─❯ java -jar openapi-generator-cli.jar generate -c conf.json -i swagger-shopapi.json -g javascript -o output_dire
```


# todo

1. upcoming_campaign_assignments change variable casing
2. improve documentation with jsdoc
3. add readme
4. add config.json.sample
