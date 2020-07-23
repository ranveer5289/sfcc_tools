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
import Status from './Status';
import StatusMetadata from './StatusMetadata';

/**
* The JobStepExecution model module.
* @module models/JobStepExecution
* @version 20.8
*/
export default class JobStepExecution {
    /**
    * Constructs a new <code>JobStepExecution</code>.
    * @alias module:models/JobStepExecution
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>JobStepExecution</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/JobStepExecution} obj Optional instance to populate.
    * @return {module:models/JobStepExecution} The populated <code>JobStepExecution</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobStepExecution();
                        
            
            if (data.hasOwnProperty('chunk_size')) {
                obj['chunk_size'] = ApiClient.convertToType(data['chunk_size'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('execution_scope')) {
                obj['execution_scope'] = ApiClient.convertToType(data['execution_scope'], 'String');
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
            if (data.hasOwnProperty('include_steps_from_job_id')) {
                obj['include_steps_from_job_id'] = ApiClient.convertToType(data['include_steps_from_job_id'], 'String');
            }
            if (data.hasOwnProperty('is_chunk_oriented')) {
                obj['is_chunk_oriented'] = ApiClient.convertToType(data['is_chunk_oriented'], 'Boolean');
            }
            if (data.hasOwnProperty('item_filter_count')) {
                obj['item_filter_count'] = ApiClient.convertToType(data['item_filter_count'], 'Number');
            }
            if (data.hasOwnProperty('item_write_count')) {
                obj['item_write_count'] = ApiClient.convertToType(data['item_write_count'], 'Number');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'Date');
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
            if (data.hasOwnProperty('step_description')) {
                obj['step_description'] = ApiClient.convertToType(data['step_description'], 'String');
            }
            if (data.hasOwnProperty('step_id')) {
                obj['step_id'] = ApiClient.convertToType(data['step_id'], 'String');
            }
            if (data.hasOwnProperty('step_type_id')) {
                obj['step_type_id'] = ApiClient.convertToType(data['step_type_id'], 'String');
            }
            if (data.hasOwnProperty('step_type_info')) {
                obj['step_type_info'] = ApiClient.convertToType(data['step_type_info'], 'String');
            }
            if (data.hasOwnProperty('total_item_count')) {
                obj['total_item_count'] = ApiClient.convertToType(data['total_item_count'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The chunk size for a chunk oriented step execution, otherwise null.
    * @member {Number} chunk_size
    */
    chunk_size = undefined;
    /**
    * Time in milliseconds, the job needed to be finished.
    * @member {Number} duration
    */
    duration = undefined;
    /**
    * Timestamp, when execution was finished.
    * @member {Date} end_time
    */
    end_time = undefined;
    /**
    * The ID of the scope this step is or was executed for.
    * @member {String} execution_scope
    */
    execution_scope = undefined;
    /**
    * Current execution status. If the execution is running 'running' is returned. If the execution is pending  'pending' is returned. If the execution is finished 'finished' is returned.
    * @member {module:models/JobStepExecution.ExecutionStatusEnum} execution_status
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
    * ID of the job the step of this step execution was included from, if the step was included from another job.
    * @member {String} include_steps_from_job_id
    */
    include_steps_from_job_id = undefined;
    /**
    * True if this execution represents a chunk oriented step execution.
    * @member {Boolean} is_chunk_oriented
    */
    is_chunk_oriented = undefined;
    /**
    * The current number of items that have been filtered for a chunk oriented step execution, otherwise null.
    * @member {Number} item_filter_count
    */
    item_filter_count = undefined;
    /**
    * The current number of items that have been written for a chunk oriented step execution, otherwise null.
    * @member {Number} item_write_count
    */
    item_write_count = undefined;
    /**
    * Timestamp of the last modification time for the execution.
    * @member {Date} modification_time
    */
    modification_time = undefined;
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
    * Description of the step, this execution belongs to.ID of the step
    * @member {String} step_description
    */
    step_description = undefined;
    /**
    * ID of the step, this execution belongs to.ID of the step
    * @member {String} step_id
    */
    step_id = undefined;
    /**
    * ID of the step's type at the time it is or was executed.
    * @member {String} step_type_id
    */
    step_type_id = undefined;
    /**
    * Additional information regarding the step's type at the time it is or was executed (e.g. name of a script module  and function).
    * @member {String} step_type_info
    */
    step_type_info = undefined;
    /**
    * The total number of items that will be processed for a chunk oriented step execution (null if unknown), otherwise  null.
    * @member {Number} total_item_count
    */
    total_item_count = undefined;



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
