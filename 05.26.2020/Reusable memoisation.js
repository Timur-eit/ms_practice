function memo(fn) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = fn(x);
    cache.set(x, result);
    return result;
  };
}






// // Possibly your memo function cannot handle `Object` arguments - Expected: 23843, instead got: 140000

// console.log(typeof memo);

// const square = (n) => {
//   let x = 0;
//   for(let i = 0; i < 2e9; i++) {
//     x++;
//   }
//   return n ** 2;
// }

// const mSquare = memo(square);



// console.log(new Date());
// console.log(mSquare(5)) // 2s
// console.log(new Date());
// console.log(mSquare(5)) // 0.001s
// console.log(new Date());
// console.log(mSquare(5)) // 0.001s
// console.log(new Date());


// // Implement a reusable memoisation function
// // that, given a function of one argument, returns a memoised function of one argument.


// // Functions of more than one argument can be memoised by currying the function and memoising it for every argument, one at a time. This has easier reusability than having a different memoisation component for every number of arguments.
// // ( This scenario will be tested. )




// // https://www.codewars.com/kata/5b773b698adeaeb6b80000df


const obj1 = {};
const obj2 = { name: 'John' };
const obj3 = { name: 'Mary' }; 

obj1[obj2] = true;

console.log(obj1[obj3]);