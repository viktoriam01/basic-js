const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  //  throw new NotImplementedError('Not implemented');

  // console.log(+names[3].substr([[names[3].length - 2]], 1));

  let obj = {}

  names.forEach(elem => {
    if(!obj[elem]) {
    obj[elem] = 1
    } else {
      let counter = obj[elem]
      obj[elem] += 1
      obj[elem+`(${counter})`] = 1
    }
  })

return Object.keys(obj);

}

module.exports = {
  renameFiles
};



// let counter = 0;
//   let sortedNames = []
//   for(i=0; i < names.length; i++) {
    
//       if(!sortedNames.includes(names[i])) {
//         sortedNames.push(names[i])
//       } else
//       if(sortedNames.includes(names[i])) {
        
//         let count = +names[i].substr([[names[i].length - 2]], 1)
//         if(Number.isNaN(count)) {
//           sortedNames.push(`${names[i]}(1)`)
//         } else {
//         sortedNames.push(`${names[i]}(${count+1})`)
//         // console.log(count);
//         }
//       }
//   }


// for(i = 0; i < arr.length; i++){
//   for(j = 0; j < res.length; j++) {
//     if(res.length === 0) res.push(arr[i])
//     if(arr[i].name === res[j].name) {
//       let counter = res[j].count
//       res.push({name: arr[i].name, count: counter + 1})
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res


// let arr = [];

//  names.forEach(elem => {
//     arr.push({name:elem, count: 1});
  
//  })

// let res =[];
  
//   for (let obj of arr) {
//     console.log(111);
//     if (!res.length) {
//       res.push(obj);
//       console.log('res with obj', res);
//   }
//       else {
    
//     for(let item of res) {
//       console.log(item);
      
//       if(obj.name === item.name) {
//         res.push({name: obj.name, count: obj.count + 1});
//       } else {
//         res.push(obj);
//       }
//     }
//   }
//   }
//   console.log(res);