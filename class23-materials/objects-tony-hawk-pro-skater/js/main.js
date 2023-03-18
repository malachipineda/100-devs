//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function ProSkater(name, favSong, hairstyle, shoes) {
    this.name = name
    this.favSong = favSong
    this.hairstyle = hairstyle
    this.shoes = shoes
    this.kickflip = function() {
        alert('KICK FLIPPP!')
    }
    this.ollie = function() {
        alert('OLLIE')
    }
    this.threeSixty = function() {
        alert('360!!!!!!!!')
    }
}

let skaterBoi = new ProSkater('Skater Boi', 'Sk8er Boi', 'Skater Hair', 'Vans')