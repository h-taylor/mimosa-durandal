define(['knockout'], function(ko) {
  var Emitter = function(name, modulus, output) {

    this.name = ko.observable(name);
    this.modulus = ko.observable(modulus);
    this.output = ko.observable(output);

    this.isInputModEqualToZero = function(input) {

      var isModEqualToZero = false;

      if (input % this.modulus() === 0) {
        isModEqualToZero = true;
      }

      return isModEqualToZero;

    };
  };

  return Emitter;
});
