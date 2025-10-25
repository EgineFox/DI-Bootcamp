const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let leaderboard = [];

app.post('/submit', (req, res) => {
  const { name, score } = req.body;
  if (!name || typeof score !== 'number') {
    return res.status(400).json({ error: 'Invalid data' });
  }
  const existingPlayer = leaderboard.find(entry => entry.name === name);
if (existingPlayer) {
    existingPlayer.score += score;
  } else {
    leaderboard.push({ name, score });
  }
 
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5);

  res.json({ leaderboard });
});


app.get('/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});