//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Llama extends Animal{
    constructor(name, quirk){
        super(name)
        this.quirk = quirk
    }
}
class Moose extends Animal{
    constructor(name, hasAntlers) {
        super(name)
        this.hasAntlers = hasAntlers
    }
}

let llamar = new Llama('Llamar', 'Likes to spit')
let moosey = new Moose('Moosey', true)

