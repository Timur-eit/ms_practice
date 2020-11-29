// let temp = a;
// a = b;
// b = temp + b;

function genfib() {
  let a = 1;
  let b = 0;
  return function() {
    [a, b] = [b, a + b];
    return a;
  }
}

function genfib() {
  const x = [0, 1];
  return function() {
    x.push(x[0] + x[1]);
    return x.shift();
  }
}

// let a = 5;
// let b = 8;



var fib = genfib();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());




// fib(); // -> returns 0
// fib(); // -> returns 1
// fib(); // -> returns 1
// fib(); // -> returns 2



// https://www.codewars.com/kata/522498c9906b0cfcb40001fc/javascript


