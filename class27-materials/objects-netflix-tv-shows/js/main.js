//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow{
    constructor(title, genre, rated, year){
        this.title = title
        this.genre = genre
        this.rated = rated
        this.year = year
    }
    intro() {
        alert('intro!')
    }
    themeSong() {
        alert('theme song!')
    }
    outro() {
        alert('outro!')
    }
}

let cowboyBebop = new NetflixShow('Cowboy Bebop', 'Cowboy Bebop', 'TV-MA', '2001')