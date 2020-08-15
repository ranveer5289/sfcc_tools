# sfcc_tools
Command line utility scripts and tools for Salesforce Commerce Cloud(SFCC).

This repo uses lerna for package management.

## How to use

```js
npm install (will install lerna)
lerna bootstrap (install dependencies for all packages)
lerna run lint (eslint)
lerna add <npm-package> (Install this package for all lerna-packages)
lerna add <npm-package> --scope=@sfcc_tools/ecdn-waf-logs (Install this package only for ecdn-waf-logs package)

cd /path/to/package
node <script.js>
```

## Configuration

Configuration is stored under `config/default.json` file. Copy sample `config/default.sample.json` and rename it to `config/default.json`

Note: remove comments from `config/default.sample.json` file

## Command line Scripts

Package/Script | Description
----------------|----------------------------
catalog-reducer-lite| CLI script to generate a reduced master catalog and a corresponding fake inventory file.
collect-expired-promotions | CLI script to collect expired promotions of a site. Expired promotions are written to a csv file.
collect-job-metrics | CLI scrip to collect job metrics (in CSV) like total run-time of job in hours, minutes & also calculates job load factor on an instance
count-order-notes | Count notes present in order xml file.
ecdn-waf-logs | CLI script to fetch, download ECDN logs. It can also add the log to Elasticsearch & can transform it to SEO log formats for tools like Screaming frog
generate-order-report | CLI script to generate a CSV report of the orders details within an specified time period.
image-checker | CLI script to find orphaned images on an instance, find products without/incomplete images and find images modified in last X days.
inventory-checker | CLI script to visualize(line chart) the inventory for a product in supplied XML files. Useful for debugging.
sfcc-catalog-to-elasticsearch | CLI script to add SFCC master catalog (XML & CSV) data into Elasticsearch
core/config | Centralized way to manage configuration via node `config` package
core/create-ocapi-client | Auto generate ocapi client from OCAPI swagger definitions file
core/elasticsearch | Elasticsearch wrapper library (Needs some cleanup)
core/eslint-config-core | Centralized way to manage eslint configuration for all packages
core/ocapi | Actual ocapi client with 4 packages (auth, shop, data & meta apis)

## TODO

1. Add detailed documentation for each package.
2. Use cli arguments (yargs) for all packages.
3. Add steps on how to create & setup a new package with lerna 

## Clean it up

```js
npm init --scope=sfcc_tools --yes

lerna add @sfcc_tools/data_api --scope=@sfcc_tools/ecdn-waf-logs
lerna add @sfcc_tools/shop_api --scope=@sfcc_tools/generate-order-report
lerna add axios --scope=@sfcc_tools/ecdn-waf-logs

lerna add line-by-line --scope=@sfcc_tools/elasticsearch

lerna run lint

## swagger-spec
java -jar openapi-generator-cli.jar generate -c conf.json -i swagger-shopapi.json -g javascript -o output_dire
```
