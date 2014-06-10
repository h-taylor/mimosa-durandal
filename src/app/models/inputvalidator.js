define(['emitter_config','jquery','models/utilities'], function (emitterConfig, $, Utilities) {

  var InputValidator = function() {

	var self = this;
	self.emitters = emitterConfig.emitters;

	self.inputCheck = function(input) {

		var utility = new Utilities();
		var finalOutput = "";
		var outputHasBeenAssigned = false;
		input = utility.trimWhiteSpaceFromString(input);

		$.each(self.emitters(), function(index, value) {
			if(value.isInputModEqualToZero(input)) {
				finalOutput += value.output();
				outputHasBeenAssigned = true;
			}
		});

		if(!outputHasBeenAssigned) {
			finalOutput = input;
		}

		if(isNaN(input)) {
			finalOutput = "Not Valid Data";
		}
		else if(utility.isEqualToZero(input)) {
			finalOutput = "0";
		}
		else if(utility.isLengthLessThanOne(input)) {
			finalOutput = "" + input;
		}
		else if(utility.isEqualToASpace(input)) {
			finalOutput = "Not Valid Data";
		}

		return finalOutput;

	};

  };

  return InputValidator;
});

