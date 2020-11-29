// [1, [2, [3, null]]] => [3, [2, [1, null] ] ]

function reverseList(list) {
  
  let items = null;

  for (let node = list; node !== null; node = node[1]) {
    // console.log(node[0]);
    items = [node[0], items];
  }

  return items;
}

console.log(reverseList([1, [2, [3, null] ] ]));


// https://www.codewars.com/kata/52f6be83172a8ba0be000342/train/javascript