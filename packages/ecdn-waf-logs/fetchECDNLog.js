/* eslint-disable import/no-dynamic-require */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const ocapi = require('@sfcc_tools/ocapi');

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), '..', '..', 'config');
const config = require('config');

const ecdnConfig = config.get('packages.ecdn-waf-logs');
const oauth = ocapi.oauth;
const ecdn = ocapi.ecdn;

// const TASKID = 'fetchECDNLog';

function getTimeSlots() {
    const slotPrefixes = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
        '22:00', '23:00'
    ];
    const targetDate = new Date();
    const offset = ecdnConfig.date_offset || 1;
    targetDate.setDate(targetDate.getDate() - offset);

    const formattedDate = `${targetDate.getFullYear()}-${targetDate.getMonth() + 1}-${targetDate.getDate()}`;

    // Dirty way to generate ISO date string
    const timeSlots = slotPrefixes.map(function (prefix) {
        return `${formattedDate}T${prefix}Z`;
    });
    return {
        timeSlots: timeSlots,
        formattedDate: formattedDate
    };
}

async function fetch() {
    const token = await oauth.getClientCredentialGrant();
    if (!token) {
        console.log(chalk.red('Error getting oauth token from SFCC'));
        process.exit(1);
    }

    const slotObject = getTimeSlots();
    const timeSlots = slotObject.timeSlots;

    const asyncFunctions = timeSlots.map(function (timeSlot) {
        return ecdn.initLogFetchRequest(token, timeSlot);
    });

    try {
        console.log(`Initiating log fetch request for date ${slotObject.formattedDate}`);
        const results = await Promise.all(asyncFunctions);
        if (results && results.length > 0) {
            const logFetchRequestIds = results.map(function (result) {
                return result.data.id;
            });
            if (logFetchRequestIds) {
                console.log(`Total fetch log request initiated ${logFetchRequestIds.length}`);
                const file = path.join(__dirname, 'ecdn-request-ids.json');
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
                fs.writeFileSync(file, JSON.stringify(logFetchRequestIds));
                console.log(`Successfully written request ids in file ${file}`);
            } else {
                console.log('Something went wrong!!!');
            }
        } else {
            console.log(chalk.red('No response from SFCC server'));
        }
    } catch (error) {
        if (error.response && error.response.data) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

module.exports = fetch();
