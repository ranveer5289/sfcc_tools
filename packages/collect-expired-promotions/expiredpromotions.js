/* eslint-disable no-await-in-loop */
const path = require('path');
const CSVStream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');
const config = require('@sfcc_tools/config');
const ocapiDataApi = require('@sfcc_tools/data_api');
const ocapiAuthApi = require('@sfcc_tools/auth-api');

const TASKID = 'expiredpromotions';
const ocapiConfig = config.get('packages.ocapi');

async function getAllPromotions(token) {
    const defaultDataApiClient = ocapiDataApi.ApiClient.instance;
    const oauth2Application = defaultDataApiClient.authentications.oauth2_application;
    oauth2Application.accessToken = token;
    let start = 0;
    let allPromotions = [];

    defaultDataApiClient.basePath = ocapiConfig.ocapi_data_api_url;
    const apiInstance = new ocapiDataApi.SitesApi();
    let query = `{
        "start": ${start},
        "count": 200,
        "query": {
            "match_all_query": {}
        },
        "select": "(**)"
    }`;
    const siteId = ocapiConfig.sfcc_site_id;

    let promotionResponse = await apiInstance.postSitesByIDPromotionSearch(siteId, query);

    if (promotionResponse && promotionResponse.hits) {
        console.log(chalk.green('Fetching all promotions..........'));
        allPromotions = allPromotions.concat(promotionResponse.hits);

        const totalHits = promotionResponse.total;

        const counter = Math.ceil(totalHits / 200);
        for (let i = 1; i < counter; i += 1) {
            start = i * 200;
            query = `{
                "start": ${start},
                "count": 200,
                "query": {
                    "match_all_query": {}
                },
                "select": "(**)"
            }`;
            promotionResponse = await apiInstance.postSitesByIDPromotionSearch(siteId, query);
            if (promotionResponse && promotionResponse.hits) {
                allPromotions = allPromotions.concat(promotionResponse.hits);
            }
        }
    }
    return allPromotions;
}

async function writeExpiredPromotionsInCSV() {
    const token = await ocapiAuthApi.oauth.getClientCredentialGrant();
    if (!token) {
        process.exit(1);
    }

    const allPromotions = await getAllPromotions(token);
    if (allPromotions && allPromotions.length > 0) {
        console.log(chalk.green(`Total promotions found ${allPromotions.length}`));

        const offset = 7;
        const date = new Date();
        const offsetDate = new Date(date.getTime() - (offset * 24 * 60 * 60 * 1000));

        const writer = new CSVStream();
        const output = path.resolve(process.cwd(), 'output', `${TASKID}_${ocapiConfig.sfcc_site_id}.csv`);
        if (fs.existsSync(output)) {
            fs.unlinkSync(output);
        }
        writer.pipe(fs.createWriteStream(output));

        console.log(chalk.green('Collecting expired promotions'));
        let expiredPromotionsCount = 0;
        allPromotions.forEach(function (promotion) {
            // if not enabled consider it expired
            let isExpired = !promotion.enabled;
            // endDate can ne NULL in case of "continuous,
            // none" schedule of campaign OR multiple campaigns using same promotion.
            const endDate = new Date(promotion.assignment_information.end_date);
            let formattedEndDate = '';

            // endDate of promotion is in past
            if (!isExpired && endDate && (endDate < offsetDate)) {
                formattedEndDate = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;
                isExpired = true;
            }

            const scheduleType = promotion.assignment_information.scheduleType;
            if (!isExpired && scheduleType === 'multiple') { // multiple campaigns assigned to this promotions so endDate is not returned
                // eslint-disable-next-line max-len
                const activeCampaignAssignments = promotion.assignment_information.activeCampaignAssignments;
                // eslint-disable-next-line max-len
                const activeABtestAssignments = promotion.assignment_information.activeABtestAssignments;
                // eslint-disable-next-line max-len
                const upcomingABtestAssignments = promotion.assignment_information.upcomingABtestAssignments;
                // eslint-disable-next-line max-len
                const upcomingCampaignAssignments = promotion.assignment_information.upcomingCampaignAssignments;

                // in case of multiple campaign assignments to a single promotion,
                // we check if there are no active & upcoming assignments.
                if (!activeABtestAssignments && !activeCampaignAssignments
                    && !upcomingABtestAssignments && !upcomingCampaignAssignments) {
                    isExpired = true;
                }
            }

            // no campaign assignment, so consider it expired
            if (!isExpired && scheduleType === 'none') {
                isExpired = true;
            }

            if (isExpired) {
                expiredPromotionsCount += 1;
                writer.write({ 'promotion-id': promotion.id, 'end-date': formattedEndDate });
            }
        });
        writer.end();
        console.log(chalk.green(`Total expired promotions found ${expiredPromotionsCount}`));
    }
}

module.exports = writeExpiredPromotionsInCSV();
