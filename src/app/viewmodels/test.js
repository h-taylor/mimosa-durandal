define(['durandal/app', 'knockout','jquery','models/inputvalidator'], function (app, ko, $, InputValidator) {

  function Test() {

    var self = this;
    var inputValidator = new InputValidator();
    self.numInput = ko.observable();
    self.outputClass = ko.observable();

    self.isValidInput = function() {

      var isValid = false;
      var output = inputValidator.inputCheck(self.numInput());

      if(output != "Not Valid Data") {
          isValid = true;
      }

      return isValid;

    };

    self.numOutput = ko.computed(function() {

        var finalOutput = inputValidator.inputCheck(self.numInput());
        self.outputClass = false;
        return finalOutput;

	}, this);

  }

  return new Test();
});

