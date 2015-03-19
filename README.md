# grunt-path-validator

> Validate that file names match given globs

[![Build Status](https://travis-ci.org/TheSavior/grunt-path-validator.svg?branch=master)](https://travis-ci.org/TheSavior/grunt-path-validator)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-path-validator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-path-validator');
```

## The "path_validator" task

### Overview
`grunt-path-validator` uses the [Grunt file matching pattern](http://gruntjs.com/configuring-tasks#files).


In your project's Gruntfile, add a section named `path_validator` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  path_validator: {
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

### Usage Examples

Fail if any javascript file name has an upper case character.

```js
grunt.initConfig({
  path_validator: {
    js: {
      src: ['**/*[A-Z]*.js']
    }
  }
});
```

#### Excludes

Fail if any javascript file includes underscores. Don't search in `node_modules`.

```js
grunt.initConfig({
  path_validator: {
    not_node_modules: {
      src: [
        '**/*_*.js',
        '!**/node_modules/**/*.js'
      ]
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See the [releases page](https://github.com/TheSavior/grunt-path-validator/releases).
