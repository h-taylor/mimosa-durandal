define(['durandal/app', 'knockout','jquery','models/outputer','models/input_validator'], function (app, ko, $, Outputer,InputValidator) {

  function Test() {
    var self = this;
    var outputer = new Outputer();

    self.numInput = ko.observable();
    self.outputClass = ko.observable();
    self.isValid = false;

    self.isValidInput = function() {
        self.numInput();   //// why does self.isValid not update properly unless I incluse this line?
        return self.isValid;
    };

    self.numOutput = ko.computed(function() {
        var inputValidator = new InputValidator(self.numInput());
        var finalOutput;
        inputValidator.checkInput();
        self.isValid = inputValidator.valid;
        if (inputValidator.valid) finalOutput = outputer.inputCheck(self.numInput());
        if (!inputValidator.valid) finalOutput = "Not Valid Data";
        return finalOutput;
	}, this);

  }

  return new Test();
});

