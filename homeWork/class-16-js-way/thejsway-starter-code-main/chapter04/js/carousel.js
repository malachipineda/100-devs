/*
Carousel turns
*/

// Write a program that launches a carousel for 10 turns, showing the turn number each time.

    // WHILE

    let num = 1

    while (num <= 10) {
        alert(`Turn ${num}`);
        num++;
    }

// FOR

    for (num = 1; num <= 10; num++) {
        alert(`Turn ${num}`);
    }

// When it's done, improve it so that the number of turns is given by the user.

// WHILE

    let number = 1
    let turn = prompt("Number of turns")

    while (number <= turn) {
        alert(`Turn ${number}`);
        number++
    }

// FOR

    let turns = prompt("Number of turns")

    for (number = 1; number <= turns; number++) {
        alert(`Turn ${number}`);
    }