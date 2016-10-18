const obj = {
  name: 'Julian',
  printName: function () {
    console.log(`My name is ${this.name}.`);
  }
};

obj.printName();

setTimeout(obj.printName.bind(obj), 500);
setTimeout(obj.printName.bind({ name: 'not Julian' }), 800);
