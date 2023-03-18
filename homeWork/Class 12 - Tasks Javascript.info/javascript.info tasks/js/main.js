/* =============================================
            JAVASCRIPT.INFO: VARIABLES           
===============================================*/
// 1. WORKING WITH VARIABLES

    // Declare two variables: admin and name.

        // let admin
        // let name

    // Assign the value "John" to name.

        // name = "John"

    // Copy the value from name to admin.

        // admin = name

    // Show the value of admin using alert (must output “John”).

        // alert(admin)

// 2. GIVING THE RIGHT NAME

    // Create a variable with the name of our planet. How would you name such a variable?

        // let ourPlanet = "Earth"

    // Create a variable to store the name of a current visitor to a website. How would you name that variable?

        // let currentUser = "Username"

// 3. UPPERCASE CONST

    // Would it be right to use upper case for birthday? For age? Or even for both?

        // I guess because birthday never changes it could be uppercase...
            
        // I would not use upper case for age, it is not hard coded and changes each year

/* =============================================
        JAVASCRIPT.INFO: FUNCTION BASICS           
===============================================*/

// 1. IS "ELSE" REQUIRED?

    // function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       // ...
    //       return confirm('Did parents allow you?');
    //     }
    //   }

    // Will the function work differently if else is removed?

        // No, the functions will behave the same.

// 2. REWRITE THE FUNCTION USING '?' OR '||'

    // function checkAge(age) {
    //     if (age > 18) {
    //     return true;
    //     } else {
    //     return confirm('Did parents allow you?');
    //     }
    // }

    // USING '?'

        // function checkAge(age) {
        //     return age > 18 ? true
        //         :  confirm('Did your parents allow?');
        // }

    // USING '||'

        // function checkAge(age) {
        //     age > 18 || confirm('Did your parents allow?'); {
        //     }
        //     return true;
        // }


// 3. FUNCTION MIN(A,B)

    // Write a function min(a,b) which returns the least of two numbers a and b.

        // USING 'if'
    
            // function min(a,b) {
            //     if (a > b) {
            //         return b;
            //     } else {
            //         return a;
            //     }
            // }

        // USING '?'

            // function min(a, b) {
            //     return a > b ? b
            //         :  a;
            // }

// 4. FUNCTION POW(X,N)

    // Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

        // function pow(x, n) {
        //     let result = x;

        //     for (let i = 1; i < n; i++) {
        //         result *= x;
        //     }

        //     return result;
        // }

    // Create a web-page that prompts for x and n, and then shows the result of pow(x,n).


        // let x = prompt('x?');
        // let n = prompt('n?');

        // if (n < 1) {
        //     alert('Use a positive integer');
        // } else {
        //     alert( pow(x, n) );
        // }

/* =============================================
   JAVASCRIPT.INFO: ARROW FUNCTIONS, THE BASICS           
===============================================*/

// 1. REWRITE WITH ARROW FUNCTIONS

    // Replace Function Expressions with arrow functions in the code below:

        // let question = confirm("Do you agree");
        // let ask = (question) ?
        //     () => alert("You agreed.") :
        //     () => alert("You canceled the execution.") ;

        // ask();

/* =============================================
   JAVASCRIPT.INFO: ARROW FUNCTIONS, THE BASICS           
===============================================*/

// 1. TRANSLATE BORDER-LEFT-WIDTH TO borderLeftWidth

    // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

    // That is: removes all dashes, each word after dash becomes uppercased.

        // function camelize(str) {
        //     return str
        //         .split('-')
        //         .map((word, index) => {
        //             if (index == 0) {
        //                 return word
        //             } else {
        //                 return word[0].toUpperCase() + word.slice(1)
        //             }})
        //         .join('');
        // }

        // console.log(camelize("background-color"))
        // console.log(camelize("list-style-image"))
        // console.log(camelize("-webkit-transition"))

// 2. FILTER RANGE

    // let arr = [5, 3, 8, 1]

    // function filterRange(arr, a, b) {
    //     return arr
    //         .filter(function(item){
    //             if (item >= a && item <= b) {
    //                 return item
    //             }    
    //         })
    // }
    // let filtered = filterRange(arr, 1, 4)

    // console.log(filtered)
    // console.log(arr)

