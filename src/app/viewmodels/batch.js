define(['durandal/app', 'knockout','models/inputvalidator'], function (app, ko, InputValidator) {

  function Batch() {

    var self = this;
    var inputValidator = new InputValidator();
    self.finalOutput = ko.observableArray();
    self.rangeValue = ko.observable();

    this.nameit = ko.computed(function(){

      self.finalOutput.removeAll();

      for(var i = 0; i <= self.rangeValue(); i++) {
        self.finalOutput.push(inputValidator.inputCheck(i));
      }

    });

  }

  return new Batch();

});
