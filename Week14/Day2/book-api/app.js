import express from 'express';
const app = express();

import booksRoutes from './routes/booksRoutes.js';

app.use(express.json());
app.use('/api/books', booksRoutes);


app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
})