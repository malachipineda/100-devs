//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


const h1Holder = document.querySelector('h1');
const result = document.getElementById("placeToSee");

h1Holder.addEventListener('click', ageChecker);

function ageChecker() {
    let age = document.querySelector('#danceDanceRevolution').value
    if (age < 16) {
        result.innerHTML = "You can't drive!"
    } else if (age < 18) {
        result.innerHTML = "You can't hate from outside the club, because you can't even get in!"
    } else if (age < 21) {
        result.innerHTML = "You can't drink!"
    } else if (age < 25) {
        result.innerHTML = "You can't rent cars affordably!"
    } else if (age < 30) {
        result.innerHTML = "You can't rent fancy cars affordably!"
    } else if (age > 30) {
        result.innerHTML = "You have nothing left to look forward to!"
    }
}



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

