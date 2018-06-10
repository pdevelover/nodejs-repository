var events =   require('events');

var util = require('util');

var Person = function(name){

  this.name = name;

};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');

var mary = new Person('Mary');

var roy = new Person('Roy');

var people = [james, mary, roy];

people.forEach(function(person){

  person.on('speak', function(mssg){

    console.log(person.name + ' said: ' + mssg);

  });

})

james.emit('speak', 'hi ninjas')

/*
var  myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (mssg) {

  console.log(mssg);

});

myEmitter.emit('someEvent', 'Hi ninjas');
*/
