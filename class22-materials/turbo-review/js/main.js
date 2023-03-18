 // *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

    let favDrink = " Water "
    favDrink = favDrink.trim()

    console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

    let multipleWords = "dog, cat, mom, dad, purple"

    console.log(multipleWords.includes("apple"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

    array = ["Rock", "Paper", "Scissors"]

    function rockPaperScissors() {
        let random = Math.random()
        if (random < 0.3333) {
            return 'rock'
        } else if (random < 0.6666) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    // console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

    function checkWin(userChoice) {
        let botChoice = rockPaperScissors()
        let rock = 1
        let paper = 2
        let scissors = 3
            if (userChoice ===  'rock' && botChoice === 'scissors' ) { 
                return 'You Win!'
            } else if (userChoice === 'paper' && botChoice === 'rock') {
                return 'You Win!'
            } else if (userChoice === 'scissors' && botChoice === 'paper') {
                return 'You Win!'
            } else if (userChoice === botChoice) {
                return 'It\'s a tie!'
            } else {
                return 'You Lose!'
            }
    }

    // console.log(checkWin('rock'))

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

    let choices = ['rock', 'paper', 'scissors']

    function playTheGame(arr) {
        arr.forEach (choice => console.log(checkWin(choice)))
    }

(playTheGame(choices))
