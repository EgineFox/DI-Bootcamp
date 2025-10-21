const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err.message);
    return;
  }

  console.log('Files in current directory:');
  files.forEach(file => {
    console.log('- ' + file);
  });
});
