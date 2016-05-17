function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('location not found');
}

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('location not found');
    }, 1000)
  });
}


getTempCallback('Bournemouth', function (err, temp) {
  if(err) {
    console.error('Error: ' , err);
  }
  else {
    console.log('Success: ', temp);
  }
});


getTempPromise('Bournemouth').then(function (temp) {
  console.log('Resolve: ', temp);
}, function (err) {
  console.error('Reject: ', err);
});

// Challenge

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    }
    else {
      reject("You must pass two numbers");
    }
  });
}

addPromise(23, 45).then(function (sum) {    // Good
  console.log('Resolve: ', sum);
}, function (err) {
  console.error('Reject: ', err);
});

addPromise('a', 45).then(function (sum) {   // Bad a
  console.log('Resolve: ', sum);
}, function (err) {
  console.error('Reject: ', err);
});

addPromise(23, 'a').then(function (sum) {   // Bad b
  console.log('Resolve: ', sum);
}, function (err) {
  console.error('Reject: ', err);
});
