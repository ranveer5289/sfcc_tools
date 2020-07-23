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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataApi.SlotConfigurationCampaignAssignment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SlotConfigurationCampaignAssignment', function() {
    it('should create an instance of SlotConfigurationCampaignAssignment', function() {
      // uncomment below and update the code to test SlotConfigurationCampaignAssignment
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be.a(DataApi.SlotConfigurationCampaignAssignment);
    });

    it('should have the property campaign (base name: "campaign")', function() {
      // uncomment below and update the code to test the property campaign
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaign_id")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property customerGroups (base name: "customer_groups")', function() {
      // uncomment below and update the code to test the property customerGroups
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property rank (base name: "rank")', function() {
      // uncomment below and update the code to test the property rank
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property slotConfiguration (base name: "slot_configuration")', function() {
      // uncomment below and update the code to test the property slotConfiguration
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property slotConfigurationId (base name: "slot_configuration_id")', function() {
      // uncomment below and update the code to test the property slotConfigurationId
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property slotConfigurationUuid (base name: "slot_configuration_uuid")', function() {
      // uncomment below and update the code to test the property slotConfigurationUuid
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property slotContextId (base name: "slot_context_id")', function() {
      // uncomment below and update the code to test the property slotContextId
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

    it('should have the property slotId (base name: "slot_id")', function() {
      // uncomment below and update the code to test the property slotId
      //var instane = new DataApi.SlotConfigurationCampaignAssignment();
      //expect(instance).to.be();
    });

  });

}));
