//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', convert)

//get temperature value

function convert (){ 
    let temp = document.querySelector('#celcius').value


    document.querySelector('#placeToSee').innerText = temp * 9/5 + 32

}


//convert temperature

//display converted value