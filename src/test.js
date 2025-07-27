// console.log("hello world!");

let date;
date = new Date().toISOString().split('T')[0].split('-');
date = date[0] + "/" + date[1] + "/" + date[2]
console.log(date)