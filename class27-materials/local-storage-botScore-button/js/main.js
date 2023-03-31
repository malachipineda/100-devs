//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
}


document.querySelector('button').addEventListener('click', addOne)

function addOne(){
    let botScoreVal = Number(localStorage.getItem('botScore')) 
    botScoreVal++
    localStorage.setItem('botScore', botScoreVal)
}