// const maps = (arr) => arr.map(x => x * 2);


const map = (arr, fn) => {
  return arr.reduce((acc, current) => [...acc, fn(current)], []);
}

// [] 1 => [1]
// [1] 2 => [1, 4]
// [1, 4] 3 => [1, 4, 9]
// [1, 4, 9] 4 => [1, 4, 9, 16]

// console.log(map([1,2,3,4], x => x ** 2)) /// [1, 4, 9, 16]
console.log(map([1,2,3,4], x => x + 5)) /// [6, 7, 8, 9]

