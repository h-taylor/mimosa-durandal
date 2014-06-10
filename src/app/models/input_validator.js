define(['emitter_config','jquery','models/utilities'], function (emitterConfig, $, Utilities) {

  var InputValidator = function(input) {

    var self = this;
    var utility = new Utilities();
    self.valid = true;
    self.problems = [];

    self.registerProblem = function(problem) {
      self.problems.push(problem);
      self.valid = false;
    };

    // Evaluation code at the bottom of the class...
    if (isNaN(input)) self.registerProblem("Input is not a number.");
    // if (utility.isEqualToZero(input)) self.registerProblem("Input is is equal to zero");
    // if (utility.isLengthLessThanOne(input)) self.registerProblem("Input length is less than one");
    // if (utility.isEqualToASpace(input)) self.registerProblem("Input had a space");
  };

  return InputValidator;
});