const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let leaderboard = [];

app.post('/submit', (req, res) => {
  const { name, score } = req.body;
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);
  res.json({ message: 'Score submitted', leaderboard });
});

app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});