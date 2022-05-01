const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.arr.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    if(!value) {
      this.arr.push('( )')
    } if(Number.isNaN(value)) {
      this.arr.push('( NaN )')
    } if(typeof value === 'boolean') {
      this.arr.push(`( ${value} )`)
    } if( value === null) {
      this.arr.push('( `null` )')
    } if(typeof value === 'object' && value !== null) {
      this.arr.push('( [object Object] )')
    } if(typeof value === 'string') {
      this.arr.push(`( ${value} )`)
    }
    else {
    this.arr.push(`( ${value} )`)
    }
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
   if(!Number.isInteger(position)) {
     this.arr = []
     throw new Error("You can't remove incorrect link!")
    } 
    if(position < 1 || position > this.arr.length - 1) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
      
    }

    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.arr.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    let res = this.arr.join('~~')
    this.arr = []
    return res

  }
};
// console.log(chainMaker.addLink(1).addLink(2).addLink().reverseChain().finishChain());
// console.log(chainMaker);
module.exports = {
  chainMaker
};
