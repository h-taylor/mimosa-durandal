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

		if(!outputHasBeenAssigned) finalOutput = input;
		return finalOutput;
	};

  };

  return InputValidator;
});

