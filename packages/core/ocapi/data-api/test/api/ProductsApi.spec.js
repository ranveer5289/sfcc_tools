/**
 * Data API
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
    factory(root.expect, root.DataApi);
  }
}(this, function(expect, DataApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DataApi.ProductsApi();
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

  describe('ProductsApi', function() {
    describe('deleteProductsByID', function() {
      it('should call deleteProductsByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByID
        //instance.deleteProductsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDProductOptionsByID', function() {
      it('should call deleteProductsByIDProductOptionsByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDProductOptionsByID
        //instance.deleteProductsByIDProductOptionsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDProductOptionsByIDValuesByID', function() {
      it('should call deleteProductsByIDProductOptionsByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDProductOptionsByIDValuesByID
        //instance.deleteProductsByIDProductOptionsByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDVariationAttributesByID', function() {
      it('should call deleteProductsByIDVariationAttributesByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDVariationAttributesByID
        //instance.deleteProductsByIDVariationAttributesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDVariationAttributesByIDValuesByID', function() {
      it('should call deleteProductsByIDVariationAttributesByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDVariationAttributesByIDValuesByID
        //instance.deleteProductsByIDVariationAttributesByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDVariationGroupsByID', function() {
      it('should call deleteProductsByIDVariationGroupsByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDVariationGroupsByID
        //instance.deleteProductsByIDVariationGroupsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProductsByIDVariationsByID', function() {
      it('should call deleteProductsByIDVariationsByID successfully', function(done) {
        //uncomment below and update the code to test deleteProductsByIDVariationsByID
        //instance.deleteProductsByIDVariationsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByID', function() {
      it('should call getProductsByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByID
        //instance.getProductsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDProductOptions', function() {
      it('should call getProductsByIDProductOptions successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDProductOptions
        //instance.getProductsByIDProductOptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDProductOptionsByID', function() {
      it('should call getProductsByIDProductOptionsByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDProductOptionsByID
        //instance.getProductsByIDProductOptionsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDProductOptionsByIDValues', function() {
      it('should call getProductsByIDProductOptionsByIDValues successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDProductOptionsByIDValues
        //instance.getProductsByIDProductOptionsByIDValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDProductOptionsByIDValuesByID', function() {
      it('should call getProductsByIDProductOptionsByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDProductOptionsByIDValuesByID
        //instance.getProductsByIDProductOptionsByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationAttributes', function() {
      it('should call getProductsByIDVariationAttributes successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationAttributes
        //instance.getProductsByIDVariationAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationAttributesByID', function() {
      it('should call getProductsByIDVariationAttributesByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationAttributesByID
        //instance.getProductsByIDVariationAttributesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationAttributesByIDValues', function() {
      it('should call getProductsByIDVariationAttributesByIDValues successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationAttributesByIDValues
        //instance.getProductsByIDVariationAttributesByIDValues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationAttributesByIDValuesByID', function() {
      it('should call getProductsByIDVariationAttributesByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationAttributesByIDValuesByID
        //instance.getProductsByIDVariationAttributesByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationGroups', function() {
      it('should call getProductsByIDVariationGroups successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationGroups
        //instance.getProductsByIDVariationGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationGroupsByID', function() {
      it('should call getProductsByIDVariationGroupsByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationGroupsByID
        //instance.getProductsByIDVariationGroupsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariations', function() {
      it('should call getProductsByIDVariations successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariations
        //instance.getProductsByIDVariations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProductsByIDVariationsByID', function() {
      it('should call getProductsByIDVariationsByID successfully', function(done) {
        //uncomment below and update the code to test getProductsByIDVariationsByID
        //instance.getProductsByIDVariationsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByID', function() {
      it('should call patchProductsByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByID
        //instance.patchProductsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDProductOptionsByID', function() {
      it('should call patchProductsByIDProductOptionsByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDProductOptionsByID
        //instance.patchProductsByIDProductOptionsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDProductOptionsByIDValuesByID', function() {
      it('should call patchProductsByIDProductOptionsByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDProductOptionsByIDValuesByID
        //instance.patchProductsByIDProductOptionsByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDVariationAttributesByID', function() {
      it('should call patchProductsByIDVariationAttributesByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDVariationAttributesByID
        //instance.patchProductsByIDVariationAttributesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDVariationAttributesByIDValuesByID', function() {
      it('should call patchProductsByIDVariationAttributesByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDVariationAttributesByIDValuesByID
        //instance.patchProductsByIDVariationAttributesByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDVariationGroupsByID', function() {
      it('should call patchProductsByIDVariationGroupsByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDVariationGroupsByID
        //instance.patchProductsByIDVariationGroupsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchProductsByIDVariationsByID', function() {
      it('should call patchProductsByIDVariationsByID successfully', function(done) {
        //uncomment below and update the code to test patchProductsByIDVariationsByID
        //instance.patchProductsByIDVariationsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postProductsByIDVariantSearch', function() {
      it('should call postProductsByIDVariantSearch successfully', function(done) {
        //uncomment below and update the code to test postProductsByIDVariantSearch
        //instance.postProductsByIDVariantSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByID', function() {
      it('should call putProductsByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByID
        //instance.putProductsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDProductOptionsByID', function() {
      it('should call putProductsByIDProductOptionsByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDProductOptionsByID
        //instance.putProductsByIDProductOptionsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDProductOptionsByIDValuesByID', function() {
      it('should call putProductsByIDProductOptionsByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDProductOptionsByIDValuesByID
        //instance.putProductsByIDProductOptionsByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDVariationAttributesByID', function() {
      it('should call putProductsByIDVariationAttributesByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDVariationAttributesByID
        //instance.putProductsByIDVariationAttributesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDVariationAttributesByIDValuesByID', function() {
      it('should call putProductsByIDVariationAttributesByIDValuesByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDVariationAttributesByIDValuesByID
        //instance.putProductsByIDVariationAttributesByIDValuesByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDVariationGroupsByID', function() {
      it('should call putProductsByIDVariationGroupsByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDVariationGroupsByID
        //instance.putProductsByIDVariationGroupsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putProductsByIDVariationsByID', function() {
      it('should call putProductsByIDVariationsByID successfully', function(done) {
        //uncomment below and update the code to test putProductsByIDVariationsByID
        //instance.putProductsByIDVariationsByID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
