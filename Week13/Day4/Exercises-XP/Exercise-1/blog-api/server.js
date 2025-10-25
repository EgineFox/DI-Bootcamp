const express = require('express');
const app = express();

// data array (db);
const blogPosts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is the first post on my new blog. Stay tuned for updates!"
  },
  {
    id: 2,
    title: "JavaScript Tips and Tricks",
    content: "In this post, I’ll share some useful JavaScript techniques for beginners and pros alike."
  },
  {
    id: 3,
    title: "Why I Love Coding",
    content: "Coding allows me to build things from scratch, solve problems, and constantly learn new skills."
  },
  {
    id: 4,
    title: "Top 5 VS Code Extensions",
    content: "Here are my favorite Visual Studio Code extensions that boost productivity and code quality."
  },
  {
    id: 5,
    title: "How to Start a Blog with Express.js",
    content: "This tutorial walks you through setting up a simple blog using Node.js and Express."
  }
];


// GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.json(blogPosts);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({error: 'Post not found'});
    }
});

//POST /posts: Create a new blog post.
app.use(express.json()); // parse json body content - middleware 

app.post("/posts", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return req.status(400).json({ error: 'Title and content are required'});
    }
  const newPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = blogPosts.findIndex((post)=> post.id === id);
    if (index === -1) {
        return res.status(404).send('Post not found');
    }
    const updatedPost = {
        id: blogPosts[index].id,
        title: req.body.title,
        content: req.body.content,
    } ;
    blogPosts[index] = updatedPost;
    res.status(200).json('Post updated');
});

//DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = blogPosts.findIndex((post)=> post.id === id);
    if (index === -1) {
        return res.status(404).send('Post not found');
    }
    blogPosts.splice(index, 1);
    res.status(200).json('Post deleted');
});

// universal handle 404 error 
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// handle server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(3001, () => {
    console.log('server is listening on port 3001')
})