import assert from 'assert';

// function countLanguages(list) {
//   let languageCounter = {};

//   for (const developer of list) {
//     if (developer.language in languageCounter) {
//       languageCounter[developer.language] += 1;
//     } else {
//       languageCounter[developer.language] = 1;
//     }
//   }
//   return languageCounter;
// }


function countLanguages(list) {
  return list.reduce(function(prev, current) {
    if (current.language in prev) {
      prev[current.language] += 1;
    } else {
      prev[current.language] = 1;
    }
    return prev;
  }, {});
}


function countLanguages(list) {
  return list.reduce(function(prev, { language }) {
    if (!(language in prev)) {
      prev[language] = 0;
    }
    prev[language]++;
    return prev;
  }, {});
}


function countLanguages(list) {
  let languageCounter = {};

  for (const developer of list) {
    if (developer.language in languageCounter) {
      languageCounter[developer.language] += 1;
    } else {
      languageCounter[developer.language] = 1;
    }
  }
  return languageCounter;
}





var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

var answer = { C: 2, JavaScript: 1, Ruby: 1 };


console.log(countLanguages(list1));
assert.deepEqual(countLanguages(list1),answer);