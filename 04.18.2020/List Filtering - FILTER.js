// function filter_list(l) {
//   const result = [];
//   for (const item of l) {
//     if (Number.isInteger(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

function filter_list(l) {
  return l.filter(item => typeof item !== "string");
}

// string
// number
// bigint
// undefined
// boolean
// symbol

// console.log(typeof null);
// // typeof x === "object" && x !== null
// console.log(typeof (() => {}));
// console.log(typeof [1,2,3,4]);

// 123456.65465576653

// 1.2345665465576653 × 10^17
// string
// number
// bigint
// null
// undefined
// boolean
// symbol

// new Array()

// const s = Symbol()
// obj = { a: 1 }
// const x = 'a';
// obj[x] = 8;
// obj[s] = 123;

// obj[Symbol.toPrimitive] = () => "hello";

// console.log(obj + "1234");

const obj = {
  a: 'letter a',
  b: 'letter b',
};

console.log(typeof null); // object!

// object

// console.log(filter_list([1,'a','b',0,15, 8.8]));