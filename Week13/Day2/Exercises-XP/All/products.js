// Exercise 1: Multiple Exports and Import using CommonJS syntax
// Instructions

// Create a file named products.js.
// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

const products = [
    {
        name: 'Apples',
        price: 2.99,
        category: 'Produce' 
    },
    {
        name: 'Milk',
        price: 3.50,
        category: 'Dairy' 
    },
    {
        name: 'Bread',
        price: 4.25,
        category: 'Bakery' 
    },
    {
        name: 'Beef',
        price: 6.75,
        category: 'Meat' 
    }
];

// Export this array using the Common JS syntax.

module.exports = products;