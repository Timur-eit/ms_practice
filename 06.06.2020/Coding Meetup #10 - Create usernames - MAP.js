function addUsername(list) {
  const todayYear = (new Date()).getFullYear();
  return list.map((dev) => {
    return { ...dev, username: `${dev.firstName.toLowerCase()}${dev.lastName.slice(0, 1).toLowerCase()}${todayYear - dev.age}` };
  });
}


var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

// firstName: 'Emily', lastName: 'N.', age: 30, username: 'emilyn1990'

console.log(addUsername(list1));



function addUsername(list) {
  const todayYear = new Date().getFullYear();
  return list.map((dev) => ({
    ...dev,
    username: `${dev.firstName}${dev.lastName[0]}${todayYear - dev.age}`.toLowerCase(),
  }));
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

