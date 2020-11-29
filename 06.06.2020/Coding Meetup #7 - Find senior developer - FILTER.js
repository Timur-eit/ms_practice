function findSenior(list) {
  let maxAgeDev = list[0];
  for (const dev of list) {
    if (maxAgeDev.age < dev.age) maxAgeDev = dev;
  }
  return list.filter(({ age }) => age === maxAgeDev.age);
}

function findSenior(list) {
  const maxAgeDev = Math.max(...list.map(({age}) => age));
  console.log(maxAgeDev);
  return
}


var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];


console.log(findSenior(list1));


// const maxAge = Math.max(...list1.map((dev) => dev.age));
// console.log( list1.filter(({ age }) => age === maxAge) );
