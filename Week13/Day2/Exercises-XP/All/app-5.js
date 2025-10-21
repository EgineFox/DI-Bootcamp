const _ = require('lodash');
const { add, multiply } = require('./math.js');

// Custom math
const sum = add(10, 5);
const mul = multiply(4, 3);

// Lodash utilities
const numbers = [10, 5, 4, 3];
const max = _.max(numbers);
const min = _.min(numbers);
const shuffled = _.shuffle(numbers);

console.log(`Sum: ${sum}`);
console.log(`Mul: ${mul}`);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);
console.log(`Shuffled: ${shuffled}`);
