/*
 * Path resolve by parent.
 *
 * Resolves paths by module parent path.
 */

'use strict';

/*
 * Load Node.js modules.
 */
const path = require('path');

/*
 * Load useful dependencies.
 */
const moduleParentId = require('module-parent-id');

/**
 * Return resolved path by module parent path.
 *
 * @param {string|Array} paths -Paths which want to apply resolve by module parent.
 */
module.exports = (paths) => {
  // Sanitize `paths`.
  if (!paths) {
    paths = '';
  }
  if (typeof paths !== 'string' && !(Array.isArray(paths) && paths.filter((value) => { return typeof value !== 'string'; }).length === 0)) {
    throw new Error(`'paths' must be a string or an array of strings.`);
  }
  let baseDir = moduleParentId(2) ? path.dirname(moduleParentId(2)) : null;
  if (!baseDir) {
    throw new Error(`No parent found for current module.`);
  }

  // Add `baseDir` to `paths`.
  if (Array.isArray(paths)) {
    paths.unshift(baseDir);
  } else {
    paths = [baseDir, paths];
  }
  return path.resolve.apply(null, paths);
};
