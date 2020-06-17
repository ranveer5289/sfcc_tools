const path = require('path');
const csvstream = require('csv-write-stream');
const fs = require('fs');
const chalk = require('chalk');

const TASKID = 'jobmetrics';

const configPath = path.resolve(process.cwd(), 'config.json');
const config = require(configPath);

const oauth = require(path.resolve(process.cwd(), 'ocapi', 'auth', 'oauth.js'));
const jobSearch = require(path.resolve(process.cwd(), 'ocapi', 'data', 'jobexecutionsearch.js'));

async function getJobMetrics() {
    const token = await oauth.getClientCredentialGrant();
    if (!token) {
        process.exit(1);
    }
    
    let allJobs = await getAllJobExecutions(token);
    if (!allJobs || allJobs.length <= 0) {
        console.log(chalk.red('No jobs founds!!'));
        process.exit(1);
    }

    console.log(chalk.green('Total job instances found ' + allJobs.length));
    const writer = new csvstream();
    const output = path.resolve(process.cwd(), 'output', `${TASKID}.csv`);
    if (fs.existsSync(output)) {
        fs.unlinkSync(output);
    }
    writer.pipe(fs.createWriteStream(output)); 

    let metrics = {};
    let totalJobTime = 0;
    allJobs.forEach(function(job) {
        const jobId = job.job_id;
        if (!metrics.hasOwnProperty(jobId)) {
            metrics[jobId] = {};
            metrics[jobId]['duration'] = 0;
            metrics[jobId]['durationInMinutes'] = 0;
            metrics[jobId]['durationInHours'] = 0;
        }

        const duration = job.duration; // milliseconds
        // track individual job run-time
        metrics[jobId]['duration'] = metrics[jobId]['duration'] + (duration/1000);
        metrics[jobId]['durationInMinutes'] = metrics[jobId]['durationInMinutes'] + (duration/1000/60);
        metrics[jobId]['durationInHours'] = metrics[jobId]['durationInHours'] + (duration/1000/3600);
        totalJobTime = totalJobTime + duration;
    });
    const totalJobTimeInSeconds = totalJobTime / 1000;
    const jobLoadFactor = totalJobTimeInSeconds / 86400;
    console.log(chalk.green('Job load factor is  ' + jobLoadFactor));

    Object.keys(metrics).forEach(function(jobId) {
        writer.write({
            'job-id': jobId,
            'totalDurationInSeconds' : metrics[jobId].duration,
            'durationInMinutes' : metrics[jobId].durationInMinutes,
            'durationInHours' : metrics[jobId].durationInHours
        });
    })
    writer.end();
}

async function getAllJobExecutions(token) {
    let jobResponse = await jobSearch.search(token);
    let allJobs = [];
    if (!jobResponse || !jobResponse.hits) {
        return allJobs;
    }

    console.log(chalk.green('Fetching all job executions..........'));
    allJobs = allJobs.concat(jobResponse.hits);

    const totalHits = jobResponse.total;
    const asyncFunctions = [];
    console.log(chalk.green('Total job executions ' + totalHits));
    const counter = Math.ceil(totalHits / 200);
    for (let i = 1; i < counter; i++) {
        const start = i * 200;
        console.log(chalk.green('Fetching job executions from index ' + start));
        asyncFunctions.push(jobSearch.search(token, start));
    }
    try {
        const results = await Promise.all(asyncFunctions);
        if (results && results.length > 0) {
            results.forEach(function(result) {
                allJobs = allJobs.concat(result.hits);
            });
        }
    } catch (error) {
        console.log(chalk.red(error));
        return [];
    }

    return allJobs;
}
module.exports = getJobMetrics();
