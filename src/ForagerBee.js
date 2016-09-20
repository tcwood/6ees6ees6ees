import Bee from './Bee'

class ForagerBee extends Bee {
  // TODO..
  constructor () {
    super('find pollen');
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage() {
    this.treasureChest.push('treasure');
  }
};

export default ForagerBee;