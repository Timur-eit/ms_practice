const pluck = (objs, name) => objs.map((object) => object[name]);

console.log(pluck([{a:1}, {a:2}], 'a'), [1,2]);