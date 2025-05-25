//File System Module

const fs = require('fs');

// To read a file
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(err, data)
// })

const a = fs.readFileSync('file.txt')   //This intentionally blocks next printig line
console.log(a.toString())

// console.log("Finished reading file")

// To write a file
// fs.writeFile('file2.txt', 'Creating a file and inserting data into it !', () => {
//     console.log("File created and data inserted successfully")
// })

x = fs.writeFileSync('file2.txt', 'Inserting data 2');
console.log(x)