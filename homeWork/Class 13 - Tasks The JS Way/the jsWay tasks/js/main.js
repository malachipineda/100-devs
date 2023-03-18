// 1. CAROUSEL

// Write a program that launches a carousel for 10 turns, showing the turn number each time.

    // WHILE

        // let number = 1

        // while (number <= 10) {
        //     alert(`Turn ${number}`);
        //     number++;
        // }

    // FOR

        // for (number = 1; number <= 10; number++) {
        //     alert(`Turn ${number}`);
        // }

// When it's done, improve it so that the number of turns is given by the user.

    // WHILE

        // let number = 1
        // let turns = prompt("Number of turns")

        // while (number <= turns) {
        //     alert(`Turn ${number}`);
        //     number++
        // }

    // FOR

        // let turns = prompt("Number of turns")

        // for (number = 1; number <= turns; number++) {
        //     alert(`Turn ${number}`);
        // }

// 2. PARITY

    // Improve the program so that it also shows odd numbers.

        // for (let i = 1; i <= 10; i++) {
        //     if (i % 2 === 0) {
        //       alert(`${i} is even`);
        //     }
        //     else alert(`${i} is odd`);
        //   }

    // Improve it again to replace the initial number 1 by a number given by the user.

        // const firstNumber = Number(prompt("First Number"))

        // for (let i = 0+firstNumber; i <= firstNumber+9; i++) {
        //     if (i % 2 === 0) {
        //       alert(`${i} is even`);
        //     }
        //     else alert(`${i} is odd`);
        //   }

// 3. INPUT VALIDATION

    // Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

        // let askNumber = 101;

        // while (askNumber > 100) {
        //     askNumber = Number(prompt("Enter numbers until the window closes"));
        // }


    // When you are done with the above, improve the program so that the terminating number is between 50 and 100.

        // let askNumber = 0

        // while (askNumber > 100 || askNumber < 50) {
        //     askNumber = Number(prompt("Enter numbers until the window closes"));
        // }

// 4. MULTIPLICATION TABLE

// Write a program that asks the user for a number, then shows the multiplication table for this number.

    // WHILE

        // let number = prompt(&quot;Enter a Number to See its Multiplication Table&quot;);
        // let multiple = 1;

        // while (multiple &lt;= 10) {
        //     console.log(`${number} x ${multiple} = ${number * multiple }`);
        //     multiple++;
        // }

    // FOR

        // let number = Number(prompt(&quot;Enter a Number to See its Multiplication Table&quot;));

        // for (let i = 1; i &lt;= 10; i++) {
        //     console.log(`${number} x ${i} = ${number * i}`);
        // }

  // When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

    // WHILE

        // let number = prompt(&quot;Enter a Number Between 2 and 9 to See its Multiplication Table&quot;);
        // let multiple = 1;

        // while (multiple &lt;= 10 &amp;&amp; (number &gt;= 2 &amp;&amp; number &lt;= 9)) {
        //     console.log(`${number} x ${multiple} = ${number * multiple}`);
        //     multiple++;
        // }

    // FOR

        // let number = prompt(&quot;Enter a Number Between 2 and 9 to see its Multiplication Table&quot;);

        // for (let i = 1; i &lt;= 10 &amp;&amp; number &gt;=2 &amp;&amp; number &lt;= 9; i++) {
        //     console.log(`${number} x ${i} = ${number * i}`);
        // }

// 5. NEITHER YES NOR NO

    // WHILE

        // let word;

        // while (word !== &quot;yes&quot; &amp;&amp; word !== &quot;no&quot;) {
        //     word = prompt(&quot;neither yes nor no&quot;).toLowerCase();
        // }

    // FOR

        // for (let i; i !== &quot;yes&quot; &amp;&amp; i !== &quot;no&quot;; i = prompt(&quot;neither yes, nor no&quot;).toLowerCase());

// 6.  FIZZ BUZZ

    // WHILE

        // let number = 1
        
        // while (number &gt;= 1 &amp;&amp; number &lt;= 100) {
        //     if(number % 3 === 0 &amp;&amp; number % 5 === 0){
        //         console.log(&quot;FizzBuzz&quot;)
        //     } else if (number % 3 === 0) {
        //         console.log(&quot;Fizz&quot;)
        //     } else if (number % 5 === 0 &amp;&amp; number % 3 !== 0) {
        //         console.log(&quot;Buzz&quot;)
        //     } else { 
        //         console.log(number)
        //     }
        // number++
        // }

    // FOR

        // for (let i = 1; i &gt;= 1 &amp;&amp; i &lt;= 100; i++) {
        //     if(i % 3 === 0 &amp;&amp; i % 5 === 0) {
        //         console.log(&quot;FizzBuzz&quot;)
        //     } else if (i % 3 === 0) {
        //         console.log(&quot;Fizz&quot;)
        //     } else if (i % 5 === 0 &amp;&amp; i % 3 !==0) {
        //         console.log(&quot;Buzz&quot;)
        //     } else {
        //         console.log(i)
        //     }