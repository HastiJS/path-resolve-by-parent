/*
 * Path resolve by parent test.
 */

'use strict';

const path = require('path');
const assert = require('assert');
const pathResolveByParent = require('../example/sample/parent-module');

/*
 * Start testing.
 */
describe('path-resolve-by-parent', () => {
  describe(`Nothing passd to module as argument`, () => {
    it(`Should return path of 'sample' directory`, () => {
      assert.equal(pathResolveByParent(), path.resolve(__dirname, '../example/sample'));
    });
  });
  describe(`Pass 'another-sample' as module argument`, () => {
    it(`Should return path of 'another-sample' directory`, () => {
      assert.equal(pathResolveByParent('another-sample'), path.resolve(__dirname, '../example/sample/another-sample'));
    });
  });
  describe(`Pass ['..', 'sample'] as module argument`, () => {
    it(`Should return path of 'sample' directory`, () => {
      assert.equal(pathResolveByParent(['..', 'sample']), path.resolve(__dirname, '../example/sample'));
    });
  });
});
