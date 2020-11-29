function createMessage(string) { // "Hello"  
  const result = [string];
  function inner(string) { // ...
    if (string === undefined) {
      return result.join(' ');
    }
    result.push(string);
    return inner;
  }
  return inner;
}

// console.log(createMessage("Hello")("World!")("how")("are")("you?")()); // === "Hello World! how are you?"

function sum(number) {
  let result = number;
  
  function inner(number) {
    if (!number) {
      number = 0;
    }
    result += number;
    // return result;
  }
  return inner(number);
}

console.log(sum(1)(2)(3));