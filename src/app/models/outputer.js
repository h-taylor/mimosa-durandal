define(['emitter_config','jquery'], function (emitterConfig, $) {

  var Outputer = function() {

    var self = this;
    self.emitters = emitterConfig.emitters;

    self.getProperOutput = function(input){

      var finalOutput = "";
      var outputHasBeenAssigned = false;

      $.each(self.emitters(), function(index, value) {

        if(value.isInputModEqualToZero(input)) {
          finalOutput += value.output();
          outputHasBeenAssigned = true;
        }

      });

      if(!outputHasBeenAssigned) {
        finalOutput = input;
      }

      return finalOutput;
    };

  };

  return Outputer;
});