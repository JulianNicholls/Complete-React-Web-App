import Redux from 'redux';

console.log('Starting redux example');

function changeProp(obj, newName) {
  return {
    ...obj,
    name: newName
  };
}

var startObj = {
  name: 'Julian',
  age: 25
};

var endObj = changeProp(startObj, 'Andrew');

console.log(startObj);
console.log(endObj);
