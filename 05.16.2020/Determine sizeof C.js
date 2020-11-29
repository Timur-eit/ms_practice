// structure size = sum sizes
// union size = max(size)

const legend = {
  'char': 1,
  'short': 2,
  'int': 2,
  'long': 4,
  'long long': 8,
  'float': 4,
  'double': 8,
  'unsigned char': 1,
  'unsigned short': 2,
  'unsigned int': 2,
  'unsigned long': 4,
  'unsigned long long': 8,
};

function sizeof(datatypes) {
  if (typeof datatypes === 'string') {
    return legend[datatypes];
  }
  if (datatypes.type === 'struct') {
    return datatypes.members.reduce((acc, curr) => acc + sizeof(curr), 0);
  }
  if (datatypes.type === 'union') {
    return Math.max(0, ...datatypes.members.map(sizeof));
  }
}



const struct = {
  type: "struct",
  members: [
    "int",
    "int",
    "float",
    {
      type: "union",
      members: []
    }
  ]
} // 8

console.log(sizeof(struct));


const composite3 = {
  type: "struct",
  members: [
    "unsigned char",
    "unsigned char",
    "unsigned char",
    "double",
    "double",
    {
      type: "union",
      members: [
        "unsigned short",
        "unsigned short",
        "unsigned short",
        "long long",
        "float",
        "float",
        {
          type: "struct",
          members: ["long", "unsigned int"]
        }
      ]
    },
    "short"
  ]
}; // 29

console.log(sizeof(composite3));