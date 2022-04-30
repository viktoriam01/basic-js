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
  // let arr = [-1, 150, 190, 170, -1, -1, 160, 180]

  // создаем мап значений с индексами
// let mapped = arr.map(function(el, i) {
// return { index: i, value: el };
// });
// console.log(mapped );

// сортируем по возрастанию
// let sort = mapped.sort(function(a, b) {
     
//     if (a.value > b.value) {
//       return 1; }
  
//     if (a.value < b.value) {
//       return -1; }
      
//     return 0;
//   });
  
 
//  console.log(sort);

// Вриан 2 - разбивам на массив со значениями и массив с отсутствием значений

// let numArr = []
// let noneArr = []

// mapped.forEach(({index, value}) => {
//    return value !==-1 ? numArr.push({index, value}) : noneArr.push({index, value});
// });

// console.log(numArr);
// console.log(noneArr);

// воткнуть значения  noneArr в массив numArr по возрастаниюзначений индексов
// let res =[]
// noneArr.forEach(a => {
//   numArr.forEach(b => {
//     console.log("a", a.index);
//     console.log("b",b.index);
//     return res = (a.index === b.index - 1) ? [
//       numArr.slice(0, b.index),
//       a,
//       numArr.slice(b.index)
//     ] : numArr;
//   })
  
// })
// console.log(res);
}
module.exports = {
  sortByHeight
};






// другой вариант

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

 

// // Вриант 1 - через пузырек
// for (let i = 0; i < sort.length - 1; i++) {
//   // в рамках каждого прохода нам тоже нужно просматривать на один элемент меньше,
//   // ведь для последнего элемента мы не найдем следующий, с которым будем его сравнивать
//   // а ещё каждую итерацию будем смотреть на один элемент поменьше, ведь справа будет уже сортированная его часть
//   for (let j = 0; j < sort.length - 1 - i; j++) {
//     // если элемент слева больше элемента справа...
//     if (sort[j].index.value > sort[j + 1].index.value) {
//       /// ... меняем их местами
//       [sort[j], sort[j + 1]] = [sort[j + 1], sort[j]];
//     }
//   }

//   // logIteration(array);
// }
// // console.log(sort);