// return the magic index
// A[1...n-1] - ??
function findMagic(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr[i]) {
      return i;
    }
  }
  return -1; // why -1 ??
}

const arr = [
  {name: 'Alex', age: 15},
  {name: 'Tom', age: 22},
];

arr.filter(person => person.age === 15)[0];
arr.find((person, index) => person.age === 15);


// [10000000, 5, 2]
// const findMagic2 = (arr) => arr.findIndex(i => i === arr[i]);
const findMagic2 = (arr) => arr.findIndex((elem, index) => elem === index);

console.log(findMagic([-20,-10,2,10,20]));
console.log(findMagic([6, 5, 83, 5, 3, 18]));

console.log(findMagic2([-20,-10,2,10,20]));
console.log(findMagic2([6, 5, 83, 5, 3, 18]));