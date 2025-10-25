const express = require('express');
const app = express();

const product_routes = require('./routes/products.js')

app.listen(5000, () => {
    console.log('Port is running on port 5000')
});

app.use(express.json);
app.use('/api/products', product_routes)