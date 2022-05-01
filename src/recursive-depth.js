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
    throw new NotImplementedError('Not implemented');
  //   let arr = [1, [8, [[]]], 2, 3, [8, []], 4, 5, []]
     
    
  //   const getDepth = function(arr) {
  //     let max = 1
  //     let counter
  //     arr.forEach(el => {
  //       if(!Array.isArray(el)) {
  //         counter = 1;
  //       } else 
  //       if(Array.isArray(el)) {
  //         counter +=1;
  //         getDepth(el)
  //         console.log(counter);
       
  //       }
        
  //     })
  //     console.log(counter);
  //   }
   
   }
}

module.exports = {
  DepthCalculator
};
