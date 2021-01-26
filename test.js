const fs = require('fs');

let data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

console.log(typeof(data));
console.log(typeof(dataObj));

