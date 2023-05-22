var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};
HoneyMakerBee.prototype = Object.create(Bee.prototype); //delegated failed honeymaker prototypes to bee prototypes
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function(honeyPot) {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function(honeyPot) {
  this.honeyPot--;
};

