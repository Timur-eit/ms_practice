let numbers = [1, 2, 3, 4, 5];

// Array.prototype = {
//   ...
// }

Array.prototype.square = function() {
  return this.map((num) => Math.pow(num, 2));
}; 
Array.prototype.square = function() {
  return this.map((num) => Math.pow(num, 2));
};
Array.prototype.cube = function() {
  return this.map((num) => Math.pow(num, 3));
};
Array.prototype.average = function() {
  return Math.round(this.reduce((a, b) => a + b ) / this.length);
};
Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};
Array.prototype.even = function() {
  return this.filter((num) => num % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter((num) => num % 2 !== 0);
};

// getNumMethods(numbers);
// console.log(numbers);

// ?
// f.prototype.hello = function() {
//   console.log(`Hello, ${this.name}!`);
// };


// console.log(numbers.square());  // must return [1, 4, 9, 16, 25]
// console.log(numbers.cube());    // must return [1, 8, 27, 64, 125]
// console.log(numbers.average()); // must return 3
// console.log(numbers.sum());     // must return 15
// console.log(numbers.even());    // must return [2, 4]
// console.log(numbers.odd());     // must return [1, 3, 5]


// https://www.codewars.com/kata/525d50d2037b7acd6e000534
