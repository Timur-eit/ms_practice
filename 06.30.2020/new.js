// function wrapper(exports, require, module, __filename, __dirname) {
  // const _ = require('lodash');
  // const g = () => {
  //   console.log(arguments);
  // }
  // g('qwerty');

  // exports.g = g;
  console.time('x');
  setTimeout(() => {
    console.log(123);
    console.timeEnd('x');
  }, 1000);
  for(let i = 0; i < 3e9; i++);
  console.log(567);


// }