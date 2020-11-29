// function greetDevelopers(list) {
//   let result = [];
  
//   for (let developer of list) {
//     let newList = {};
//     for (const item in developer) {
//       newList[item] = developer[item]; 
//     }
//     newList.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
//     result.push(newList); 
//   }
//   return result;
// }

function greetDevelopers(list) {
  return list.map((dev) => {
    return { ...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?` };
  });
}

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

console.log(greetDevelopers(list1));
