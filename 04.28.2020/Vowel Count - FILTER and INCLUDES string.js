// const vowels = ['a', 'e', 'i', 'o', 'u'];
// function getCount(str) {
//   let result = 0;
//   for (const letter of str) {
//     if (vowels.includes(letter)) {
//       result += 1;
//     }
//   }
//   return result;
// }

const getCount = (str) => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

Array.from({ length: 6 }, (_, i) => i + 1) //  [1,2,3,4,5,6]

console.log(getCount("abracadabra")); // 5

