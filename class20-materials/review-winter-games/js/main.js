//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function numbersArray(array) {
    let evenNums = []
    
    array.forEach(element => {
        if (element % 2 === 0) {
        evenNums.push(element)
        }
    })

    return evenNums
} 

console.log(numbersArray([56,51,98,55,53,69]))