function frequency(arr, {
  compareTo = (a, b) => a < b ? -1 : 1,
  criteria = x => x,
} = {}) {

  const coll = new Map();
  
  for (let item of arr.map(criteria)) {
    if (!coll.has(item)) {
      coll.set(item, 1);
    } else {
      coll.set(item, coll.get(item) + 1);
    }
  }

  return Array.from(coll).sort((a, b) => compareTo(a[0], b[0], a[1], b[1]));
}


// function comparator(a, b) {
//   return a - b;
// }

function alphabeticalCompare(value1, value2) {
  if (String(value1) < String(value2)) {
    return -1;
  } else if (String(value1) > String(value2)) {
    return 1;
  } else {
    return 0;
  }
}

console.log( frequency([1, 10, 12, 2, 1, 10, 2, 2], { compareTo: alphabeticalCompare }) ); //[[1, 2], [2, 3], [10, 2], [12, 1]



function frequencyCompare(_value1, _value2, freq1, freq2) {
  return freq2 - freq1;
}

console.log(frequency(['Peter', 'Anna', 'Rose', 'Peter', 'Peter', 'Anna'], { compareTo: frequencyCompare }));



const obj = {
  a: 5,
  b: 'qwe',
}

const a = obj.a;

function f({ a }) {
  
}





// function frequency(arr, options) {
//   const coll = {};
//   for (const item of arr) {
//     if (item in coll) {
//       coll[item] += 1;
//     } else {
//       coll[item] = 1;
//     }
//   }
  
//   const subResult = Array.from(Object.entries(ojb));
//   // console.log(subResult);
//   // const comparator = Object.keys(options).join('');
//   //console.log(comparator);
  
//   return options === undefined ? subResult : subResult.sort(options);
// }
