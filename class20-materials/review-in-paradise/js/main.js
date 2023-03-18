// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favoriteFood = "dunno"
favoriteFood = "Tinola"


alert(favoriteFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let string = "String"

alert(string[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function take3Numbers(num1, num2, num3) {
    let product = ((num1 / num2) * num3)
    return product
}

alert(take3Numbers(1,2,3))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function take1Number(num) {
    let cubeRoot = Math.cbrt((num))
    console.log(cubeRoot)
}

take1Number(6)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerOrNaw(month) {
    if (month == "june" || month == "july" || month == "august") {
        alert("YAY")
    } else {
        alert("Booo")
    }
}

summerOrNaw("july")


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5s(number) {
    let i = 0
    while (i < number) {
        if (i % 5 !== 0) {
            console.log(i)
        }
        i++
    }
}

skip5s(20)