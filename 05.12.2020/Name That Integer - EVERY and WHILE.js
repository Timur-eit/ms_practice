function detectInt(...fns) {
  let i = 1;
  while (true) {
    if (fns.every((fn) => fn(i))) {
      return i;
    }
    i++;
  }
}


console.log(detectInt(
  x => x % 3 === 0,
  x => x % 5 === 0,
  x => x > 38,
));

// 45

console.log(
  detectInt(
    x => x % 5 === 0,
    x => x % 3 === 0,
  )
); 