/**
 * Shop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20.8
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-beta
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ShopApi);
  }
}(this, function(expect, ShopApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new ShopApi.ResetPasswordTokenResult();
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

  describe('ResetPasswordTokenResult', function() {
    it('should create an instance of ResetPasswordTokenResult', function() {
      // uncomment below and update the code to test ResetPasswordTokenResult
      //var instance = new ShopApi.ResetPasswordTokenResult();
      //expect(instance).to.be.a(ShopApi.ResetPasswordTokenResult);
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ShopApi.ResetPasswordTokenResult();
      //expect(instance).to.be();
    });

    it('should have the property expiresInMinutes (base name: "expires_in_minutes")', function() {
      // uncomment below and update the code to test the property expiresInMinutes
      //var instance = new ShopApi.ResetPasswordTokenResult();
      //expect(instance).to.be();
    });

    it('should have the property login (base name: "login")', function() {
      // uncomment below and update the code to test the property login
      //var instance = new ShopApi.ResetPasswordTokenResult();
      //expect(instance).to.be();
    });

    it('should have the property resetToken (base name: "reset_token")', function() {
      // uncomment below and update the code to test the property resetToken
      //var instance = new ShopApi.ResetPasswordTokenResult();
      //expect(instance).to.be();
    });

  });

}));
