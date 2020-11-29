function convertToObject() {
  const obj = () => arguments;
  return obj();
}

function smartSum(...arg) {
  const numbers = [];
  
  getProp(convertToObject(arg));
  

  function getProp(obj) {
    for (let prop in obj) {
      if (typeof (obj[prop]) === 'object') {
        getProp(obj[prop]);
      } else {
        numbers.push(obj[prop]);
      }
    }
  }
  return numbers.reduce((a, b) => a + b);
}

// console.log(smartSum(4, 5, [[6, [7]], 8], 9));



function smartSum2(...arg) {
  return arg.reduce((a, b) => a + (typeof b === 'number' ? b : smartSum(...b)), 0);
}

// console.log(smartSum2(4, 5, [[6, [7]], 8], 9));

// console.log(smartSum(4, 5, [[6, [7]], 8], 9));
console.log(convertToObject(4, 5, [[6, [7]], 8], 9));
