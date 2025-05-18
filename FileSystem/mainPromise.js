import fs from 'fs/promises';
let b = await fs.writeFile('shouvik.txt', '\n\nThis is a amazing promise example');
let c = await fs.appendFile('shouvik.txt', '\n\nThis is a appended data');// if there is writing in the file then it will append the data but if there is no writing in the file then it will create a new file
let a = await fs.readFile('shouvik.txt');
console.log(a.toString());
// let d = await fs.unlink('shouvik.txt');// this will delete the file
