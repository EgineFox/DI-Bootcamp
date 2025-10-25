const express = require('express');
const app = express();

const router = require('./routes/index.js');

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})

app.use('/', router);