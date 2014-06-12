define(['knockout','models/emitter'], function (ko,Emitter) {
	function EmitterConfig() {

		this.emitters = ko.observableArray();
		this.emitters.push(new Emitter("Fizz Emitter", 3, "Fizz"));
		this.emitters.push(new Emitter("Buzz Emitter", 5, "Buzz"));
		this.emitters.push(new Emitter("Woof Emitter", 7, "Woof"));

		this.newE = function() {
			var emitter = new Emitter("Unnamed Emitter");
			this.emitters.push(emitter);
		};

	}
	return new EmitterConfig();
});
