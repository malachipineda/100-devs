//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1.toLowerCase()
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2.toLowerCase()
  let pokeStore = []
  let pokeImg = []
  let info = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        info.push(data)

        document.querySelector('#pokeTypes1').innerText = `${info[0].name} has the following types:`
        //loop to list each type
        info[0].types.forEach(element => {
          const li = document.createElement('li')
          li.textContent = element.type.name
          document.querySelector('#pokeTypes1').appendChild(li)
        }) 

        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
          info.push(data)

          document.querySelector('#pokeImg1').src = pokeImg[0]
          document.querySelector('#pokeImg2').src = pokeImg[1]
      

          document.querySelector('#pokeTypes2').innerText = `${info[1].name } has the following types:`
          //loop to list each type
          info[1].types.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element.type.name
            document.querySelector('#pokeTypes2').appendChild(li)
          }) 
            
          
          console.log(info[0])
          console.log(info[1].name)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}
