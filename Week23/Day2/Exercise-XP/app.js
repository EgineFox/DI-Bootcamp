const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routers/auth');

const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('JWT Authentication Server is running!');
});

const start = () => {
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})}

start();