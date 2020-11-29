function outed(meet, boss){
  const raitingValues = Object.values(meet);
  const generalRaiting = (raitingValues.reduce((prev, current) => prev + current) + meet[boss]) / (raitingValues.length);
  
  console.log(generalRaiting);
  
  return generalRaiting <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

// random tests ?

// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1