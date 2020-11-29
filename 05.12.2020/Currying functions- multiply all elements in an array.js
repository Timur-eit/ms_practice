// function multiplyAll(arr) {
//   return function multiply_all(int) {
//     return arr.map((x) => x * int);
//   }
// }

const multiplyAll = (arr) => (int) => arr.map((x) => x * int);
// const multiplyAll = (arr, int) => arr.map((x) => x * int);

// console.log(multiplyAll([1, 2, 3])(2));
// console.log(multiplyAll([1, 2, 3], 2));


const f1 = multiplyAll([1,2,3,4]); // (int) => [1,2,3,4].map((x) => x * int);
const f2 = multiplyAll([3,3,3]);   // (int) => [3,3,3].map((x) => x * int);

console.log(f1(3))
console.log(f1(4))
console.log(f1(10))

console.log(f2(10))
console.log(f2(10))



// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.