// SOLUTION

// function processArray(arr, callback) {
//   const result = [];
//   for (const item of arr) {
//     result.push(callback(item));
//   }
//   return result; 
// }

// const 'processArrayRefact' = (arr, callback) => arr.map(callback);
// const 'processArrayRefact' = (arr, callback) => arr.map(x => callback(x));

console.log(['2','2','2','2'].map((x, index, arr) => parseInt(x)));
console.log(['2','2','2','2'].map((x, i) => parseInt(x, i)));


// // TEST
// let myArray = [1, 2, 3, 4];
// myArray = 'processArrayRefact'(myArray, function (a) {
//   return a * 2;
// });

// console.log(myArray);

// TEST FOR CODEWARS
// Test.describe("Sample tests", function() {
//   Test.it("Should pass Sample tests"), function() {
//     Test.assertDeepEquals(processArray(([1, 2, 3, 4], function (a) { return a * 2 }), [2, 4, 6, 8]));
//   };
// });


