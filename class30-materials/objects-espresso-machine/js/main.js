//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor (make, model, color, coffee){
        this.make = make
        this.model = model
        this.color = color
        this.coffee = coffee
    }
        makeCoffee() {
            console.log('Coffee!')
        }

        addSugar() {
            console.log('Sugar!')
        }

        addMilk() {
            console.log('Milk!')
        }
}

let espresso = new EspressoMachine('subaru', 'impreza', 'red', 'robux')
