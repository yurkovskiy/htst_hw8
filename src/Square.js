class Square {
  constructor(side) {
    this.side = side;
  }

  length() {
    return 4 * this.side;
  }

  square() {
    return Math.pow(this.side, 2);
  }
}

module.exports = Square;
