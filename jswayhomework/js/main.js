// Number Comparison

    // number1 = Number(prompt("Enter the first number to be compared."))
    // number2 = Number(prompt("Enter the second number to be compared."))

    // if (number1 === number2) {
    //     alert(`${number1} is equal to ${number2}`)
    // } else {
    //     alert(`${number1} is not equal to ${number2}`)
    // }

// Final Values

    // let nb1 = Number(prompt("Enter nb1:"));
    // let nb2 = Number(prompt("Enter nb2:"));
    // let nb3 = Number(prompt("Enter nb3:"));

    // if (nb1 > nb2) {
    // nb1 = nb3 * 2;
    // } else {
    // nb1++;
    // if (nb2 > nb3) {
    //     nb1 += nb3 * 3;
    // } else {
    //     nb1 = 0;
    //     nb3 = nb3 * 2 + nb2;
    // }
    // }
    // console.log(nb1, nb2, nb3);

    // 0 4 12

    // 4 3 2

    // 3 4 0

// Days in a Month

    // let month = Number(prompt("Enter a month as a number (1-12) to see how many days are in that month."))

    // if (month === 2) {
    //     alert(`Month ${month} has 28 days.`)
    // } else if (month % 2 !== 0 && month <= 7 && month >= 1) {
    //     alert(`Month ${month} has 31 days.`)
    // } else if (month % 2 == 0 && month <= 12 && month >= 8) {
    //     alert(`Month ${month} has 31 days.`)
    // } else if (month >= 1 && month <= 12) {
    //     alert(`Month ${month} has 30 days`)
    // } else {
    //     alert(`${month} is not a valid month`)
    // }

// FOLLOWING SECOND

    // alert("Follow the prompts to see what time it will be one second after the time you enter.")
    // let hours = Number(prompt("Enter the hour as a number 0-23"))
    // let minutes = Number(prompt("Enter the minutes as a number 0-59"))
    // let seconds = Number(prompt("Enter the seconds as a number 0-59"))
    // let validTime

    // if ((hours < 0) || (hours > 23) || (minutes < 0) || (minutes > 59) || (seconds < 0) || (seconds > 59) || (isNaN(hours)) || (isNaN(minutes)) || (isNaN(seconds))) {
    //     console.log("You entered invalid time.")
    //     validTime = false
    // } else {
    //     console.log(`You entered: ${hours}h${minutes}m${seconds}s`)
    //     validTime = true
    //     seconds++
    // }   if (seconds === 60) {
    //         seconds = 0
    //         minutes++
    // }       if (minutes === 60) {
    //             minutes = 0
    //             hours++
    // }           if (hours === 24) {
    //                 hours = 0
    // } 

    // if (validTime === true) {
    //     console.log(`One second after is: ${hours}h${minutes}m${seconds}s`)
    // }

// Carousel

    // let turns = 1
    // while (turns <= 10) {
    //     console.log(turns)
    //     turns++
    // }

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i)
    // }

    // Improve it

    // let turns = Number(prompt("Enter the number of turns."))
    // let i = 1

    // while (i <= turns) {
    //     console.log(i)
    //     i++
    // }

    // for (let i = 1, turns = Number(prompt("Enter the number of turns.")); i <= turns; i++ ) {
    //     console.log(i)
    // }

// Parity

    // let i = 1

    // while (i <= 10) {
    //     if (i % 2 ==0) {
    //         console.log(`${i} is even`)
    //     } else {
    //         console.log(`${i} is odd`)
    //     }
    //     i++
    // }

    // for (let i = 1; i <= 10; i++) {
    //     if (i % 2 == 0) {
    //         console.log(`${i} is even`)
    //     } else { 
    //         console.log(`${i} is odd`)
    //     }
    // }

    // let startNumber = Number(prompt("Enter the starting number"))
    // let i = startNumber + 10

    // while (startNumber < i) {
    //     if (startNumber % 2 == 0) {
    //         console.log(`${startNumber} is even`)
    //     } else {
    //         console.log(`${startNumber} is odd`)
    //     }
    //     startNumber++
    // }

    // for (let startNumber = Number(prompt("Enter the starting Number")), i = startNumber + 10; startNumber < i; startNumber++) {
    //     if (startNumber % 2 == 0) {
    //         console.log(`${startNumber} is even`)
    //     } else {
    //         console.log(`${startNumber} is odd`)
    //     }
    // }

    // let bb = 'Cuteo'
    // if (bb = 'Cuteo') {
    //     console.log('I\'m a cuteo patuteo')
    // } else {
    //     console.log('I\'m still a cuteo patuteo')
    // }

