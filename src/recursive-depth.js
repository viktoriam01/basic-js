const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
           
      let max = 1;
      let counter = 1;

      arr.forEach(el => {
         
        if(Array.isArray(el)) {
          counter += this.calculateDepth(el);  
          max = Math.max(max, counter)
          counter = 1
          }
        })
    
      return max;
      
   }
   
}

// let arr = [1, [8, [[]]], 2, 3, [8, []], 4, 5, []]
// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth(arr))

module.exports = {
  DepthCalculator
};
