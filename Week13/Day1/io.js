import fs from 'fs';

fs.readFile('example.js', 'utf-8', (err, data)=> {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(data);
})