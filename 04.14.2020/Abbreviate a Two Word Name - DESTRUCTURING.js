function abbrevName(fullname){
  const [name, surname] = fullname.split(' ');

  return `${name[0]}.${surname[0]}`.toUpperCase()
}

// const name = splittedName[0];
// const surname = splittedName[1];

// const [name, surname] = splittedName;