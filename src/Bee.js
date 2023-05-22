var Bee = function() {
  Grub.call(this); //this = the new bee object, call applies correct 'this' object to Grub constructor
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing'
};
Bee.prototype = Object.create(Grub.prototype); //delegates failed bee prototype to grub prototype
Bee.prototype.constructor = Bee;


