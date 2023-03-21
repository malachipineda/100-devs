/*
Show the following day of the week
*/
let today = prompt("Enter the day of the week.").toLowerCase()
let tomorrow

if (today == "sunday"){
    tomorrow = "Monday"
} else if (today == "monday") {
    tomorrow = "Tuesday"
} else if (today == "tuesday") {
    tomorrow = "Wednesday"
} else if (today == "wednesday") {
    tomorrow = "Thursday"
} else if (today == "thursday") {
    tomorrow = "Friday"
} else if (today == "friday") {
    tomorrow = "Saturday"
} else if (today == "saturday") {
    tomorrow = "Sunday"
} else { 
    alert(`${today} is not a day of the week.`)
}

alert(`Tomorrow is ${tomorrow}`)