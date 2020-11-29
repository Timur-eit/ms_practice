function filterAnagrams(word, words) {
  const sample = Array.from(word).sort().join('');
  return words.filter((item) => Array.from(item).sort().join('') === sample);
}


const check1 = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); // => ['aabb', 'bbaa']
const check2 = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // => ['carer', 'racer']
const check3 = anagrams('laser', ['lazing', 'lazy',  'lacer']); // => []

console.log(check2);