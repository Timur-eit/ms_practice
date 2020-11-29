// function args_count(...args) {
//   return args.length;
// }

// const args_count = (...args) => args.length;

function f() {
  const args_count = () => arguments;
  console.log(args_count(1, 2, 3))
}

f(4, 5, [[6], 7], 8);

