// *Variables*
// Create a variable and console log the value

let bring = "Bring it on!"

console.log(bring)

// Create a variable, add 10 to it, and alert the value

let cheers = 3
alert(cheers + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}

subtractFourNumbers(10, 9, 8, 7)


// Create a function that divides one number by another and returns the remainder

function divideAndRemainder(num1, num2) {
    return num1 % num2
}

divideAndRemainder(10,2)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoAlert(num1, num2) {
    let sum = num1 + num2
    if (sum > 50) {
        alert("Jumanji!")
    }
}

addTwoAlert(50, 200)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree (num1, num2, num3) {
    let product = num1 * num2 * num3
    if (product % 3 == 0) {
        alert("ZEBRA!")
    }
}

multiplyThree(7,8,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNumber (word, number) {
    for (let i = 1; i <= number; i++) {
        console.log(word)
    }
}

wordNumber("Hello", 5)
