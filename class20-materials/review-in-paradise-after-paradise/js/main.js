// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function takeArray(array) {
    array = [9, 3, 6, 5]
    if (array[0] < array.slice(-1)) {
        alert("Bye")
    } else if (array[0] > array.slice(-1)) {
        alert("Hi")
    } else {
        alert("We close in an hour")
    }
}

takeArray()

