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
 
  // throw new NotImplementedError('Not implemented');
  // let arr = [-1, 150, 190, 170, -1, -1, 160, 180]

  // создаем мап значений с индексами
  let mapped = arr.map(function(el, i) {
  return { index: i, value: el };
  });
  

// сортируем по возрастанию
let sort = mapped.sort(function(a, b) {
     
    if (a.value > b.value) {
      return 1; }
  
    if (a.value < b.value) {
      return -1; }
      
    return 0;
  });


// Вриан 2 - разбивам на массив со значениями и массив с отсутствием значений

let numArr = []
let noneArr = []

mapped.forEach(({index, value}) => {
   return value !==-1 ? numArr.push(value) : noneArr.push({index, value});
});

// воткнуть значения  noneArr в массив numArr по возрастаниюзначений индексов

noneArr.forEach(a => {
   numArr.splice(a.index, 0, a.value)
  })
  
return numArr

}
module.exports = {
  sortByHeight
};


