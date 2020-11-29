// function add(n) {
//   return function addNumber(Num) {
//     return n + Num;
//   }
// }

const add = (n) => (Num) => n + Num;

console.log(add(1)(3)); // 4

const z = add(5);

z(10) // 15
z(20) // 25