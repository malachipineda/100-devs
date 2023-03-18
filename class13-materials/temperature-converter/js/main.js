//Write your pseduo code first! 
// Enter a value, assign it as either fareinheiht or celcius, click a button which runs the conversion formula of celcius to fareinheit

document.querySelector('#convert').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#celsius').value

    temp = temp * 9/5 + 32

    document.querySelector('#showConversion').innerText = temp 
}