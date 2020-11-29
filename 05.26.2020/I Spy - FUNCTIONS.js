function spyOn (func) {
  let calls = 0;
  let values = new Set;
  let returned;
  
  function inner(...args) {
    const result = func(...args);
    
    console.log(args);
    calls++;
    args.forEach(arg => values.add(arg));
    console.log(values);
    returned = result;
    return returned;
  }
  
  inner.callCount = () => calls;
  inner.wasCalledWith = (val) => values.has(val);
  inner.returned = (val) => val === returned;

  return inner;
}

const sum = (a, b) => a + b;
const adder = spyOn(sum);
console.log( adder(6, 8) );
// console.log( adder.callCount() ); // ? callCount находится внутри spyOn - как ее видно в глобальном окружении?
// console.log( adder.wasCalledWith(6) ); // тот же вопрос
// console.log( adder.wasCalledWith(1) );
// console.log( adder.returned(14) );


// function returns1 () { return 1; }

// var spy = spyOn(returns1);

// console.log( spy.callCount() ); // 0
// console.log( spy.returned(1) ); // false
// console.log( spy.wasCalledWith('hello')); // false

// spy('hello', 'hi', 'howdy');
// spy('goodbye', 'bye', 'see ya');

// console.log( spy.callCount() ); // 2
// console.log( spy.returned(1) ); // true
// console.log( spy.wasCalledWith('hi') ); // true
// console.log( spy.wasCalledWith('bye') ); // true



// https://www.codewars.com/kata/i-spy