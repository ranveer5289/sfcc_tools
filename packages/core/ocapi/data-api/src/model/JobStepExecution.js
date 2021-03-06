/**
 * Data API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.4
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Status', 'model/StatusMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Status'), require('./StatusMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.DataApi) {
      root.DataApi = {};
    }
    root.DataApi.JobStepExecution = factory(root.DataApi.ApiClient, root.DataApi.Status, root.DataApi.StatusMetadata);
  }
}(this, function(ApiClient, Status, StatusMetadata) {
  'use strict';



  /**
   * The JobStepExecution model module.
   * @module model/JobStepExecution
   * @version 20.4
   */

  /**
   * Constructs a new <code>JobStepExecution</code>.
   * @alias module:model/JobStepExecution
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>JobStepExecution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobStepExecution} obj Optional instance to populate.
   * @return {module:model/JobStepExecution} The populated <code>JobStepExecution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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
  exports.prototype['chunk_size'] = undefined;
  /**
   * Time in milliseconds, the job needed to be finished.
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Timestamp, when execution was finished.
   * @member {Date} end_time
   */
  exports.prototype['end_time'] = undefined;
  /**
   * The ID of the scope this step is or was executed for.
   * @member {String} execution_scope
   */
  exports.prototype['execution_scope'] = undefined;
  /**
   * Current execution status. If the execution is running 'running' is returned. If the execution is pending  'pending' is returned. If the execution is finished 'finished' is returned.
   * @member {module:model/JobStepExecution.ExecutionStatusEnum} execution_status
   */
  exports.prototype['execution_status'] = undefined;
  /**
   * @member {module:model/Status} exit_status
   */
  exports.prototype['exit_status'] = undefined;
  /**
   * ID of the execution object.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * ID of the job the step of this step execution was included from, if the step was included from another job.
   * @member {String} include_steps_from_job_id
   */
  exports.prototype['include_steps_from_job_id'] = undefined;
  /**
   * True if this execution represents a chunk oriented step execution.
   * @member {Boolean} is_chunk_oriented
   */
  exports.prototype['is_chunk_oriented'] = undefined;
  /**
   * The current number of items that have been filtered for a chunk oriented step execution, otherwise null.
   * @member {Number} item_filter_count
   */
  exports.prototype['item_filter_count'] = undefined;
  /**
   * The current number of items that have been written for a chunk oriented step execution, otherwise null.
   * @member {Number} item_write_count
   */
  exports.prototype['item_write_count'] = undefined;
  /**
   * Timestamp of the last modification time for the execution.
   * @member {Date} modification_time
   */
  exports.prototype['modification_time'] = undefined;
  /**
   * Timestamp, when execution was started.
   * @member {Date} start_time
   */
  exports.prototype['start_time'] = undefined;
  /**
   * Current status. If the execution is running 'running' is returned. If the execution is pending 'pending' is  returned. If the execution is finished the exit status code of the execution is returned.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/StatusMetadata} status_metadata
   */
  exports.prototype['status_metadata'] = undefined;
  /**
   * Description of the step, this execution belongs to.ID of the step
   * @member {String} step_description
   */
  exports.prototype['step_description'] = undefined;
  /**
   * ID of the step, this execution belongs to.ID of the step
   * @member {String} step_id
   */
  exports.prototype['step_id'] = undefined;
  /**
   * ID of the step's type at the time it is or was executed.
   * @member {String} step_type_id
   */
  exports.prototype['step_type_id'] = undefined;
  /**
   * Additional information regarding the step's type at the time it is or was executed (e.g. name of a script module  and function).
   * @member {String} step_type_info
   */
  exports.prototype['step_type_info'] = undefined;
  /**
   * The total number of items that will be processed for a chunk oriented step execution (null if unknown), otherwise  null.
   * @member {Number} total_item_count
   */
  exports.prototype['total_item_count'] = undefined;


  /**
   * Allowed values for the <code>execution_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExecutionStatusEnum = {
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
    "finished": "finished"  };


  return exports;
}));


