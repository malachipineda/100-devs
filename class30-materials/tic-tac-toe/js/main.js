// Turns
const maxTurns = 9;
let turnCounter = 1;
let playerTurn = '';
let gameStarted = false
//Board
const board = document.querySelectorAll('td');

//Log the space clicked on the board
const placeMark = function(element) {
    // console.log(element.target.id)
    while (turnCounter <= maxTurns && gameStarted === true) {
        if (turnCounter === maxTurns && element.target.innerText === '') {
            element.target.innerText = 'X'
            document.querySelector('#turnTracker').innerText = 'Game Over'
            document.querySelector('#startGame').innerText = 'New Game'
            document.querySelector('#startGame').style.visibility = 'visible'
        } else if (playerTurn === 'x' && element.target.innerText === '') {
            turnCounter++
            element.target.innerText = 'X'
            playerTurn = 'o'
            document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | O's Turn`
        } else if (turnCounter <= maxTurns && element.target.innerText === '') {
            turnCounter++
            element.target.innerText = 'O'
            playerTurn = 'x'
            document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | X's Turn`
        }
        console.log(turnCounter)
        break;
    }
}

// Identify space clicked on board
for (let space of board) {
    space.addEventListener('click', placeMark);
}

document.querySelector('#startGame').addEventListener('click', startGame)
function startGame() {
    gameStarted = true
    turnCounter = 1
    playerTurn = 'x'
    console.log(turnCounter)
    // Clear the board
    board.forEach((element) => element.innerText = '')
    document.querySelector('h1').innerText = `Turn ${turnCounter} | X's Turn`
    document.querySelector('#startGame').innerText = 'New Game'
    
}
