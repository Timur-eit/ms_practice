function intersection(left, right) {
  const result = [];
  for (const item of left) {
    if (right.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(intersection(
	[1, 2, 3, 4, 5],
	[2, 8, 3]
));

