function solve(words) {
  return words
    .map((word) => word
      .toLowerCase()
      .split('')
      .filter((item, index) => item.charCodeAt() - 96 === index + 1)
      .length
  );
}

console.log(counter(["abode","ABc","xyzD"]));




