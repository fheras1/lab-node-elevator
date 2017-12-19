const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator();

const john = new Person("john", 2, 5);
const mac = new Person("mac", 1, 10);
const david = new Person("david", 4, 6);
const helen = new Person("helen", 4, 1);
const henry = new Person("henry", 9, 4);

elevator.start();
setTimeout(function() {
  elevator.call(john);
}, 500);

setTimeout(function() {
  elevator.call(mac);
}, 500);

setTimeout(function() {
  elevator.call(david);
}, 500);

setTimeout(function() {
  elevator.call(helen);
}, 500);

setTimeout(function() {
  elevator.call(henry);
}, 500);
