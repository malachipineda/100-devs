//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.color = "pink"
mouse.size = "small"
mouse.brand = "benQ"
mouse.model = "Zowie"

mouse.leftClick = function() {
    alert('Left Click')
}
mouse.rightClick = function() {
    alert('Right Click')
}
mouse.scroll = function() {
    alert('Scroll')
}

console.log(mouse)