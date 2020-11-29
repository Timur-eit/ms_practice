// function getFirstPython(list) {
//   let result;
//   for (const developer of list) {
//     if (developer.language === 'Python') {
//       result = `${developer.firstName}, ${developer.country}`;
//       break;
//     }
//   }
//   return result === undefined ? 'There will be no Python developers' : result;
// } 

// function getFirstPython(list) {
//   const developer = list.find((dev) => dev.language === 'Python');
//   return developer ? `${developer.firstName}, ${developer.country}` : 'There will be no Python developers';
// }

function getFirstPython(list) {
  for (const developer of list) {
    if (developer.language === 'Python') {
      return `${developer.firstName}, ${developer.country}`;
    }
  }
  return 'There will be no Python developers';
} 





var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'und' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'und' },
];

console.log(getFirstPython(list1));