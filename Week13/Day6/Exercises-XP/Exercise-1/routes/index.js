const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res) =>{
     res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Homepage</title>
    </head>
    <body>
      <h1>Homepage</h1>
      <p>This is our Homepage.</p>
    </body>
    </html>
  `);
})

router.get('/about', (req, res) =>{
     res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>About Us page</title>
    </head>
    <body>
      <h1>About Us page</h1>
      <p>This is our About Us page.</p>
    </body>
    </html>
  `);
})

router.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  `);
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`
    <h1>500 - Internal Server Error</h1>
    <p>Something went wrong on the server.</p>
  `);
});

module.exports = router;