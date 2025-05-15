const fs = require('fs');
const { start } = require('repl');

console.log('Starting the file system operations...');
// Create a new directory
console.log("starting");
fs.writeFileSync('shouvik.txt', 'Hello World!');// writeFileSync is asynchronous but it blocks the event loop
console.log("ending");

console.log("starting");
fs.writeFile('shouvik2.txt', 'Hello World!2',()=>{
    console.log("done");
    fs.readFile('shouvik2.txt', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data.toString());
    });
});
console.log("append program starting");

fs.appendFile("shouvik.txt", "appended data", (e) => {
    if (e) {
        console.log(e);
    } else {
        console.log("Data appended successfully.");
    }
});
console.log("ending");

