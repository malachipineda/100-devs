//Create a dog object that has four properties and three methods

let dog = {}

dog.breed = 'German Shepherd'
dog.name = 'Cadence'
dog.color = 'White'
dog.cuteo = true
dog.bark = function dogBark(){ 
    alert('BARK!')
}

dog.eat = function dogEat() {
    alert('Chomp chomp!')
}

dog.trick = function sit(){
    alert('Dog sits down')
}
