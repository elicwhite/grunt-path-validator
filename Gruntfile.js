/*
 * grunt-path-validator
 *
 *
 * Copyright (c) 2015 Eli White
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    path_validator: {
      no_error: {
        src: [
          'test/files/no_error/**/*+(_|[A-Z])*.js'
        ]
      },

      one_error: {
        src: [
          'test/files/one_error/**/*+(_|[A-Z])*.js'
        ]
      },

      two_errors: {
        src: [
          'test/files/two_errors/**/*+(_|[A-Z])*.js'
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
