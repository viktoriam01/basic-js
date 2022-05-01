const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   
  let arr = n.toString().split('')
  let resArr= []

  for(i = 0; i < arr.length; i++) {
     arr.splice(i, 1)
     resArr.push(Number(arr.join('')))
     arr = n.toString().split('')
  }
  
  return Math.max(...resArr)
 
}

module.exports = {
  deleteDigit
};
