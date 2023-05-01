let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let cash = Number(lines[0])
let b100 = Math.floor(cash / 100)
let b50 = Math.floor((cash - b100 * 100) / 50)
let b20 = Math.floor((cash - b100 * 100 - b50 * 50) / 20)
let b10 = Math.floor((cash - b100 * 100 - b50 * 50 - b20 * 20) / 10)
let b05 = Math.floor((cash - b100 * 100 - b50 * 50 - b20 * 20 - b10 * 10) / 5)
let b02 = Math.floor(
  (cash - b100 * 100 - b50 * 50 - b20 * 20 - b10 * 10 - b05 * 5) / 2
)
let b01 = Math.floor(
  cash - b100 * 100 - b50 * 50 - b20 * 20 - b10 * 10 - b05 * 5 - b02 * 2
)

console.log(cash)
console.log(b100 + ` nota(s) de R$ 100,00`)
console.log(b50 + ` nota(s) de R$ 50,00`)
console.log(b20 + ` nota(s) de R$ 20,00`)
console.log(b10 + ` nota(s) de R$ 10,00`)
console.log(b05 + ` nota(s) de R$ 5,00`)
console.log(b02 + ` nota(s) de R$ 2,00`)
console.log(b01 + ` nota(s) de R$ 1,00`)
