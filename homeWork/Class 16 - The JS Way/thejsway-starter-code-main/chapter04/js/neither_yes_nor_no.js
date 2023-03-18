/*
"Neither yes, nor no" game
*/
    // WHILE

        // let word;

        while (word !== "yes" && word !== "no") {
            word = prompt("neither yes nor no").toLowerCase();
        }

    // FOR

        for (let i; i !== "yes" && i !== "no"; i = prompt("neither yes, nor no").toLowerCase());
