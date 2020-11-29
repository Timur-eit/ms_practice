const rgb = (r, g, b) => {
  const collOfRgb = [r, g, b];

  return collOfRgb.map(item => {
    if (item < 0) {
      item = 0;
    } else if (item > 255) {
      item = 255;
    }
    return item.toString(16).padStart(2, '0');
  }).join('');
};

console.log(rgb(36, 171, 0)); // '#24ab00')


// https://learn.javascript.ru/array-methods#preobrazovanie-massiva