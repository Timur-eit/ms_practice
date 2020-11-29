function once(fn) {
  let execution = false;
  function foo(...args) {
    if (!execution) {
      execution = true;
      return fn(...args);
    }
  }

  return foo;
}



const sum = (a, b) => a + b;
const plusFive = (a) => a + 5;

const sumOnce = once(sum);
// function foo(...args) {
//   if (!execution) {
//     execution = true;
//     return sum(...args);
//   }
// }
const plusFiveOnce = once(plusFive);
// function foo(...args) {
//   if (!execution) {
//     execution = true;
//     return plusFive(...args);
//   }
// }

console.log(sumOnce(1,2))
console.log(sumOnce(3,4))
console.log(sumOnce(5,6))
console.log(sumOnce(3,7))

console.log(plusFiveOnce(7))
console.log(plusFiveOnce(3))