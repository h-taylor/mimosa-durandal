define(['durandal/app', 'knockout', 'emitter_config', 'models/emitter'], function (app, ko, emitterConfig, Emitter) {

  var SetUp = function() {

    this.emitters = emitterConfig.emitters;
    this.selectedEmitter = ko.observable();
    this.emitterName = ko.observable();
    this.emitterModulus = ko.observable();
    this.emitterOutput = ko.observable();

    this.newEmitter = function() {
      emitterConfig.newE();
    };

    this.removeEmitter = function() {
      if (this.selectedEmitter()) {
        this.emitters.remove(this.selectedEmitter());
      }
    };
  };

  return new SetUp();
});

