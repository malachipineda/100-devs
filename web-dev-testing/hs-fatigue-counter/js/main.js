
function fatigueCounter(health, armor, deckSize, shellfish){
    let totalHp = health + armor
    let drawTwo = 2
    let cardsToDraw = shellfish * drawTwo
    let fatigueDamage = 0
    let i = 1
    while (i < cardsToDraw) {
        if (deckSize > 0) {
            deckSize -= 1
            console.log(`Your deck size is now ${deckSize}`)
        } 
        if (deckSize <= 0) {
            fatigueDamage += 1
            console.log(`Fatigue damage is now ${fatigueDamage}`)
        }
        i++
    }
    if (totalHp <= 0) {
        return 'Oh dear, you are dead!'
    }
}

console.log(fatigueCounter(10, 10, 7, 8))


// function drawCards(deckSize, shellfish) {
//     let cardDraw = 2
//     if (deckSize > 0) {
//         for (let i = 0; i < shellfish; i++) {
//             deckSize -= cardDraw
//         }
//     }
//     return deckSize
// }

// console.log(drawCards(30, 15))