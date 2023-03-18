/*
Convert a temperature from Celsius to Fahrenheit degrees
*/

let celsiusDegrees = Number(prompt("Enter the Degrees in Celsius"))
let conversion = celsiusDegrees * (9/5) + 32

alert(`${celsiusDegrees} degrees celsius is ${conversion} degrees fahrenheit`)