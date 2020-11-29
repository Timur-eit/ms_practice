// https://www.codewars.com/kata/54c27ef1fb7da0118600046a/train/javascript

function chain(fns) {
  let result = { previousResult: 0 };
  
  for (const key in fns) {
    result[key] = function(x, y) {
      if (!y && fns[key].length === 2) {
        y = x;
        x = this.previousResult;
      } else if (!x && fns[key].length === 1) {
        x = this.previousResult;
      }
      let newResult = {};
      Object.assign(newResult, this);
      newResult.previousResult = fns[key](x, y);
      return newResult;
    }
  }
  
  result.execute = function () {
    return this.previousResult;
  }
  return result;
}


function sum(x, y) {
  return x + y;
}

function double(x) {
  return x * 2;
}

function minus(x, y) {
  return x - y;
}

function addOne(x) {
  return x + 1;
}

let c = chain({ sum: sum, minus: minus, double: double, addOne: addOne });
// console.log(c);

let c1 = c.sum(4, 5);
let c2 = c1.sum(5);

console.log(c1.execute()); // - Expected: 9, instead got: 14
console.log(c.sum(1, 5).minus(7).execute()); // - Expected: -1, instead got: -7


