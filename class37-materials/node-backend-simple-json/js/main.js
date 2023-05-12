document.querySelector('#flipCoin').addEventListener('click', flipCoin)

async function flipCoin(){

  const userChoice = document.querySelector("#userChoice").value;
  const res = await fetch(`/api?coin=${userChoice}`.toLowerCase())
  const data = await res.json()

  console.log(data);
  document.querySelector("#flipResult").src = ''
  document.querySelector("#flipAnim").src = data.flipAnim
  setTimeout(() => {
    document.querySelector("#flipResult").src = data.coinImg
    document.querySelector("#flipAnim").src = ''
  }, 3000)
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}