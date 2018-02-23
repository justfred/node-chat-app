const moment = require('moment');

// 0 = Jan 1st 1970 00:00:00 am UTC
// 1000 = 1 secon

// var date = new Date();
// console.log(date.getMonth());

var createdAt = new Date().getTime();
var date = moment(createdAt);
// date.add(1, 'year');
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('kk:mm:ss'));
