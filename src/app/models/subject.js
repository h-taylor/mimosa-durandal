define(['models/utilities'], function (Utilities) {
    var Subject = function(input) {

        var self = this;
        var utility = new Utilities();

        self.inputData = input;
        self.valid = true;
        self.problems = [];

        self.registerProblem = function(problem) {
            self.problems.push(problem);
            self.valid = false;
            // console.log(self.valid);
        };

        self.getProblems = function() {
            var problemList = self.problems.join('; ');
            console.log(problemList);
        };

        self.checkInput = function() {
            var input = self.inputData;
            if (input === undefined) input = 1;
            if (isNaN(input)) self.registerProblem("Input is not a number");
            if (utility.isEqualToZero(input)) self.registerProblem("Input is equal to zero");
            if (utility.isLengthLessThanOne(input)) self.registerProblem("Input length is less than one");
            if (utility.isEqualToASpace(input)) self.registerProblem("Input had a space");
        };
    };
  return Subject;
});