// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

    // let sentance = "Is this sentance a string?"

    // if (sentance.endsWith("?")) {
    //     alert(sentance)
    // }

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

    // let multipleWords = "I am a jr. dev, I became a jr. dev when I started 100Devs."

    // console.log(multipleWords.replaceAll("jr. dev", "software engineer"))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

    let rps = ["rock", "paper", "scissors"]

    function rockPaperScissors() {
        let random = Math.random()
        if (random < .33) {
            return "rock"
        } else if (random < .66) {
            return "paper"
        } else {
            return "scissors"
        }
    }


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

    function checkWin(playerChoice) {
        let botChoice = rockPaperScissors()

        if (playerChoice === "rock" && botChoice === "scissors" || 
        playerChoice === "paper" && botChoice === "rock" || 
        playerChoice === "scissors" && botChoice === "paper") {
            console.log("You win!")
        } else if (playerChoice === botChoice) {
            console.log("It's a tie!")
        } else {
            console.log("You lose!")
        }
    }

    checkWin("paper")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

    let choices = ['rock', 'paper', 'scissors']

    function playTheGame(arr) {
        arr.forEach (choice => console.log(checkWin(choice)))
    }

(playTheGame(choices))