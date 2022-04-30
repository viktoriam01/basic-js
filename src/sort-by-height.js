const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 
  throw new NotImplementedError('Not implemented');

// var mapped = arr.map(function(el, i) {
// return { index: i, value: el };
// });
// console.log(mapped );



// arr.sort(function(a, b) {
//     if (a === - 1 || b === -1)  return 0;
//     if (a === - 1 && b === -1)  return 0; 
//   if (a > b) {
//     return 1; }

//   if (a < b) {
//     return -1; }
    
//   return 0;
// });

// console.log(arr);

// let numArr = []
// let noneArr = []

// mapped.forEach(({index, value}) => {
//   console.log(value);
//   return value !==-1 ? numArr.push({index, value}) : noneArr.push({index, value});
// });

// console.log(numArr);
// console.log(noneArr);


  



// noneArr.forEach(a => {
//   numArr.forEach(b => {
    
//     return a.index === b.index - 1 ? [
//       ...numArr.slice(0, b.index),
//       a,
//       ...numArr.slice(b.index)
//     ] : numArr;
//   })

// let sort = mapped.sort(function(a, b) {
//   console.log(a.index.value);
//   if (a.index.value > b.index.value) {
//     return 1; }
//   if (a.index.value < b.index.value) {
//     return -1; }
//   return 0;
// });
// console.log(sort);



}

module.exports = {
  sortByHeight
};
