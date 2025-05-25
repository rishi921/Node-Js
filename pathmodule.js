//Path Module

const path = require('path');

const a1 = path.basename('C:\\temp\\myfile.txt');
const a2 = path.dirname('C:\\temp\\myfile.txt');
const a3 = path.extname('C:\\temp\\myfile.txt')
const a4 = path.extname(__filename);
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)