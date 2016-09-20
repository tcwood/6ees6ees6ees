import Grub from './Grub'

class Bee extends Grub {
  // TODO..
  constructor (job) {
    super(5, 'yellow');
    this.job = job || 'Keep on growing';
  }
};

export default Bee;