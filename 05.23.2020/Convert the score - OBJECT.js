const scores = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  nil: 0,
};


function scoreboard(string) {
  return string
    .split(' ')
    .filter((item) => item in scores)
    .map((word) => scores[word]);
    // .reduce(function(acc, current) {
    //   if (current in scores) {
    //     acc.push(scores[current]);
    //   }
    //   return acc;
    // }, []);
}

console.log(scoreboard("The score is four nil")); //, [4,0], "Should return: [4,0]");
console.log(scoreboard("new score: two three")); //, [2,3], "Should return: [2,3]");
console.log(scoreboard("two two")); //, [2,2], "Should return: [2,2]");
console.log(scoreboard("Arsenal just conceded another goal, two nil")); //, [2,0], "Should return: [2,0]");


// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d