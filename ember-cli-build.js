/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/bootstrap.css");
  app.import("vendor/enjambre-red.css");

  app.import("vendor/jquery.themepunch.plugins.min.js");
  app.import("vendor/jquery.themepunch.revolution.min.js");
  app.import("vendor/jquery.localScroll.js");
  

  return app.toTree();
};
