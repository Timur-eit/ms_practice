function askForMissingDetails(list) {
  
  const missingDataDevs = list.filter((dev) => {
    return (Object.values(dev)).some((item) => item === null);
  });
  
  return missingDataDevs.map((dev) => {
    let missingKey;
    for (const item of Object.entries(dev)) {
      if (item[1] === null) {
      missingKey = item[0];
      }
    }
    return { ...dev, question: `Hi, could you please provide your ${missingKey}.` };
  });
}


function askForMissingDetails(list) {
  return list
    .map((dev) => {
      const missingKey = Object.keys(dev).find(key => dev[key] === null);
      return missingKey && { ...dev, question: `Hi, could you please provide your ${missingKey}.` };
    })
    .filter(Boolean);
}

// A && B && C && D








var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

const answer = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
];


console.log(askForMissingDetails(list1));