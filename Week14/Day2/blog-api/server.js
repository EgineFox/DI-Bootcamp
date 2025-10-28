import express from 'express';
import db from './config/db.js'; // assuming db.js exports a Knex instance
import postsRoutes from './routes/postsRoutes.js';

const app = express();
app.use(express.json()); 
const port = process.env.PORT || 3000;


// Routes
app.use('/posts', postsRoutes);

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});