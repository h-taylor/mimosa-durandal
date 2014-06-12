define(['durandal/app', 'knockout','models/outputer'], function (app, ko, Outputer) {

  function Batch() {

    var self = this;
    var outputer = new Outputer();

    self.finalOutput = ko.observableArray();
    self.rangeValue = ko.observable();

    this.nameit = ko.computed(function(){

      self.finalOutput.removeAll();

      for(var i = 1; i <= self.rangeValue(); i++) {
        self.finalOutput.push(outputer.inputCheck(i));
      }

    });

  }

  return new Batch();

});
