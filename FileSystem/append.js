const fs = require('fs');
const path = require('path');

fs.appendFile('shouvik.txt', ' Appended data ', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended successfully.');
        console.log('Reading the file after appending:');
        fs.readFile('shouvik.txt', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
            } else {
                console.log(data.toString());
            }
        });
        
    }
});