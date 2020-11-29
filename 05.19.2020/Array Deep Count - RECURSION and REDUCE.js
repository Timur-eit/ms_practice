// function deepCount(arr){
//   let sumOfLength = 0;
  
//   if (arr.every((item) => !Array.isArray(item))) {
//     sumOfLength = arr.length;
//   } else {
//     for (const item of arr) {
//       sumOfLength += deepCount(item);
//       }
//     }
//   return sumOfLength;
// }


function deepCount(arr){
  let sumOfLength = 0;

  for (const item of arr) {
    sumOfLength += 1;
    if (Array.isArray(item)) {
      sumOfLength += deepCount(item);
    }
  }
  return sumOfLength;
}

// const deepCount = arr => arr.reduce((sum, item) => sum + (Array.isArray(item) ? deepCount(item) : 0), arr.length);

console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(["x", "y", ["z"]])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
