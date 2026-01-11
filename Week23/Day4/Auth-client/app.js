const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const { testConnection } = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('JWT Authentication Server is running!');
});

const start = async () => {
  try{
    await testConnection();
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server: ', error);
    process.exit(1);
    
  }};
    


start();