// Object.definedProperties = function (obj, properties) {
//   if (properties) {
//     let propertiesKeys = Object.keys(properties);
//     for (const key of propertiesKeys) {
//       obj[key] = properties[key].value;
//     }
//   }
//   return obj;
// };


function A(a,b,c,d,e) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;

  this.sayHelo = foo() {};

  // return {a,b,c,d,e, __proto__: A.prototype};
}

A.prototype.f = function() {
  // ...
}

function A(a,b,c,d,e) {
  return {a,b,c,d,e, __proto__: Object.prototype};
}



new A(1,2,3,4,5)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Object.create = function (prototype, properties) {

  if (typeof prototype !== 'object') {
    throw new TypeError('parameter is not object and is not null');
  }
  let resultObj;
  if (prototype === null) {
    resultObj = Object.setPrototypeOf({}, null);
  } else {
    function f() {}
    f.prototype = prototype;
    resultObj = new f;
  }



  if (properties !== undefined) {
    Object.defineProperties(resultObj, properties);
  }

  return resultObj;
};

// ??? Object.create(proto, properties) must not catch exception thrown by inner call to Object.definedProperties()


let citizen = {
  sleep: function () { return "zzZ..."; },
  panic: function () { return "AaAaAaAa!"; }
};

let veteran = Object.create(citizen, {
  panic: {
    value: function () {
      return "SNAFU";
    }
  }
});

let nullObj = Object.create(null, {
  panic: {
    value: function () {
      return "SNAFU";
    }
  }
});


// https://www.codewars.com/kata/5366cfe48d004ce19600104b/train/javascript