const emojiPop = [
  { id: 1, name: 'face with tears of joy', emoji: '😂' },
  { id: 2, name: 'red heart', emoji: '❤️' },
  { id: 3, name: 'thumbs up', emoji: '👍' },
  { id: 4, name: 'rolling on the floor laughing', emoji: '🤣' },
  { id: 5, name: 'fire', emoji: '🔥' },
  { id: 6, name: 'smiling face with heart-eyes', emoji: '😍' },
  { id: 7, name: 'loudly crying face', emoji: '😭' },
  { id: 8, name: 'clapping hands', emoji: '👏' },
  { id: 9, name: 'folded hands (thank you/prayer)', emoji: '🙏' },
  { id: 10, name: 'party popper', emoji: '🎉' },
  { id: 11, name: 'sparkles', emoji: '✨' },
  { id: 12, name: 'smiling face with smiling eyes', emoji: '😊' },
  { id: 13, name: 'face blowing a kiss', emoji: '😘' },
  { id: 14, name: 'eyes', emoji: '👀' },
  { id: 15, name: 'thinking face', emoji: '🤔' },
  { id: 16, name: 'hundred points', emoji: '💯' },
  { id: 17, name: 'face with raised eyebrow', emoji: '🤨' },
  { id: 18, name: 'grimacing face', emoji: '😬' },
  { id: 19, name: 'face with hand over mouth', emoji: '🤭' },
  { id: 20, name: 'face screaming in fear', emoji: '😱' }
];

// counters of game
let isPlaying = false;
let totalGuesses = 0;
let correctGuesses = 0;
let wrongGuesses = 0;


const randomEmoji = array => {
    const correctIndex = Math.floor(Math.random() * array.length);
    const correctEmoji = array[correctIndex];

   const options = [correctEmoji];
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const candidate = array[randomIndex];
        if (!options.includes(candidate)) {
            options.push(candidate);
        }
    }

     for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    return { correct: correctEmoji, choices: options };

};

const mainEmoji = document.getElementById('mainEmoji');
const option1 = document.getElementById('op1');
const labelOption1 = document.querySelector(`label[for="${option1.id}"]`);
const option2 = document.getElementById('op2');
const labelOption2 = document.querySelector(`label[for="${option2.id}"]`);
const option3 = document.getElementById('op3');
const labelOption3 = document.querySelector(`label[for="${option3.id}"]`);
const option4 = document.getElementById('op4');
const labelOption4 = document.querySelector(`label[for="${option4.id}"]`);
const play_btn = document.getElementById('play');

const optionElements  = document.getElementsByClassName('options');

const submit_btn = document.getElementById('submit');

const form = document.getElementById('emojiForm');
const feedback = document.getElementById('feedback');

const nameInput = document.getElementById('playerName');


let score = 0;
let correctAnswer = null;

function startRound() {
  const { correct, choices } = randomEmoji(emojiPop);
  correctAnswer = correct.name;

  mainEmoji.textContent = correct.emoji;
  form.reset();
  feedback.textContent = '';

  Array.from(optionElements).forEach(el => {
    el.style.display = 'inline-block';
  });

  option1.value = choices[0].name;
  labelOption1.textContent = choices[0].name;
  option2.value = choices[1].name;
  labelOption2.textContent = choices[1].name;
  option3.value = choices[2].name;
  labelOption3.textContent = choices[2].name;
  option4.value = choices[3].name;
  labelOption4.textContent = choices[3].name;

  submit_btn.style.display = 'block';
}

play_btn.addEventListener('click', () => {
  if (!isPlaying) {
    startRound();
    play_btn.textContent = 'STOP';
    isPlaying = true;
    nameInput.disabled = true;
    score = 0;
    totalGuesses = 0;
    correctGuesses = 0;
    wrongGuesses = 0;
    scoreDisplay.textContent = 'Score: 0';

  } else {
    // stop game
    mainEmoji.textContent = '';
    feedback.textContent = '';
    submit_btn.style.display = 'none';

    Array.from(optionElements).forEach(el => {
      el.style.display = 'none';
    });

    play_btn.textContent = 'PLAY';
    isPlaying = false;

    const stats = document.getElementById('stats');
    stats.innerHTML = `
      <h3>📊 Statistics</h3>
      <p>Total guesses: ${totalGuesses}</p>
      <p>Correct guesses: ${correctGuesses}</p>
      <p>Wrong guesses: ${wrongGuesses}</p>
    `;
    nameInput.disabled = false;
     const playerName = nameInput.value.trim();
    if (playerName) {
      updateLeaderboard(playerName, score);
    }

  }
});



const scoreDisplay = document.getElementById('score'); 

submit_btn.addEventListener('click', (event) => {
  event.preventDefault();

   console.log('clicked');

const playerName = nameInput.value.trim();

if (!playerName) {
  feedback.textContent = '⚠️ Please enter your name before submitting.';
  return;
}



  const formData = new FormData(form);
  const guess = formData.get('guess');

  totalGuesses++;
  
  if (!guess) {
  feedback.textContent = '⚠️ Please select an option before submitting.';
  return;
}

  if (guess === correctAnswer) {
    score++;
    correctGuesses++;
    feedback.textContent = '✅ Correct!';
  } else {
    wrongGuesses++;
    feedback.textContent = `❌ Wrong! Correct answer was: ${correctAnswer}`;
  }

  scoreDisplay.textContent = `Score: ${score}`;

  // Start next round
 setTimeout(() => {
  startRound();
}, 1000);

});

function updateLeaderboard(name, score) {
  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, score })
  })
  .then(res => res.json())
  .then(data => {
    showLeaderboard(data.leaderboard);
  });
}

function showLeaderboard(data) {
  const board = document.getElementById('leaderboard');
  board.innerHTML = '<h3>🏆 Leaderboard</h3>';
  data.forEach((entry, index) => {
    board.innerHTML += `<p>${index + 1}. ${entry.name}: ${entry.score}</p>`;
  });
}



