// function one(name, location) {
//   console.log('Name:', name, 'Location:', location);
// }
//
// function two() {
//   console.log('Args:', arguments);
//
//   one.apply(undefined, arguments);
// }
//
// two('Julian', 'Bournemouth');
//
// two.apply(undefined /* this */, ['not Julian', 'Poole']);


const add     = (a, b) => a + b;
const square  = (a) => a * a;

const callAndLog = (func) => {
  return function() {
    const res = func.apply(undefined, arguments);

    console.log(`Result is ${res}`);

    return res;
  };
};

const addAndLog    = callAndLog(add);
const squareAndLog = callAndLog(square);

console.log(add(34, 56));
console.log(square(25));

addAndLog(56, 67);
squareAndLog(14);
