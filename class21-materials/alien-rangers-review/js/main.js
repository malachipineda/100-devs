//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ["Power Rangers", "Spongebob Squarepants", "Arthur"]

tvShows.forEach(x => console.log(x))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let arrayOfNums = [21, 56, 88, 24, 99, 710]

let newArray = []
const evenNums = arrayOfNums.map(num => {
    if (num % 2 === 0) {
        newArray.push(num)
    }
    return newArray
})

console.log(newArray)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sum2ndHighAndLow(array) {
    let sorted = array.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length -2])
}

sum2ndHighAndLow([2, 3, 1, 5, 4])