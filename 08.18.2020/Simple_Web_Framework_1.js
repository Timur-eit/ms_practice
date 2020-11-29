class Router {
  #cache = Object.create(null);
  
  bind(requestText, requestType, requestResult) {
    const id = requestText + '#' + requestType;
    this.#cache[id] = {
      text: requestText,
      type: requestType,
      action: requestResult,
    }
  }
  
  runRequest(requestText, requestType) {
    const id = requestText + '#' + requestType;
    return id in this.#cache ? this.#cache[id].action() : 'Error 404: Not Found';
  }
}

// function Router() {
//   // this = { __proto__: Router.prototype };
//   this.cache = Object.create(null);
//   // return this;
// }

// Router.prototype.bind = function(requestText, requestType, requestResult) {
//   const id = requestText + '#' + requestType;
//   this.cache[id] = {
//     text: requestText,
//     type: requestType,
//     action: requestResult,
//   }
// };

// Router.prototype.runRequest = function(requestText, requestType) {
//   const id = requestText + '#' + requestType;
//   return id in this.cache ? this.cache[id].action() : 'Error 404: Not Found';
// };


// 123456789123456789 % 1000000 === 456784

let router = new Router;


router.bind('/hello', 'GET', function() { return 'hello world'; } );
router.bind('/login', 'GET', function() { return 'Please log-in.'; });
router.bind('/lGET', 'POST', function() { return 'LOG IN'; });
router.bind('/qPOST', 'GET', function() { return 'QWERTY'; });
console.log(router.cache);
// console.log(router.#cache);

console.log( router.runRequest('/hello', 'GET') ); // => 'hello world'
console.log( router.runRequest('/hello', 'POST') ); // => 'Error 404: Not Found'
console.log( router.runRequest('/login', 'GET') ); // => 'Please log-in.'
// console.log( router.runRequest('/lGET', 'POST') ); // => 'LOG IN'

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript


