// function even_or_odd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   }
//   return "Odd";
// }



// const even_or_odd2 = function (num){
//   return num % 2 === 0 ? "Even" : "Odd";
// }

foo(1,2,3);

// function expression
var foo = function(a, b, c) {
  console.log(a, b, c);
};

// function declaration
function foo(a, b, c) {
  console.log(a, b, c);
}

// [1,2,3].map(x => x ** 3) // [1, 8, 27]
// [1,2,3].map(function(x) { return x ** 3; }) // [1, 8, 27]