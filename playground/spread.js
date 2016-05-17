function add(a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];

console.log(add(...toAdd));   // Spread out the array

var groupA = ['Julian', 'Clare'];
var groupB = ['Steven'];
var final  = [...groupB, 3, ...groupA]

console.log(final);

function greet(name, age) {
  console.log(`Hello ${name}, you are ${age}`);
}

// Challenge 1

var person  = ["Julian", 35];
var person2 = ["Clare", 43];

greet(...person);
greet(...person2);

// Challenge 2

var names = ['Mark', 'Patrick'];
var final = ['Sarah', ...names];

final.forEach((name) => {
  console.log(`Hi ${name}`);
});
