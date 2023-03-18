//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [10, 20, 30, 50]

let sum = 0
nums.forEach(element => sum += element)
console.log(sum)

console.log(nums.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = nums.map(num => num **2);

console.log(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = str => console.log(str.split('').reverse().join(''))

unoReverse("hello")

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => str === console.log(str === str.split('').reverse().join(''))

palindromeCheck("tacocat")