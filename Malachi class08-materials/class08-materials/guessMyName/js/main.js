function guessMyName() {
    let guess = prompt("Guess My Name.").toLowerCase()
    const myName = "rumpelstiltskin"
    while (guess !== myName && guess.indexOf("hint") < -1 && guess.indexOf("please") < -1) {
        guess = prompt("Guess My Name.").toLowerCase()
        location.reload()
    } if (guess == myName) {
        alert("You Win!")
            if (guess = (confirm("Play Again?"))) {
                location.reload()
            } else { 
                alert("Boring!")
            }
    } else if (guess.indexOf("hint") > -1 && guess.indexOf("please") > -1) {
        guess = alert("My name starts with an 'R'")
        location.reload()
    } else if (guess.indexOf("hint") > -1) {
        guess = alert("Say Please")
        location.reload()
    } else if (guess.indexOf("please") > -1) {
        guess = alert ("Please What?")
        location.reload()
    } else { 
        alert("You Lose!")
        if (guess = (confirm("Try Again?"))) {
            location.reload()
        } else {
            alert("Quitter!")
        }
    }
}

guessMyName()