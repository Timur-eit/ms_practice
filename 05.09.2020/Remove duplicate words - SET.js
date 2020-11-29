import assert from 'assert';

function removeDuplicateWords (s) {
  const splitedString = s.split(' ');
  const result = new Set();
  // console.log(result);
  for (const word of splitedString) {
    result.add(word);
  }
  return Array.from(result).join(' ');
}

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
// assert(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') === 'alpha beta gamma delta');


const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
const arr = string.split(' ');

const unique = new Set(arr);
console.log(Array.from(unique).join(' '));


