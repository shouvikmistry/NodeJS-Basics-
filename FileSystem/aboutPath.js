import path from 'path';
let myPath = "C:\\Users\\shouv\\OneDrive\\Desktop\\Node\\NodeJS-Basics-\\FileSystem\\shouvik.txt";
console.log(path.extname(myPath)); 
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));

console.log(path.join('C:\\Users\\shouv\\OneDrive\\Desktop\\Node\\NodeJS-Basics-\\FileSystem', 'newFolder\\newFile.txt'));
