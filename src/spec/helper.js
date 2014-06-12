requirejs.config({
  baseUrl: '../app',
  paths: {
    'knockout': 'vendor/knockout.js/knockout',
    'jasmine': 'vendor/jasmine/jasmine',
    'jasmine-html': 'vendor/jasmine/jasmine-html',
    'boot': 'vendor/jasmine/boot',
    'jquery': 'vendor/jquery/jquery.min'
  },
  shim: {
    'jasmine': {
      exports: 'jasmineRequire',
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmineRequire'
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'jasmineRequire'
    }
  }
});

require(['boot'], function() {
  require(['../spec/utilities','../spec/emitter','../spec/input_validator'], function() {
    window.onload();
  });
});