//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

// let partyOrder = ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle']

// function reverseList(arr) {
//     console.log(arr.reverse())
// }

// reverseList(partyOrder)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// let arrA = [2, 3, 4]
// let arrB = [1, 2, 3]

// function compareSquareAndCube(a, b) {
//     return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0)
// }
// console.log(compareSquareAndCube(arrA, arrB))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// let case1 = [22, -6, 32, 82, 9, 25] // => [-6, 32, 25]
// let case2 =[68, -1, 1, -7, 10, 10] // => [-1, 10]

// function multipleOfOwnIndex(arr) {
//     return arr.filter((element, index) => element % index === 0)
// }

// console.log(multipleOfOwnIndex(case1))
// console.log(multipleOfOwnIndex(case2))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr) {
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfValues(['5', 3, '2', 1]))

// const s = r => r.reduce((a,c)=>+a+ +c)

// console.log(s(['5', 3, '2', 1]))