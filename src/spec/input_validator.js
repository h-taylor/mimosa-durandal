define(['jasmine', 'emitter_config','jquery','models/utilities','models/input_validator'], function(jasmine, EmitterConfig, $, Utilities, InputValidator) {
    describe('InputValidator', function() {

        var inputValidator;

        beforeEach(function() {
          utility = new InputValidator();
        });

        it("should return Fizz if matches 3", function() {
            expect(inputValidator.inputCheck(3)).toEqual("Fizz");
        });

        it("should return Buzz if matches 5", function() {
            expect(inputValidator.inputCheck(5)).toEqual("Buzz");
        });

        it("should return Woof if matches 7", function() {
            expect(inputValidator.inputCheck(7)).toEqual("Woof");
        });

        it("should return FizzBuzzWoof if matches 105", function() {
            expect(inputValidator.inputCheck(105)).toEqual("FizzBuzzWoof");
        });

        it("should return 0 if matches 0000000000", function() {
            expect(inputValidator.inputCheck("000000000")).toEqual("0");
        });

        it("should return Not Valid Data if matches asdfasd", function() {
            expect(inputValidator.inputCheck("asdfasd")).toEqual("Not Valid Data");
        });
    });
});