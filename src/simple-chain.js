const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length && Number.isInteger(position)) {
        this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp;
    temp = this.chain.join('~~');
    this.chain = [];
    return temp;
  }
};

module.exports = {
  chainMaker
};
