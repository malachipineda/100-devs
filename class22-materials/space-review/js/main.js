//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

    let arrayofNums = [5, 2, 3]

    function sumAllNums(arr) {
        let sum = 0
        arr.forEach(num => sum += num)
        return sum
    }

    console.log(sumAllNums(arrayofNums))


    let nums = [42, 19, 77, 33, 57]

    let sum = nums.reduce( (acc, c) => acc + c, 0 )

    console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

    function newArraySquared(arr) {
        let squaredArray = arr.map(element => element *= element)
        return squaredArray
    }

    console.log(newArraySquared(nums))

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