// 3. FILTER RANGE "IN PLACE"

    // let arr = [5, 3, 8, 1]

    // function filterRangeInPlace(arr, a, b) {
    //     let i = 0

    //     while (i < arr.length) {
    //         if (a <= arr[i] && b <= arr[i]) {
    //             arr.splice(i, 1)
    //         }
    //     i++ 
    //     }

    //     return arr
    // }

    // console.log(filterRangeInPlace(arr, 1, 4))
    // console.log(arr)

// 4. SORT IN DECREASING ORDER

    // let arr = [5, 2, 1, -10, 8]

    // function compare(a, b) {
    //     if (a < b) return 1;
    //     if (a == b) return 0;
    //     if (a > b) return -1;
    // }


    // console.log(arr.sort(compare))  //8, 5, 2, 1, -10

// 5. COPY AND SORT ARRAY

//     let arr = ["HTML", "JavaScript", "CSS"];
//     let sorted = copySorted(arr);

//     function copySorted(arr) {
//         let newArray = arr.concat().sort()
//         return newArray
//     }

//     console.log(sorted)
//     console.log(arr)

// // 6. CREATE AN EXTENDABLE CALCULATOR

//     function calculator() {
//         calculate(str)
//     }

// 7. MAP TO NAMES

    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let users = [john, pete, mary];

    // let names = users.map((item) => {
    //                 return item.name
    //             })

    // console.log(names);

// 8. MAP TO OBJECTS

    // let john = {name: "John", surname: "Smith", id: 1};
    // let pete = {name: "Pete", surname: "Hunt", id: 2};
    // let mary = {name: "Mary", surname: "Key", id: 3};

    // let users = [john, pete, mary];

    // let usersMapped = users.map((item, index, array) => {
    //                         const usersMapped = {
    //                             fullName: `${item.name} ${item.surname}`,
    //                             id: item.id
    //                        }                       
    //                        return usersMapped  
    //                     })

    // console.log(usersMapped)
    // console.log(usersMapped[0].id)
    // console.log(usersMapped[0].fullName)

// 9. SORT USERS BY AGE

    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let arr = [ pete, john, mary ];

    // function sortByAge(users) {
    //     function compare(a, b) {
    //         if (a.age > b.age) return 1;
    //         if (a.age == b.age) return 0;
    //         if (a.age < b.age) return -1;
    //     }
    //     users.sort(compare)
    // }

    // sortByAge(arr)

    // console.log(arr[0].name); // John
    // console.log(arr[1].name); // Mary
    // console.log(arr[2].name); // Pete 

// 10. SHUFFLE AN ARRAY

    // BAD PRACTICE, DOES NOT GIVE EQUAL PROBABILITY

        // let arr = [1, 2, 3];

        // function shuffle(array) {
        //        array.sort(_ => Math.random() - 0.5);
        // }

        // shuffle(arr)
        // console.log(arr)

    //FISHER-YATES SHUFFLE

        // function shuffle(array) {
        //     for (let i = array.length -1; i > 0; i--) {
        //         let j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]] 
        //     }
        // }

        // shuffle(arr)
        // console.log(arr)

// 11. GET AVERAGE AGE

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

        // let john = {name: "John", age: 25};
        // let pete = {name: "Pete", age: 30};
        // let mary = {name: "Mary", age: 29};
        // let dude = {name: "Dude", age: 50};
        // let dudette = {name: "Dudette", age: 75};

        // let arr = [john, pete, mary, dude, dudette];

        // function getAverageAge(users) {
        //     let averageAge = 0
        //     let i = 0
        //     while (i < users.length) {
        //         averageAge += users[i].age
        //         i++
        //     }
        //     averageAge /= users.length
        //     return averageAge
        // }

        // console.log(getAverageAge(arr))

// 12. FILTER UNIQUE ARRAY MEMBERS

    // function unique(arr) {
    //     let uniqueArr = []
    //     let i = 0
    //     while (i < arr.length) {
    //         if (!uniqueArr.includes(arr[i])) {
    //             uniqueArr.push(arr[i])
    //         }
    //         i++
    //     } 
    //     return uniqueArr
    // }

    // let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];

    // console.log(unique(strings))

// 13. CREATE KEYED OBJECT FROM ARRAY


