/*
FizzBuzz
*/
    // WHILE

        let number = 1
        
        while (number >= 1 && number <= 100) {
            if(number % 3 === 0 && number % 5 === 0){
                console.log("FizzBuzz")
            } else if (number % 3 === 0) {
                console.log("Fizz")
            } else if (number % 5 === 0 && number % 3 !== 0) {
                console.log("Buzz")
            } else { 
                console.log(number)
            }
        number++
        }

    // FOR

        for (let i = 1; i >= 1 && i <= 100; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBuzz")
            } else if (i % 3 === 0) {
                console.log("Fizz")
            } else if (i % 5 === 0 && i % 3 !==0) {
                console.log("Buzz")
            } else {
                console.log(i)
            }
        }