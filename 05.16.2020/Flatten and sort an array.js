// "use strict"

// function f() {
//   for (i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// f();

// const flattenAndSort = (array) => flatten(array).sort((a, b) => a < b ? -1 : 1);

// function flatten(arr) {
//   const result = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       result.push(...flattenAndSort(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

function flat(arr) {
  return arr.reduce(function(acc, current) {
    return Array.isArray(current) ? [...acc, ...flattenAndSort(current)] : [...acc, current];
  }, []);
}

const flattenAndSort = (arr) => flat(arr).sort((a, b) => a < b ? -1 : 1);


// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(flat([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));