/*
Input validation
*/

    // Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

        let askNumber = 101;

        while (askNumber > 100) {
            askNumber = Number(prompt("Enter numbers until the window closes"));
        }


    // When you are done with the above, improve the program so that the terminating number is between 50 and 100.

        let askNum = 0

        while (askNumber > 100 || askNum < 50) {
            askNum = Number(prompt("Enter numbers until the window closes"));
        }
