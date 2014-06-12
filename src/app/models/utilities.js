define([], function() {
	var Utilities = function() {

		this.isEqualToZero = function(val) {
			var isValZero = false;

			if(parseInt(val) === 0) {
				isValZero = true;
			}
			return isValZero;
		};

		this.isLengthLessThanOne = function(val) {
			var isValLengthLessThanOne = false;

			if(val.length < 1) {
				isValLengthLessThanOne = true;
			}

			return isValLengthLessThanOne;
		};

		this.isEqualToASpace = function(val) {
			var isValEqualToASpace = false;

			if(val === " ") {
				isValEqualToASpace = true;
			}

			return isValEqualToASpace;
		};

		this.trimWhiteSpaceFromString = function(val) {
			return String(val).replace(/^\s\s*/, ' ').replace(/\s\s*$/, ' ');
		};
	};
	return Utilities;
});