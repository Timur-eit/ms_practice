// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.slice(0, i).reduce((a, b) => a + b, 0) === arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
//       return i;
//     }
//   }
//   return -1;
// }


function findEvenIndex(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  let sumLeft = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (sumLeft === sum - sumLeft - arr[i]) {
      return i;
    }
    sumLeft += arr[i];
  }

  return -1;  
}


const arr1 = [1,2,3,4,3,2,1];
const arr2 = [20,10,-80,10,10,15,35];

console.log(findEvenIndex(arr1));


