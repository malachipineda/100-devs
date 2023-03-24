//Create a constructor with 4 properties and 3 methods

function MakePizza(toppings, size, shape, crust){
    this.toppings = toppings,
    this.size = size,
    this.shape = shape,
    this.crust = crust,

    this.smell = function() {
        console.log('Smells like pizza')
    }

    this.taste = function() {
        console.log('Tastes like pizza')
    }

    this.deliveryTime = function() {
        console.log('Lightning Speed')
    }
}

let pizza = new MakePizza(['spinach', 'garlic'], 'large', 'square', 'thick')