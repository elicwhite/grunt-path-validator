var glob = require('glob');

glob("/Users/eli/projects/santafe/**/*+(_|[A-Z])*.js", {
  ignore: '**/node_modules/**/*.js'
},function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.

  if (er) {
    console.error(er);
    return;
  }

  console.log(files);

})