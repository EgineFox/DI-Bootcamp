const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

const port = 3000;
//middleware

// serve static files
app.use(express.static(path.join(__dirname,'public')));
app.use('/api', userRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.listen(port, () => {
 console.log(`Server is running on port ${port}`)
});