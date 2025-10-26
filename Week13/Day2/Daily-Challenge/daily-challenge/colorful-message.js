import chalk from 'chalk';

// Displays a colorful message in the terminal using Chalk
function showMessage() {
  console.log(chalk.cyan.bold('This is my colorful daily message!'));
}

export { showMessage };