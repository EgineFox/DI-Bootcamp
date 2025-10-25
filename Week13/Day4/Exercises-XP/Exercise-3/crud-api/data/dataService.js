// Part 2: Creating a Data Module for Axios
const axios = require('axios');

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
        } catch (error) {
            console.log('Error fetching posts:', error.message);
            throw error;
        }
};

module.exports = { fetchPosts };