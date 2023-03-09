// Looping a triangle

    // let triangle = "#"

    // while (triangle.length <= 7) {
    //     console.log(triangle)
    //     triangle = triangle + "#"
    // }

// FizzBuzz

    // let i = 0

    // while (i < 100) {
    //     i++
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("FizzBuz")
    //     } else if (i % 3 === 0) {
    //         console.log("Fizz")
    //     } else if (i % 5 === 0) {
    //         console.log("Buzz")
    //     } else {
    //         console.log(i)
    //     }
    // }

// ChessBoard

    // let i = 0
    // let chessBoard

    // while (i < 8) {
    //     i++
    //     if (i % 2 === 0) {
    //     chessBoard = "   #   #   #   #"
    //     } else {
    //         chessBoard = "#   #   #   #   "
    //     }
    // console.log(chessBoard)
    // }

    // let size = 8;
    // let board = "";
    
    // for (let y = 0; y < size; y++) {
    //     for (let x = 0; x < size; x++) {
    //         if ((x + y) % 2 == 0) {
    //             board = board + "   "
    //         } else {
    //             board = board + "#"
    //         }
    //     }
    //     board = board + "\n"
    // }

    // console.log(board);

//

// Functions Exercises

    // Minimum

        // function minimum(number1, number2) {
        //     if (number1 < number2) {
        //         return number1
        //     } else {
        //         return number2
        //     }
        // }

        // console.log(minimum(0, 10))
        // //-> 0
        // console.log(minimum(0, -10))
        // // -> -10

    // Recursion 

        // function isEven(number) {
        //     let even = 0
        //     function minus2(subtract) {
        //         if (subtract < 0) {
        //             return minus2(subtract + 2)
        //         } else if (subtract === 0) {
        //             return true;
        //         } else if (subtract === 1) {
        //             return false
        //         } else {
        //             return minus2(subtract - 2)
        //         }
        //     }
        //     return minus2(number)
        // }
        
        // console.log(isEven(50));
        // // → true
        // console.log(isEven(953));
        // // → false
        // console.log(isEven(-61));
        // // → false
        // console.log(isEven(-20));
        // // → true

    // Bean Counting

        // function countBs(string) {
        //     let B = 0
        //     for (let i = 0; i < string.length; i++) {
        //         if (string[i] === "B") {
        //             B++ 
        //         }
        //     }
        //     return B
        // }
        // console.log(countBs("BBC"))

        // function countChar(string, character) {
        //     let count = 0
        //     for (let i = 0; i < string.length; i++) {
        //         if (string[i] === character) {
        //             count++
        //         }
        //     }
        //     return (count)
        // }

        // console.log(countChar("Princess Angelina Conessa Louisa Francessca Bananafana Bobesca III", "s"))

// DATA STRUCTURES: OBJECTS AND ARRAYS

    // SUM OF A RANGE

        function range(start, end, step) {            
            let i
            let arrayOfNums = []
            if (start <= end ) {
                i = start
                while (i <= end) {
                    if (step > 0) {
                        arrayOfNums.push(i)
                        i += step
                    } else {
                        arrayOfNums.push(i)                    
                        i++
                    } 
                }
            }
            if (start >= end) {
                i = start
                while (i >= end) {
                    if (step < 0) {
                        arrayOfNums.push(i)
                        i += step
                    } else {
                        arrayOfNums.push(i)
                        i--
                    }  
                }
            }
            return arrayOfNums
        }

        console.log(range(10, 1, -2))

        // SUM

        function sum(sum) {
            let total = 0
            let i = 0
            while (i < sum.length) {
                total += sum[i]
                i++
            }
            return total
        }

        console.log(sum(range(1, 10)))



// ROCK PAPER SCISSORS

// let rock = "Rock"
// let paper = "Paper"
// let scissors = "Scissors"

// function rockPaperScissors(person1, person2) {
//     if ((person1 === rock && person2 === scissors) || (person2 === rock && person1 === scissors)) {
//         return ("Rock Wins!")
//     } else if ((person1 === paper && person2 === rock) || person1 === rock && person2 === paper) {
//         return ("Paper Wins!")
//     } else if (person1 === person2) {
//         return ("It's a tie!")
//     } else {
//         return ("Scissors Wins!")
//     }
// }

// console.log(rockPaperScissors(paper,paper))