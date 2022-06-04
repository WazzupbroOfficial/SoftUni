function yard(index) {
let price = Number (index[0] * 7.61)
let disc = Number (price * 0.18)
let final = Number (price - disc)
console.log(`The final price is: ${final} lv.`)
console.log(`The discount is: ${disc} lv.`)
}
yard([550])