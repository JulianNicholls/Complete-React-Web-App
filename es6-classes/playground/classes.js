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

class Child extends Person {
  constructor(name = 'A small nony mouse', age = 1, like = 'bikes') {
    // super() doesn't just set the parent attributes, it actually creates 'this'.
    super(name, age);

    this.like = like;
  }

  greeting() {
    return `Hiiiii, my name is ${this.name} and I like ${this.like}.`;
  }
}

class Baby extends Person {
  greeting() {
    return 'Wahhhhh!';
  }
}

let me = new Person('Julian', 36);
let him = new Person('Andrew');
let tara = new Child('Tara', 19, 'emo music');
let cyan = new Baby('Cyan', 1);
let amouse = new Person();
let achild = new Child();
let ababy = new Baby();

console.log(me.greeting());
console.log(him.greeting());
console.log(tara.greeting());
console.log(cyan.greeting());
console.log(amouse.greeting());
console.log(achild.greeting());
console.log(ababy.greeting());

console.log(me.description());
console.log(him.description());
console.log(tara.description());
console.log(cyan.description());
console.log(amouse.description());
console.log(achild.description());
console.log(ababy.description());

console.log({age: 36}.toString());
console.log(me.toString());
console.log(him.toString());
console.log(tara.toString());
console.log(cyan.toString());
console.log(amouse.toString());
console.log(achild.toString());
console.log(ababy.toString());
