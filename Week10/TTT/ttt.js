//Create 2 variables to hold the selected symbols : X or 0, after the user chooses, the computer will get the opposite symbol.
let player, computer, currentPlayer;


// Create an array to keep track of whats in each box of the board.
let turns = ['','','','','','','','',''];

let board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const choose = document.querySelector('.choose');
const buttonX = document.querySelector('#X');
const buttonO = document.querySelector('#O');

buttonX.addEventListener('click', function() {
        player = 'X';
        computer = 'O';
        currentPlayer = 'X';
        choose.style.display = "none";    
        board.style.display = "block";
        play();

    });
buttonO.addEventListener('click', function() {
        player = 'O';
        computer = 'X';
        currentPlayer = 'O';
        choose.style.display = "none";
        board.style.display = "block";
        play();
    });

const winCombos = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [6, 4, 2]
];

let running = false;

function play() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    running = true;
}


function cellClicked() {
    const cellIndex = parseInt(this.id); 

    if (turns[cellIndex] != "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
    if (running && currentPlayer === computer) {
    computerTurn();
    }
}

function updateCell(cell, index) {
     turns[index] = currentPlayer;
     cell.textContent = currentPlayer;

}


function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? "O" : "X";

} 

function checkWinner() {
    let roundWon = false;

    for (let i=0; i <  winCombos.length; i++) {
        const [a,b,c] = winCombos[i];
        const cellA = document.getElementById(a);
        const cellB = document.getElementById(b);
        const cellC = document.getElementById(c);

        if(cellA.textContent === currentPlayer &&             cellB.textContent === currentPlayer && cellC.textContent === currentPlayer) {
            roundWon = true;
            break;
        }
    }

    if(roundWon) {
        alert(`${currentPlayer} wins!`);
        running = false;
    } else if(!turns.includes("")) {
        alert(`Draw!`);
        running = false;
    } else {
        changePlayer();
    }

}


function restart(){

}

function computerTurn() {
    currentPlayer = computer;

    if (!turns.includes("") || !running) return;

    // Найти все пустые ячейки
    const emptyCells = [];
    for (let i = 0; i < turns.length; i++) {
        if (turns[i] === "") {
            emptyCells.push(i);
        }
    }

    // Выбрать случайную пустую ячейку
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const cell = document.getElementById(randomIndex);

    // Сделать ход
    turns[randomIndex] = computer;
    cell.textContent = computer;

    checkWinner();
   }


