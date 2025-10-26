import { greet } from './greeting.js';
import { showMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

// Runs the full challenge sequence
async function runChallenge() {
  console.log(greet('Ekaterina')); // Task 1: Greeting
  showMessage();                   // Task 2: Chalk message
  await readFileContent();         // Task 3: File reading
}

runChallenge();