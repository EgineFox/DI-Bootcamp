// Part 1: Setting Up the Express Server
const express = require('express');
const app = express();

const { fetchPosts } = require('./data/dataService.js');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();

        res.status(200).json(posts);

        console.log("Posts successfully retrieved and sent as response");
    } catch (error) {
        res.status(500).json({ error: 'failed to fetch posts'});
    }
});


app.listen('5000',() => {
    console.log('server is running on port 5000');
} )