// Input Validation

    // let number = 101

    // while (number > 100) {
    //     number = Number(prompt("Enter a number less than or equal to 100"))
    // }

    // for (let number = 101; number > 100; number = Number(prompt("Enter a number less than or equal to 100"))
    // ){}
 
    // let number = 0

    // while (number <= 50 || number >= 100) {
    //     number = Number(prompt("Enter a number between 50 and 100"))
    // }

    // for (let number = 0; number <= 50 || number >= 100; number = Number(prompt("Enter a number between 50 and 100"))){}

// Multiplication table

    // let number = Number(prompt("Enter a number to see its multiplication table"))
    // let multiple = 0
    
    // while (multiple <= 12) {
    //     console.log(`${number} x ${multiple} = ${number * multiple}`)
    //     multiple++
    // }

    // for (let multiple = 0, number = Number(prompt("Enter a number to see its multiplication table")); multiple <= 12; multiple++) {
    //     console.log(`${number} x ${multiple} = ${number * multiple}`)
    // }

    // let number = Number(prompt("Enter a number between 2 and 9 to see its multiplication table"))
    // let multiple = 0

    // let number
    // let multiple = 0

    // while (multiple <= 12) {
    //     if (number > 2 && number < 9) {
    //         console.log(`${number} x ${multiple} = ${number * multiple}`)
    //         multiple++
    //     } else {
    //         number = Number(prompt("Enter a number between 2 and 9 to see its multiplication table"))
    //     }
    // }

    // for (let multiple = 0, number; multiple <= 12;) {
    //     if (number > 2 && number < 9) {
    //         console.log(`${number} x ${multiple} = ${number * multiple}`)
    //         multiple++
    //     } else {
    //         number = Number(prompt("Enter a number between 2 and 9 to see its multiplication table"))
    //     }
    // }

// Neither yes nor no

    // let text

    // while (text !== "yes" && text !== "no") {
    //     text = prompt("Enter 'Yes' or 'No' to end the game.").toLowerCase()
    // }

    // for (let text; text !== "yes" && text !== "no"; text = prompt("Enter 'Yes' or 'No' to end the game.").toLowerCase()){}

// FizzBuzz

    // let i = 2
    // let number

    // while (i > 1 && i < 100) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         number = "FizzBuzz"
    //     } else if (i % 5 === 0 && i % 3 !== 0) {
    //         number = "Buzz"
    //     } else if (i % 3 === 0) {
    //         number = "Fizz"
    //     } else {
    //         number = i
    //     }
    //     console.log(number)
    //     i++
    // }

    // for (let i = 2, number; i > 1 && i < 100; i++, console.log(number)
    // ) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //     number = "FizzBuzz"
    //     } else if (i % 3 === 0) {
    //         number = "Fizz"
    //     } else if (i % 5 === 0 && i % 3 !== 0) {
    //         number = "Buzz"
    //     } else {
    //         number = i
    //     }
    // }


    // ARRAYS 

        // Translate border

            // function camelize(str) {
            //     return str
            //     .split('-')
            //     .map(function(item, index) {
            //         if (index === 0){
            //             return item
            //         } else {
            //             return item[0].toUpperCase() + item.slice(1)
            //         }   
            //     })
            //     .join('')
            // }


            // console.log(camelize("background-color"))
            // console.log(camelize("list-style-image")) 
            // console.log(camelize("-webkit-transition"))


        //Filter Range

            // let arr = [5, 3, 8, 1];
            
            // function filterRange(arr, a, b) {
            //     return arr.filter(function(item, index) {
            //         if (a <= item && b >= item) {
            //             return arr
            //         }
            //     })
            // }

            // console.log(filterRange(arr, 1, 4))
            // console.log(arr)

            let arr = [5, 3, 8, 1];

            function filterRangeInPlace(arr, a, b) {
            }

            console.log(arr)