/*
Calculator
*/

// TODO: complete program

function calculate(num1, operator, num2) {
    let add = (num1 + num2);
    let subtract = (num1 - num2);
    let multiply = (num1 * num2);
    let divide = (num1 / num2);
    if (operator === "+") {
        return add
    } if (operator === "-") {
        return subtract
    } if (operator === "*") {
        return multiply
    } if (operator === "/") {
        return divide
    }
}

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity