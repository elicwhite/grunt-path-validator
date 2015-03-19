/*
 * grunt-path-validator
 *
 *
 * Copyright (c) 2015 Eli White
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('path_validator', 'Validate that file names match given globs', function() {
    var done = this.async();

    var matchingFiles = this.filesSrc;

    var numFiles = matchingFiles.length;
    if (numFiles > 0) {
      grunt.log.error(numFiles + ' files did not match required file name scheme');

      matchingFiles.forEach(function(file) {
        grunt.log.error(file);
      });
    }
    else
    {
      grunt.log.ok('All files matched the required file name scheme');
    }

    done(numFiles === 0);
  });

};
