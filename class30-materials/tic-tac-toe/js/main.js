// Turns
// let turnCounter = 1;
// let playerTurn = '';
// let gameStarted = false
// let gameWon = false

//Board
// const gameBoard = document.querySelectorAll('td');
// console.log(gameBoard[0])

const gameBoard = {
    maxTurns: 9,
    turn: 1,
    turnDisplay: document.querySelector('h1'),
    player: '',
    started: false,
    winner: false,
    spaces: document.querySelectorAll('td'),
    startButton: document.querySelector('#startGame'),
    placeMark(space) {
        while (gameBoard.turn <= gameBoard.maxTurns && gameBoard.started === true) {
            if (gameBoard.turn === this.maxTurns && space.target.innerText === '') {
                gameBoard.turn++
                gameBoard.player = 'O'
                gameBoard.turnDisplay.innerText = `Turn ${gameBoard.turn} | ${gameBoard.player}'s Turn`
                space.target.innerText = 'X'
                console.log(gameBoard.turn)
            } else if (gameBoard.player === 'X' && space.target.innerText === '') {
                gameBoard.turn++
                gameBoard.player = 'O'
                gameBoard.turnDisplay.innerText = `Turn ${gameBoard.turn} | ${gameBoard.player}'s Turn`
                space.target.innerText = 'X'
                console.log(gameBoard.turn)
            } else if (gameBoard.player === 'O' && space.target.innerText === '') {
                gameBoard.turn++
                gameBoard.player = 'X'
                gameBoard.turnDisplay.innerText = `Turn ${gameBoard.turn} | ${gameBoard.player}'s Turn`
                space.target.innerText = 'O'
                console.log(gameBoard.turn)
            }
            break;
        }
    }
}

gameBoard.spaces.forEach(space => space.addEventListener('click', gameBoard.placeMark))


//Game Start Button
document.querySelector('#startGame').addEventListener('click', startGame)
function startGame() {
    //Start the game
    gameBoard.started = true
    gameBoard.turn = 1
    gameBoard.player = 'X'
    // Clear the board
    gameBoard.spaces.forEach((boardSpace) => boardSpace.innerText = '')
    gameBoard.turnDisplay.innerText = `Turn ${gameBoard.currentTurn} | X's Turn`
    document.querySelector('#startGame').innerText = 'New Game'
    
}
// Gameplay, players 'X' and 'O' take turns placing marks on the board
// const placeMark = function(boardSpace) {
//     const maxTurns = 9
//     // console.log(boardSpace.target.id)
//     while (turnCounter <= maxTurns && gameStarted === true) {
//         if (turnCounter === maxTurns && boardSpace.target.innerText === '') {
//             boardSpace.target.innerText = 'X'
//             document.querySelector('#turnTracker').innerText = 'Game Over'
//             document.querySelector('#startGame').innerText = 'New Game'
//             document.querySelector('#startGame').style.visibility = 'visible'
//         } else if (playerTurn === 'x' && boardSpace.target.innerText === '') {
//             turnCounter++
//             boardSpace.target.innerText = 'X'
//             playerTurn = 'o'
//             document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | O's Turn`
//         } else if (turnCounter <= maxTurns && boardSpace.target.innerText === '') {
//             turnCounter++
//             boardSpace.target.innerText = 'O'
//             playerTurn = 'x'
//             document.querySelector('#turnTracker').innerText = `Turn ${turnCounter} | X's Turn`
//         }
//         break;
//     }
// // }

// // Identify space clicked on board
// for (let boardSpace of gameBoard.spaces) {
//     boardSpace.addEventListener('click', placeMark);
// }











//Win conditions

// function checkForWin(board) {
//     const winCondition = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
    
//     for (let checkWin of gameBoard) {
//         if (
//             gameBoard[checkWin[0]].value == gameBoard[checkWin[1]].value &&
//             gameBoard[checkWin[1]].value == board[checkWin[2]].value &&
//             gameBoard[checkWin[0]].value !== ''
//         ) {
//             return true;
//         }
//     }

//     return false
// }