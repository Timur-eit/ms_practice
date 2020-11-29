// function isLanguageDiverse(list) {
//   const languagesNumbers = Object.values(list.reduce((prev, { language }) => {
//     if (language in prev) prev[language] += 1;
//     else prev[language] = 1;
//     return prev;
//   }, {}));

//   let maxNumber = Math.max(...languagesNumbers);
 
//   return languagesNumbers.every(num => (maxNumber / num) <= 2);
// }


function isLanguageDiverse(list) {
  const languagesNumbers = Object.values(list.reduce((prev, { language }) => {
    if (language in prev) {
      prev[language] += 1;
    } else {
      prev[language] = 1;
    }
    return prev;
  }, {}));

  const maxNumber = Math.max(...languagesNumbers);
  const minNumber = Math.min(...languagesNumbers);
 
  return maxNumber / minNumber <= 2;
}







var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list3 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

var list4 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];


console.log(isLanguageDiverse(list1));
console.log(isLanguageDiverse(list3));
console.log(isLanguageDiverse(list4));