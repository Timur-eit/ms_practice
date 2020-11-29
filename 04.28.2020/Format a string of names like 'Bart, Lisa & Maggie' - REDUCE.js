function list(persons) {
  const names = persons.map(person => person.name);

  if (names.length === 0) {
    return '';
  }
  if (names.length === 1) {
    return `${names[0]}`;
  }
  if (names.length === 2) {
    return `${names[0]} & ${names[1]}`;
  }

  return `${names.slice(0, -1).join(', ')}& ${names[names.length - 1]}`;
}
    

const check11 = list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]); // returns 'Bart, Lisa & Maggie'
const check12 = list([ {name: 'Bart'}, {name: 'Lisa'} ]); // returns 'Bart & Lisa'
const check13 = list([ {name: 'Bart'} ]); // returns 'Bart'
const check14 = list([]); // returns ''

// console.log(check11);
// console.log(check12);
// console.log(check13);
// console.log(check14);


function listReduce(names) {
  return names.reduce(function(prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return `${prev} & ${current.name}`;
    } else {
      return `${prev}, ${current.name}`;
    }
  }, ''); // Empty string is neutral value like 0, is it?
}

const check21 = listReduce([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]); // returns 'Bart, Lisa & Maggie'
const check22 = listReduce([ {name: 'Bart'}, {name: 'Lisa'} ]); // returns 'Bart & Lisa'
const check23 = listReduce([ {name: 'Bart'} ]); // returns 'Bart'
const check24 = listReduce([]); // returns ''

console.log(check21);
console.log(check22);
console.log(check23);
console.log(check24);
