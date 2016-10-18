class Person {
  constructor (name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting () {
    return `Hi! I'm ${this.name}.`;
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old.`;
  }
  toString () {
    return JSON.stringify(this);
  }
}

var me = new Person('Andrew', 25);
console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());
