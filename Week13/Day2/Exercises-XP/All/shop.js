
const allProducts = require('./products.js');

const findPrice = product => {
    const found = allProducts.find(p => p.name === product);
    if (found) {
        console.log(`Category of ${product} is ${found.category}. Cost of ${product} = ${found.price}$`);
    } else {
        console.log (`Product ${product} is not found...`)
    }
};

findPrice('Bread');
findPrice('Beef');
findPrice('Apples');
findPrice('Banana');
