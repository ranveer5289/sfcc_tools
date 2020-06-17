const { Client } = require('@elastic/elasticsearch');

class ElasticSearch {
    constructor(config) {
        this.client = new Client({ node: config.host, log: 'error' });
        this.INDEX_NAME = config.INDEX_NAME || 'sfcc-master-catalog';
    }

    async indexExists() {
        const response = await this.client.indices.exists({
            index: this.INDEX_NAME
        });
        if (response && response.statusCode === 404) {
            return false;
        }
        return true;
    }

    async createIndex() {
        const isCreated = await this.client.indices.create({
            index: this.INDEX_NAME
        });
        return isCreated;
    }

    async bulk(body) {
        let success = true;
        try {
            const bulkResponse = await this.client.bulk({
                body: body
            });
            if (bulkResponse.errors) {
                success = false;
                const erroredDocuments = [];
                // The items array has the same order of the dataset we just indexed.
                // The presence of the `error` key indicates that the operation
                // that we did for the document has failed.
                bulkResponse.items.forEach((action, i) => {
                    const operation = Object.keys(action)[0];
                    if (action[operation].error) {
                        erroredDocuments.push({
                            // If the status is 429 it means that you can retry the document,
                            // otherwise it's very likely a mapping error, and you should
                            // fix the document before to try it again.
                            status: action[operation].status,
                            error: action[operation].error,
                            operation: body[i * 2],
                            document: body[i * 2 + 1]
                        });
                    }
                });
                console.log(erroredDocuments);
            }
        } catch (error) {
            success = false;
            console.log(error);
        }
        return success;
    }

    async refresh() {
        await this.client.indices.refresh({
            index: this.INDEX_NAME
        });
    }
}

module.exports = ElasticSearch;
