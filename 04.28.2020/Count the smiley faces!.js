const validSmiles = {
  eyes: [':', ';'],
  nose: ['-', '~'],
  mouth: [')', 'D'],
};
  
function countSmileys(arr) {
  const result = 0;
  for (const item of arr) {
    if (item.length === 2) {
      if (validSmiles.eyes.includes(item[0]) && validSmiles.mouth.includes(item[1])) {
        result++;
      }
    } else if ((item.length === 3)) {
      if (validSmiles.eyes.includes(item[0]) && validSmiles.nose.includes(item[1]) && validSmiles.mouth.includes(item[2])) {
        result++;
      }
    }
  }
  return result;
}


const check1 = countSmileys([]); // 0
const check2 = countSmileys([':D',':~)',';~D',':)']); // 4
const check3 = countSmileys([':)',':(',':D',':O',':;']); // 2
const check4 = countSmileys([';]', ':[', ';*', ':$', ';-D']); // 1

console.log(check4);