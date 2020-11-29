Array.prototype.groupBy = function(callback = x => x) {
  let resultObj = {};

  for(const x of this) {
    const key = callback(x);
    if (!(key in resultObj)) {
      resultObj[key] = []
    }
    resultObj[key].push(x);
  }

  return resultObj;

  const keys = this.reduce((acc, curr) => {
    let key = (callback !== undefined ? callback(curr) : curr);
    if (!acc.includes(key)) {
      acc.push(key);
    }
    return acc.sort((a, b) => a - b);
  }, []);

  for (const key of keys) {
    resultObj[key] = this.filter(x => (callback !== undefined ? callback(x) : x) === key);
  }  
  
  return resultObj;
};


console.log(
  [1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;})
); // ↓
// {
//   0: [3, 6],
//   1: [1, 4, 1, 1],
//   2: [2, 2, 5]
// }


let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
console.log(words.groupBy(function(_) {return _.length;})); //↓
// '{"3":["one","two","six","ten"],"4":["four","five","nine"],"5":["three","seven","eight"]}'


// https://www.codewars.com/kata/53c2c3e78d298dddda000460/train/javascript







// ==== previous solution ====

// Array.prototype.groupBy = function(callback) {

//   if (callback === undefined) {
//     return this.reduce((acc, curr, _, arr) => {
//       acc[curr] = arr.filter(x => x === curr);
//       return acc;
//     }, {});
//   }
//   const keys = this.reduce((acc, curr) => {
//     let item = callback(curr);
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc.sort((a, b) => a - b);
//   }, []);

//   let resultObj = {};
//   for (const key of keys) {
//     resultObj[key] = this.filter(x => key === callback(x));
//   }
//   return resultObj;
// };