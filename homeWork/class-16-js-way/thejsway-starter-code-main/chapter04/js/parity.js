/*
Show even and odd numbers
*/

    // Improve the program so that it also shows odd numbers.

        for (let i = 1; i <= 10; i++) {
            if (i % 2 === 0) {
              alert(`${i} is even`);
            }
            else alert(`${i} is odd`);
          }

    // Improve it again to replace the initial number 1 by a number given by the user.

        const firstNumber = Number(prompt("First Number"))

        for (let i = 0+firstNumber; i <= firstNumber+9; i++) {
            if (i % 2 === 0) {
              alert(`${i} is even`);
            }
            else alert(`${i} is odd`);
          }