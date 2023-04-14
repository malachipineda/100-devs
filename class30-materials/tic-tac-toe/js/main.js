// Turns
let turnCounter = 1;
let playerTurn = '';
let gameStarted = false
let gameWon = false

//Board
const gameBoard = document.querySelectorAll('td');

//Game Start Button
document.querySelector('#startGame').addEventListener('click', startGame)
function startGame() {
    //Start the game
    gameStarted = true
    turnCounter = 1
    playerTurn = 'x'
    // Clear the board
    gameBoard.forEach((boardSpace) => boardSpace.innerText = '')
    document.querySelector('h1').innerText = `Turn ${turnCounter} | X's Turn`
    document.querySelector('#startGame').innerText = 'New Game'
    
}

//Win conditions

function checkForWin(board) {
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let checkWin of gameBoard) {
        if (
            gameBoard[checkWin[0]].innerText == gameBoard[checkWin[1]].innerText &&
            gameBoard[checkWin[1]].innerText == board[checkWin[2]].innerText &&
            gameBoard[checkWin[0]].innerText !== ''
        ) {
            return true;
        }
    }

    return false
}

//Gameplay, players 'X' and 'O' take turns placing marks on the board
const placeMark = function(boardSpace) {
    const maxTurns = 9
    console.log(boardSpace.target.id)
    while (turnCounter <= maxTurns && gameStarted === true && checkForWin === false) {
        if (turnCounter === maxTurns && boardSpace.target.innerText === '') {
            boardSpace.target.innerText = 'X'
            document.querySelector('#turnTracker').innerText = 'Game Over'
            document.querySelector('#startGame').innerText = 'New Game'
            document.querySelector('#startGame').style.visibility = 'visible'
        } else if (playerTurn === 'x' && boardSpace.target.innerText === '') {
            turnCounter++
            boardSpace.target.innerText = 'X'
            playerTurn = 'o'
            document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | O's Turn`
        } else if (turnCounter <= maxTurns && boardSpace.target.innerText === '') {
            turnCounter++
            boardSpace.target.innerText = 'O'
            playerTurn = 'x'
            document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | X's Turn`
        }
        break;
    }
    console.log(checkForWin())
}

// Identify space clicked on board
for (let boardSpace of gameBoard) {
    boardSpace.addEventListener('click', placeMark);
}

