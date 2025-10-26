// const express = require('express');
// const app = express();

// const router = express.Router();

// router.get('/', (req, res) =>{
//      res.send(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Homepage</title>
//     </head>
//     <body>
//       <h1>Homepage</h1>
//       <p>This is our Homepage.</p>
//     </body>
//     </html>
//   `);
// })

// router.get('/about', (req, res) =>{
//      res.send(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>About Us page</title>
//     </head>
//     <body>
//       <h1>About Us page</h1>
//       <p>This is our About Us page.</p>
//     </body>
//     </html>
//   `);
// })

// router.use((req, res) => {
//   res.status(404).send(`
//     <h1>404 - Page Not Found</h1>
//     <p>The page you're looking for doesn't exist.</p>
//   `);
// });

// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send(`
//     <h1>500 - Internal Server Error</h1>
//     <p>Something went wrong on the server.</p>
//   `);
// });

// module.exports = router;

const express = require('express');
const router = express.Router();

// Exercise 1: GET /
router.get('/', (req, res) => {
  res.send('<h1>Homepage</h1><p>This is our Homepage.</p>');
});

// Exercise 1: GET /about
router.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This is our About Us page.</p>');
});

// Exercise 2: POST /contact
router.post('/contact', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }
  res.status(201).json({ success: true, name, message });
});

// Exercise 3: PUT /profile/:id
router.put('/profile/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  res.json({ success: true, id, updated: { name, age } });
});

// 404 handler
router.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

module.exports = router;