class Person {
  constructor(name = 'A nony mouse', age = 18) {
    this.name = name;
    this.age  = age;
  }

  greeting() {
    return `Hi, I'm ${this.name}.`
  }

  description() {
    return `${this.name} is ${this.age} years old.`
  }

  toString() {
    return JSON.stringify(this);
  }
}

let me = new Person('Julian', 36);
let him = new Person('Andrew');
let amouse = new Person();

console.log(me.greeting());
console.log(him.greeting());
console.log(amouse.greeting());

console.log(me.description());
console.log(him.description());
console.log(amouse.description());

console.log({age: 36}.toString());
console.log(me.toString());
console.log(him.toString());
console.log(amouse.toString());
