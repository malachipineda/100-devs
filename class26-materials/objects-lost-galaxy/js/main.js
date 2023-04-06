//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.shape = 'round'
pizza.topping1 = 'pepperoni'
pizza.cheesy = false
pizza.crust = 'thick'

pizza.pullApart = function() {
    console.log('Stuff falls off')
}
pizza.smell = function() {
    console.log('Smells like pizza')
}
pizza.taste = function() {
    console.log('Taste like pizza')
}
