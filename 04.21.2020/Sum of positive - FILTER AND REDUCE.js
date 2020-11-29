function positiveSum(arr) {
//   const collOfPositive = [];
//   for (const item of arr) {
//     if (item > 0) {
//       collOfPositive.push(item);
//     }
//   }

//  arr.filter(x => x > 0)

  return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}

console.log(positiveSum([-1, -2, -1, -2]));

// https://learn.javascript.ru/type-conversions
// const a = ...
// const b = ...
// const c = ...

console.log(a == b); // true
console.log(a == c); // true
console.log(b == c); // false