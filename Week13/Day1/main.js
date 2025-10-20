// console.log ('hi!')
// const { sayhi } = require("./utils.js");

// console.log(sayhi('Katya'));

import axios from 'axios';

const res = await axios.get('https://jsonplaceholder.typicode.com/users');
console.log(res.data);