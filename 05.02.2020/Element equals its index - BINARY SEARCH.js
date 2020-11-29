// const indexEqualsValue = (arr) => arr.findIndex((number, index) => number === index);



// // function indexEqualsValue(arr, start = 0, end = arr.length - 1) {
// //   if (end < start || start < 0 || end >= arr.length) {
// //     return -1;
// //   }

// //   let mid = (start + end) / 2;

// //   if (arr[mid] === mid) {
// //     return mid;
// //   } else if (arr[mid] > mid) {
// //     return indexEqualsValue(arr, start, mid - 1);
// //   } else {
// //     return indexEqualsValue(arr, mid + 1, end);
// //   }
// // }

// function indexEqualsValue(arr, start = 0, end = arr.length - 1) {
//   let mid = Math.floor(arr.length / 2); 
  
//   if (arr[mid] <= mid) {
//     for (start; start < mid; start += 1) {
//       if (start === arr[start]) {
//         return start;
//       } 
//     }
//   }
  
//   for (mid; mid <= end; mid += 1) {
//     if (mid === arr[mid]) {
//       return mid;
//     }
//   }
//   return -1;
// }



console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]));


// [-5, 1, 2, 3, 4, 5, 7, 10, 15]
// [ 0, 1, 2, 3, 4, 5, 6, 7,  8]

// [-4, -2, 1, 3, 5, 11, 22, 23, 44, 55, 67, 86]

function indexEqualsValue(arr) {
  let start = 0;
  let end = arr.length;
  let result = -1;

  while (start < end) {
    let mid = Math.floor((end + start) / 2);
    if (arr[mid] > mid) {
      end = mid;
    } else if (arr[mid] < mid) {
      start = mid + 1;
    } else {
      result = mid;
      end = mid;
    }
  }

  return result;
}
