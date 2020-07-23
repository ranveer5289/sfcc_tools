/**
 * Data API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.8
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JobExecutionParameter from './JobExecutionParameter';
import JobStepExecution from './JobStepExecution';
import Status from './Status';
import StatusMetadata from './StatusMetadata';

/**
* The JobExecution model module.
* @module models/JobExecution
* @version 20.8
*/
export default class JobExecution {
    /**
    * Constructs a new <code>JobExecution</code>.
    * @alias module:models/JobExecution
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>JobExecution</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/JobExecution} obj Optional instance to populate.
    * @return {module:models/JobExecution} The populated <code>JobExecution</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobExecution();
                        
            
            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('effective_duration')) {
                obj['effective_duration'] = ApiClient.convertToType(data['effective_duration'], 'Number');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('execution_scopes')) {
                obj['execution_scopes'] = ApiClient.convertToType(data['execution_scopes'], ['String']);
            }
            if (data.hasOwnProperty('execution_status')) {
                obj['execution_status'] = ApiClient.convertToType(data['execution_status'], 'String');
            }
            if (data.hasOwnProperty('exit_status')) {
                obj['exit_status'] = Status.constructFromObject(data['exit_status']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_log_file_existing')) {
                obj['is_log_file_existing'] = ApiClient.convertToType(data['is_log_file_existing'], 'Boolean');
            }
            if (data.hasOwnProperty('is_restart')) {
                obj['is_restart'] = ApiClient.convertToType(data['is_restart'], 'Boolean');
            }
            if (data.hasOwnProperty('job_description')) {
                obj['job_description'] = ApiClient.convertToType(data['job_description'], 'String');
            }
            if (data.hasOwnProperty('job_id')) {
                obj['job_id'] = ApiClient.convertToType(data['job_id'], 'String');
            }
            if (data.hasOwnProperty('log_file_name')) {
                obj['log_file_name'] = ApiClient.convertToType(data['log_file_name'], 'String');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'Date');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], [JobExecutionParameter]);
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_metadata')) {
                obj['status_metadata'] = StatusMetadata.constructFromObject(data['status_metadata']);
            }
            if (data.hasOwnProperty('step_executions')) {
                obj['step_executions'] = ApiClient.convertToType(data['step_executions'], [JobStepExecution]);
            }
            if (data.hasOwnProperty('user_login')) {
                obj['user_login'] = ApiClient.convertToType(data['user_login'], 'String');
            }
        }
        return obj;
    }

    /**
    * When the execution was started by a client, this represents the client's id.
    * @member {String} client_id
    */
    client_id = undefined;
    /**
    * Time in milliseconds, the job needed to be finished.
    * @member {Number} duration
    */
    duration = undefined;
    /**
    * Time in milliseconds, the job has done work. Paused times are evicted.
    * @member {Number} effective_duration
    */
    effective_duration = undefined;
    /**
    * Timestamp, when execution was finished.
    * @member {Date} end_time
    */
    end_time = undefined;
    /**
    * Sorted set of all execution scopes, used by individual steps.
    * @member {Array.<String>} execution_scopes
    */
    execution_scopes = undefined;
    /**
    * Current execution status. If the execution is running 'running' is returned. If the execution is pending  'pending' is returned. If the execution is finished 'finished' is returned.
    * @member {module:models/JobExecution.ExecutionStatusEnum} execution_status
    */
    execution_status = undefined;
    /**
    * @member {module:models/Status} exit_status
    */
    exit_status = undefined;
    /**
    * ID of the execution object.
    * @member {String} id
    */
    id = undefined;
    /**
    * True if the log file exists, otherwise false.
    * @member {Boolean} is_log_file_existing
    */
    is_log_file_existing = undefined;
    /**
    * True if this execution represents a job restart.
    * @member {Boolean} is_restart
    */
    is_restart = undefined;
    /**
    * Description of the job, this execution belongs to.
    * @member {String} job_description
    */
    job_description = undefined;
    /**
    * ID of the job, this execution belongs to.
    * @member {String} job_id
    */
    job_id = undefined;
    /**
    * Name of the log file, containing execution log.
    * @member {String} log_file_name
    */
    log_file_name = undefined;
    /**
    * Timestamp of the last modification time for the execution.
    * @member {Date} modification_time
    */
    modification_time = undefined;
    /**
    * List of all job execution parameters.
    * @member {Array.<module:models/JobExecutionParameter>} parameters
    */
    parameters = undefined;
    /**
    * Timestamp, when execution was started.
    * @member {Date} start_time
    */
    start_time = undefined;
    /**
    * Current status. If the execution is running 'running' is returned. If the execution is pending 'pending' is  returned. If the execution is finished the exit status code of the execution is returned.
    * @member {String} status
    */
    status = undefined;
    /**
    * @member {module:models/StatusMetadata} status_metadata
    */
    status_metadata = undefined;
    /**
    * List of all steps, called for job execution.
    * @member {Array.<module:models/JobStepExecution>} step_executions
    */
    step_executions = undefined;
    /**
    * When the execution was started by a registered user, this represents the user's login.
    * @member {String} user_login
    */
    user_login = undefined;



    /**
    * Allowed values for the <code>execution_status</code> property.
    * @enum {String}
    * @readonly
    */
    static ExecutionStatusEnum = {
        /**
         * value: "pending"
         * @const
         */
        "pending": "pending",
        /**
         * value: "running"
         * @const
         */
        "running": "running",
        /**
         * value: "pausing"
         * @const
         */
        "pausing": "pausing",
        /**
         * value: "paused"
         * @const
         */
        "paused": "paused",
        /**
         * value: "resuming"
         * @const
         */
        "resuming": "resuming",
        /**
         * value: "resumed"
         * @const
         */
        "resumed": "resumed",
        /**
         * value: "restarting"
         * @const
         */
        "restarting": "restarting",
        /**
         * value: "restarted"
         * @const
         */
        "restarted": "restarted",
        /**
         * value: "aborting"
         * @const
         */
        "aborting": "aborting",
        /**
         * value: "aborted"
         * @const
         */
        "aborted": "aborted",
        /**
         * value: "finished"
         * @const
         */
        "finished": "finished"    };

}
