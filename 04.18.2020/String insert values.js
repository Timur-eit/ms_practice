const string1 = 'Hello {foo} - make me a {bar}';
const string2 = 'Hello {foo} - {foobar} make me a {bar}... {foo}!!?';

const object = {
  foo: 'Jack',
  bar: 'sandwich'
};


function format(str, obj) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "{") {
      result += str[i];
    } else {
      i++;
      let key = "";
      while (str[i] !== "}") {
        key += str[i];
        i++;
      }
      result += key in obj ? obj[key] : `{${key}}`;
    }
  }

  return result;
}


console.log(format(string1, object));