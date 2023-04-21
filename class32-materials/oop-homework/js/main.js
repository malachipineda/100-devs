// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Sushi{
    constructor(name, type, cooked){
        this._name = name
        this._type = type
        this._cooked = cooked
        this.sides = ['soy sauce', 'ginger', 'wasabi']
    }
    get name(){
        return this._name
    }
    get type(){
        return this._type
    }
    get cooked(){
        return this._cooked
    }

}
class Rolls extends Sushi{
    constructor(name, type, cooked, contents){
        super(name, type, cooked)
        this._contents = contents
    }
    get contents(){
        return this._contents
    }
    describe(){
        if (this._cooked === true) {
            console.log(`${this._name} is a ${this._type} roll, containing ${this._contents}, uses cooked fish, and a side of ${this.sides}`)
        } else {
            console.log(`${this._name} is a ${this._type} roll, containing ${this._contents}, uses raw fish, and has a side of ${this.sides}`)
        }
    }
    deepFried(){
        return `${this._name} deep fried!`
    }
}
class Sashimi extends Sushi{
    constructor(name, type, cooked, fishType){
        super(name, type, cooked)
        this._fishType = fishType
        this.sides = ['soy sauce']
    }
    describe(){
        if (this._cooked === true) {
            console.log(`${this._name} ${this._type} is thinnly sliced, cooked ${this._fishType} served with ${this.sides}`)
        } else {
            console.log(`${this._name} ${this._type} is thinnly sliced, raw ${this._fishType} served with ${this.sides}`)
        }
    }
}


let vegasRoll = new Rolls('Vegas Roll', 'Maki', true, ['salmon', 'avocado', 'cream cheese', 'rice'])
let salmonSashimi = new Sashimi('Salmon', 'Sashimi', false, 'Salmon')

let sushiTray = [vegasRoll, salmonSashimi]

for (sushi of sushiTray){
    sushi.describe()
}