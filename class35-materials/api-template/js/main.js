//Make an api request using async await

document.querySelector('button').addEventListener('click', getACuteDogPhoto)

async function getACuteDogPhoto(){
    try {
    const res = await fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
    const data = await res.json()
    console.log(data)
    document.querySelector('img').src = data.message
    }
    catch (error) {
        console.error(`Could not get doggo: ${error}`)
    } 
}
