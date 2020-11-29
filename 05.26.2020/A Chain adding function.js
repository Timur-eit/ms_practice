// function add(n){
//   // if (n) return n;
//   let sum = 0;
//   return function(x) {
//     sum += (n + x);
//     return sum;
//   }
// }

// console.log(add(1)); // 3
// console.log(add(1)(2)); // 3

// console.log(add(1)(1)(1)); // 3

// console.log(add(1)(3)(4)(2)(5)(7)(100) == 122);
console.log(add(1)(3)(4)(2)(5)(7)(100));

function add(n) {
  let sum = n;

  inner[Symbol.toPrimitive] = () => sum;
  console.log(inner);

  function inner(x) {
    sum += x;
    return inner;
  };
  return inner;
}

// declaration 
// function f() {

// }

// expression
// const f = function g() {
//   console.log('f', f)
//   console.log('g', g)
// };

// f();
// g();

// const obj = {
//   q: 123,
//   ['w']: 456,
//   [Symbol.toPrimitive]: function() {
//     console.log('>>', this);
//     return JSON.stringify(this)
//   }
// }

// function a(x) {
//   console.log(x);
// }

// Number
// String
// Symbol
// null
// undefined
// Boolean
// 1n


// console.log(obj);

// console.log(`Hello, ${obj}!`);


// https://www.codewars.com/kata/a-chain-adding-function