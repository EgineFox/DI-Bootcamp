let difficulty = 'easy'; 
let answerColor = null;
let isAnswer = false;
let score = {
    correct: 0,
    total: 0
}

let box = document.getElementById('colorBox');

let targetColor = { r: rnd(), g: rnd(), b: rnd() };

let countdownInterval = null;

// function for getting random color
function rnd() {
    return Math.floor(Math.random() * 256);
}


function toRgbString(color) {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

const generateColor = () => {
    return { r: rnd(), g: rnd(), b: rnd() };
}
// main function of game
function nextRound() {
    // changing flag
    clearInterval(countdownInterval);
    isAnswer = false;

    //generate new color
    targetColor = { r: rnd(), g: rnd(), b: rnd() };

    //show color in box
    box.style.background = toRgbString(targetColor);

    //generate answer options 
    renderOptions();
}

const renderOptions = () => {
    let count = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 4 : 6;
    let options = generateOptions(count, 80);
    options.forEach((color, index) => {
        let el = document.getElementById(`pickColor${index + 1}`);
        el.textContent = toRgbString(color);
        el.style.display = '';
        el.onclick = () => checkAnswer(color);
    });
    // скрыть неиспользуемые кнопки
    for (let i = options.length + 1; i <= 6; i++) {
        document.getElementById(`pickColor${i}`).style.display = 'none';
    }
}

// function difference of color option
const colorDiff = (a, b) => {
    return Math.abs(a.r-b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);
}

const generateOptions = (count, minDiff) => {
    let options = [targetColor];

    while (options.length < count) {
        let candidate = generateColor();

        // Check if candidate is different from target color
        let tooClose = options.some( existing => colorDiff(candidate, existing) < minDiff);

        if (!tooClose) {
            options.push(candidate);
        }
    }
    return shuffle(options);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap через деструктуризацию
  }
  return arr;
}

// Timer
function startCountdown() {
    let secs = 5;

    updateCountdownDisplay(secs);

    countdownInterval = setInterval(() => {
        secs--;

        if (secs <= 0) {
            clearInterval(countdownInterval);
            nextRound();
        } else {
                updateCountdownDisplay(secs);
        }
    }, 1000);
}

const updateCountdownDisplay = (seconds) => {
    let el = document.getElementById('countdownBox');
    el.textContent = `Next round after ${seconds}s...`;
}

const checkAnswer = (selectedColor) => {
    if (isAnswer) return;
    isAnswer = true;

    score.total++;

    let isCorrect = colorDiff(selectedColor, targetColor) === 0;

    if (isCorrect) {
        score.correct++;
        showFeedback('Right!', true);
    } else {
        showFeedback('Incorrect', false);
    }
    startCountdown();

    updateScore();
}

const updateScore = () => {
    let el = document.getElementById('scoreBox');
    if (el) el.textContent = `Score: ${score.correct} / ${score.total}`;
}

const showFeedback = (message, isCorrect) => {
    let divFeedback = document.getElementById('feedbackBox');
    divFeedback.textContent = message;
    divFeedback.classList.remove('correct', 'wrong'); 
    divFeedback.classList.add(isCorrect ? 'correct' : 'wrong');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('easyLevel').addEventListener('click', () => {
        difficulty = 'easy';
        nextRound();
    });
    document.getElementById('MediumLevel').addEventListener('click', () => {
        difficulty = 'medium';
        nextRound();
    });
    document.getElementById('HardLevel').addEventListener('click', () => {
        difficulty = 'hard';
        nextRound();
    });
    nextRound();
});