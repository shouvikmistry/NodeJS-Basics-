import fs from 'fs';
import fsPro from 'fs/promises';
import { get } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
// let files = fs.readdir(__dirname) //Directory name not working because of module

/*
Why This Happens?
    In CommonJS (require), __dirname is automatically available.

    In ES Modules (import), you must manually construct it using import.meta.url.
*/



const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function getFiles() {
let files = await fsPro.readdir(__dirname)

console.log(files);
}

// getFiles().catch(console.error);


for (let file of files) {
    console.log(`File: ${file}`);
    
}
