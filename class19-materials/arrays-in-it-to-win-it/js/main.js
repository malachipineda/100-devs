//Create an array of movies with at least three movies.

let movies = ["Brng it on", "In it to win it", "Fight to the finish"]

//Using the array from above, store the first movie in a variable

let coolMovie = movies[0]

//Get the length of the original array and store it in a new variable

let moviesLength = movies.length
console.log(moviesLength)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastElement = movies[movies.length -1]
let lastMovie = movies.slice(-1)

console.log(lastMovie)