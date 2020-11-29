// function compose(...fns) {
//   return function(number) {
//     let result = number;
//     for (let i = fns.length - 1; i >= 0; i -= 1) {
//       result = fns[i](result);
//     }
//     return result;
//   }
// }

function compose(...fns) { // [cube, plusFive, square]
  return function(number) {
    return fns.reduceRight((acc, fn) => fn(acc), number);
  }
}

const plusFive = x => x + 5;
const square = x => x ** 2;
const cube = x => x ** 3;

// const result = cube(plusFive(square(2))); // 729
// const result = compose(cube, plusFive, square)(2); // 729

const compute = compose(cube, plusFive, square);

console.log(compute(2)) // 729
console.log(compute(0)) // 125
console.log(compute(0)) // 125
