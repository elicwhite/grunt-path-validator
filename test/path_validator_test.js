'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function getNumErrors(input) {
  if (input.indexOf('All files matched') !== -1) {
    return 0;
  }

  return input.match(/(\d*) files did not match/)[1];
}

exports.path_validator = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  no_error: function(test) {
    grunt.util.spawn( {
      cmd: "grunt",
      args: [ "path_validator:no_error" ]
    }, function( error, result ) {
      test.equal(getNumErrors(result.stdout), 0);
      test.equal( result.code, 0 );

      test.done();
    });
  },

  one_error: function(test) {
    grunt.util.spawn( {
      cmd: "grunt",
      args: [ "path_validator:one_error" ]
    }, function( error, result ) {
      test.equal(getNumErrors(result.stdout), 1);
      test.equal(result.code, 3);

      test.done();
    });
  },

  two_errors: function(test) {
    grunt.util.spawn( {
      cmd: "grunt",
      args: [ "path_validator:two_errors" ]
    }, function( error, result ) {
      test.equal(getNumErrors(result.stdout), 2);
      test.equal(result.code, 3);

      test.done();
    });
  }
};
