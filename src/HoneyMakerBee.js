import Bee from './Bee'

class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super('make honey');
    
    this.age = 10;
    this.honeyPot = 0;
  }
  makeHoney () {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};

export default HoneyMakerBee;