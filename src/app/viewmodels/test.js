define(['durandal/app', 'knockout','jquery','models/input_validator','models/subject'], function (app, ko, $, InputValidator,Subject) {

  function Test() {
    var self = this;
    var inputValidator = new InputValidator();

    self.numInput = ko.observable();
    self.outputClass = ko.observable();
    self.isValid = false;

    self.isValidInput = function() {
        self.numInput();   //// why does self.isValid not update properly unless I incluse this line?
        return self.isValid;
    };

    self.numOutput = ko.computed(function() {
        var subject = new Subject(self.numInput());
        var finalOutput;
        subject.checkInput();
        self.isValid = subject.valid;
        if (subject.valid) finalOutput = inputValidator.inputCheck(self.numInput());
        if (!subject.valid) finalOutput = "Not Valid Data";
        return finalOutput;
	}, this);

  }

  return new Test();
});

