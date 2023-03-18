//Create a stopwatch object that has four properties and three methods

const stopwatch = {}
    
stopwatch.shape = "round"
stopwatch.color = "blue"
stopwatch.size = "small"
stopwatch.currentTime = 12,

stopwatch.currentMinutes = function(minutes) {
    console.log(`The current minutes are ${minutes}.`)
    }

stopwatch.currentSeconds = function(seconds) {
    console.log(`The current seconds are ${seconds}`)
}

stopwatch.start = function() {
    console.log('STARTINGGGGGGGGG')
}

stopwatch.start()
stopwatch.currentMinutes    (12)
stopwatch.currentSeconds(15)

console.log(stopwatch)