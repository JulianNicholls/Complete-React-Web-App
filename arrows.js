// var names = ['Julian', 'Tara', 'Steve', 'Sarah'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('Arrow', name);
// });
//
// names.forEach((name) => console.log('SingleArrow', name) );
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe("Julian"));
//
// var person = {
//   name: 'Julian',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   },
//   greetArrow: function () {
//     names.forEach((name) => console.log(this.name + ' says hi to ' + name));
//   }
// }
//
// person.greet();
// person.greetArrow();
//

// Challenge

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(1, 5));
console.log(addStatement(9, 1));

console.log(addExpression(4, 3));
console.log(addExpression(2, 10));
