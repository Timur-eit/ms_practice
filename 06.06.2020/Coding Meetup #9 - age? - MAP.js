function isAgeDiverse(list) {
  const ageGroupsList = list.map(({age}) => {
    let ageGroup;
    if (age < 10) ageGroup = 1;
    else if (age > 100) ageGroup = 10;
    else ageGroup = parseInt(age / 10);
    return ageGroup;
  });
  return Array.from(new Set (Array.from(ageGroupsList))).length === 10;
}


function isAgeDiverse(list) {
  const ageGroupsList = list.map(({age}) => {
    if (age < 10) return 1;
    if (age > 100) return 10;
    return Math.trunc(age / 10);
  });
  return new Set(ageGroupsList).size === 10;
}


// teens <= 19
// twenties = 20 - 29
// thirties = 30 - 39
// forties = 40 - 49
// fifties = 50 - 59
// sixties = 60 - 69
// seventies = 70 - 79
// eighties = 80 - 89
// nineties = 90 - 99
// centenarian >=100




var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 148, language: 'JavaScript' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 158, language: 'JavaScript' },
];


console.log(isAgeDiverse(list1));