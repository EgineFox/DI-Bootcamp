const fs = require("fs");

const readFile = filePath => {
    fs.readFile(filePath, 'utf-8', (err, data) =>{
        if (err) {
            console.log(err.message);
        } else {
            console.log(data);
        }
    });
}

const writeFile = (filePath, content) => {
     fs.writeFile(filePath, content, 'utf-8', err => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Successfully wrote to file');
        }
     });
}

module.exports = { readFile, writeFile };
