// function findShort(s) {
//   const collOfLength = [];
//   for (const item of s.split(' ')) {
//     collOfLength.push(item.length)
//   }
//   return Math.min(...collOfLength);
// }

function findShort(s) {
  return Math.min(...(s.split(' ').map(item => item.length)));
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));