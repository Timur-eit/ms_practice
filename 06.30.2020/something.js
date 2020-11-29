let sum = 1;

function inner(x) {
  sum += x;
  return inner;
};

// console.log( inner(2) );
// console.log( sum );

function sayHi(phrase, name) {
  console.log(`${phrase} ${name}`);
}

// setTimeout(sayHi, 3000, 'Hi', 'John');

let timerId = setInterval(() => {
  console.log('tick');
}, 1000);

setTimeout(() => {
  clearInterval(timerId);
  console.log('stop');
}, 10e3);