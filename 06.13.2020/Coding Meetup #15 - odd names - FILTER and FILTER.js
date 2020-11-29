function findOddNames(list) {
  return list.filter(({firstName}) => {
    
    const sumOfCharCodes = (Array.from(firstName)
      .map((char) => char.charCodeAt()))
      .reduce((acc, curr) => acc + curr, 0);

    return sumOfCharCodes % 2 === 1;
  });
}


function findOddNames(list) {
  return list.filter(({firstName}) => {
    return Array.from(firstName).reduce((acc, curr) => acc + curr.charCodeAt(), 0) % 2 === 1;
  });
}




var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1));



// str.charCodeAt(index)

// console.log('A'.charCodeAt());

// console.log((Array.from(list1[0].firstName)));