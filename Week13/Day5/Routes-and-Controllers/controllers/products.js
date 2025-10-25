const products = require('../data.js')

const getProducts = (req, res) => {
    res.json(products);
}

const getProduct = (req, res) => {
    const id = Number(req.params.productID);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
}

const createProduct = (req, res) => {
    const newProduct = {
        id: products.lenght + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(product);
    res.status(201).json(newProduct);
}

const updateProduct = (req, res) => {
    const id = Number(req.params.productID);
    const index = products.find(p => p.id === id);
    
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    
    products[index] = updatedProduct;
    res.status(200).json('Product updated');
}

const deleteProduct = (req, res) => {
    const id = Number(req.params.productID);
    const index = products.find(p => p.id === id);

    products.splice(index, 1);
    res.status(200).json('Product deleted');
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}