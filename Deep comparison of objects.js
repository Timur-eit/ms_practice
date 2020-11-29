let a = { name: 'Joe'};
let b = { name: 'Joe'};


console.log(Object.getPrototypeOf(a));

function deepCompare(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// function deepCompare(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   } else if (Array.isArray(obj1)

//   }

// }



// https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript