class Grub {
  constructor (age, color, food, job) {
    this.age = age || 0;
    this.color = color || 'pink';
    this.food = food || 'jelly';
  }
  eat () {
    return 'Mmmmmmmmm jelly';
  }
};

export default Grub;