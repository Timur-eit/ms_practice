function makeLooper(str) {
  let index = 0;
  return function() {
    if (index === str.length) {
      index = 0;
    }
    return str[index++];
  }
}



var abc = makeLooper('abc');
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());

