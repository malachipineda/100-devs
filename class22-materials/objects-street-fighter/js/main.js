//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CharacterCreation(name, outfit, catchPhrase, specialAttack) {
    this.name = name,
    this.outfit = outfit,
    this.catchPhrase = catchPhrase,
    this.specialAttack = specialAttack
    this.lowKick = function() {
        alert('Low Kick!')
    }
    this.heavyPunch = function() {
        alert('Heavy Punch!')
    }
    this.useSpecialAttack = function (){
        alert(`${this.specialAttack}`)
    }
}

let ryu = new CharacterCreation('Ryu', 'White Gi with a black belt and a red head band', 'To live is to fight, to fight is to live!', 'Hadouken!')