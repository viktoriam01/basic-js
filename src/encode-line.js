const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');

  // let str ='abbcca'

  let res = ''
  let counter = 0
  let arr =[]

  for(let i = 0; i < str.length; i++){
    if(str[i] !== str[i +1]) {
      if(arr.includes(str[i])) {
        res += `${counter + 1}${str[i]}` 
        counter = 0
      } else {
      res += str[i]
    } 
  } else
    if (str[i] === str[i +1]){
      counter +=1
      arr.push(str[i])
    }

  }
   
 return res;
}

module.exports = {
  encodeLine
};

//   let set = new Set()
//   let map = new Map()

 
//  for (i = 0; i < str.length; i++) {
//    if(!set.has(str[i])) {
//      set.add(str[i])
//      map.set(str[i], 1)
//    } else {
//      map.set(str[i], map.get(str[i]) + 1)
//    }
//  }

//  console.log(set);
//  console.log(map);

//  let res = ''

//  for (let entry of map) {
  
//   if(entry[1] === 1) {
//     res += `${entry[0]}`
//   } else {
//   res += `${entry[1]}${entry[0]}`
//   }

//   }
// console.log(res);