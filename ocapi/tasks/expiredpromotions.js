/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const CSVStream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');

const TASKID = 'expiredpromotions';

const configPath = path.resolve(process.cwd(), 'config.json');
const config = require(configPath);

const oauth = require(path.resolve(process.cwd(), 'ocapi', 'auth', 'oauth.js'));
const promotionSearch = require(path.resolve(process.cwd(), 'ocapi', 'data', 'promotionsearch.js'));

async function getAllPromotions(token) {
    let promotionResponse = await promotionSearch.search(token);
    let allPromotions = [];
    if (promotionResponse && promotionResponse.hits) {
        console.log(chalk.green('Fetching all promotions..........'));
        allPromotions = allPromotions.concat(promotionResponse.hits);

        const totalHits = promotionResponse.total;

        const counter = Math.ceil(totalHits / 200);
        for (let i = 1; i < counter; i += 1) {
            const start = i * 200;
            promotionResponse = await promotionSearch.search(token, start);
            if (promotionResponse && promotionResponse.hits) {
                allPromotions = allPromotions.concat(promotionResponse.hits);
            }
        }
    }
    return allPromotions;
}

async function writeExpiredPromotionsInCSV() {
    const token = await oauth.getClientCredentialGrant();
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
        const output = path.resolve(process.cwd(), 'output', `${TASKID}_${config.sfcc_site_id}.csv`);
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
