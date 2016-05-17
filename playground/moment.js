// THIS WON"T WORK FROM THE PLAYGROUND DIRECTORY.
// COPY IT TO THE React-Todo DIRECTORY TO RUN IT.

var moment = require('moment');

var now = moment();
var timestamp = now.unix();
var time_ago = timestamp - (14 * 86400);

console.log('It is currently:', now.format());
console.log('Unix Timestamp: ', timestamp);

console.log('Converted back: ', moment.unix(timestamp).format('HH:mm [on] Do MMM YYYY'));

if(timestamp - time_ago < 15 * 86400) {
  console.log("Time Ago:", moment.unix(time_ago).fromNow())
}
else {
  console.log("Time Ago:", moment.unix(time_ago).format('HH:mm [on] Do MMM YYYY'));
}
