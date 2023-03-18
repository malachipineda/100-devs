/*
Calculate VAT and final price
*/

let rawPrice = Number(prompt("Enter the price"))
const vatRate = 0.206
let finalPrice = rawPrice + (rawPrice * vatRate)

alert(`${"$"}${finalPrice}`)