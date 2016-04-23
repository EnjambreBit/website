/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/bootstrap.css");
  app.import("vendor/enjambre-red.css");

  return app.toTree();
};
