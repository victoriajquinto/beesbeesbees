var RetiredForagerBee = function() {
  //retiredForagerBee is subclass of bee
  ForagerBee.call(this);
  //override age
  this.age = 40;
  //overridejob
  this.job = 'gamble';
  //override canFly
  this.canFly = false;
  //override color
  this.color = 'grey';

};
//retiredForagerBee delegates failed methods to Bee methods
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
//RetiredForagerBee constructor should be assigned to its own constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//override forage method
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(winnings) {
  //push winnings into inhereted treasureChest
  this.treasureChest.push(winnings);
};