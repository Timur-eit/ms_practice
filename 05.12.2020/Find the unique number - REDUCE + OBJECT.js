function findUnique(numbers) {
  // const entriesCount = {};

  // for (const number of numbers) {
  //   if (!entriesCount.hasOwnProperty(number)) {
  //     entriesCount[number] = 1;
  //   } else {
  //     entriesCount[number] += 1;
  //   }
  // }

  const entriesCount = numbers.reduce((acc, item) => ({
    ...acc,
    [item]: item in acc ? acc[item] + 1 : 1,
  }), {});
  
  console.log(entriesCount);
  
  return +Object.keys(entriesCount).find(key => entriesCount[key] === 1);

  // for (const number in entriesCount) {
  //   if (entriesCount[number] === 1) {
  //     return +number;
  //   }
  // }
  
}


console.log(findUnique([ 1, 4, 4, 5, 5, 3, 3, 2, 2 ]));


const numbers = [ 1, 4, 4, 5, 5, 3, 3, 2, 2 ];

const entriesCount = numbers.reduce((acc, item) => ({ ...acc, [item]: item in acc ? acc[item] + 1 : 1 }), {});
console.log(entriesCount);


const key = 'aaa';
const obj = {
  xxx: 123,
  yyy: 234,

  [key]: 100,
  key: 100
}


obj[key] = 100;

console.log(obj);