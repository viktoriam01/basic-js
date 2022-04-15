const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {

  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  
  let newArr = []

  for(i=0; i < arr.length; i++) {

            
      if(arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next') {
        newArr.push(arr[i])} else {

        if(arr[i] === '--double-next') {
              if(i !== arr.length-1)  {
                newArr.push(arr[i+1], arr[i+1])
                i +=1;
          } else {
            newArr=newArr
          }
        }

        if(arr[i] === '--double-prev') {
          if(i===0) {
            newArr = newArr
          } else if(arr[i-2] =='--discard-next') {
            newArr = newArr
          } else {
            newArr.push(arr[i-1]) 
          }
       
        }

        if(arr[i] === '--discard-prev') {
          if(i === 0 && arr.length ===2) {
            newArr.push(arr[i])
          } else if(i === 0) {
            newArr=newArr
          }
          else if(arr[i-2] === '--discard-next') {
            newArr = newArr;
          } else {
            newArr.pop(arr[i-1])
            
          }
                   
        }

        if(arr[i] === '--discard-next') {
          if(i !== arr.length-1) newArr = newArr;
          i +=1;
        } 
      
    }
  }

  return newArr
}


module.exports = {
  transform
};

