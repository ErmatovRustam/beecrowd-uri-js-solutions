let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let totalMoney = Number(lines[0])
let $100 = Math.floor(totalMoney / 100)
let $50 = Math.floor((totalMoney - $100 * 100) / 50)
let $20 = Math.floor((totalMoney - $100 * 100 - $50 * 50) / 20)
let $10 = Math.floor((totalMoney - $100 * 100 - $50 * 50 - $20 * 20) / 10)
let $5 = Math.floor(
  (totalMoney - $100 * 100 - $50 * 50 - $20 * 20 - $10 * 10) / 5
)
let $2 = Math.floor(
  (totalMoney - $100 * 100 - $50 * 50 - $20 * 20 - $10 * 10 - $5 * 5) / 2
)

let coins = Number(lines[0].split('.')[1])
let c1 =
  Math.floor(totalMoney) -
  $100 * 100 -
  $50 * 50 -
  $20 * 20 -
  $10 * 10 -
  $5 * 5 -
  $2 * 2
let c50 = Math.floor(coins / 50)
let c25 = Math.floor((coins - c50 * 50) / 25)
let c10 = Math.floor((coins - c50 * 50 - c25 * 25) / 10)
let c05 = Math.floor((coins - c50 * 50 - c25 * 25 - c10 * 10) / 5)
let c01 = Math.floor(coins - c50 * 50 - c25 * 25 - c10 * 10 - c05 * 5)

console.log('NOTAS:')
console.log($100 + ` nota(s) de R$ 100.00`)
console.log($50 + ` nota(s) de R$ 50.00`)
console.log($20 + ` nota(s) de R$ 20.00`)
console.log($10 + ` nota(s) de R$ 10.00`)
console.log($5 + ` nota(s) de R$ 5.00`)
console.log($2 + ` nota(s) de R$ 2.00`)
console.log('MOEDAS:')
console.log(c1 + ` nota(s) de R$ 1.00`)
console.log(c50 + ` nota(s) de R$ 0.50`)
console.log(c25 + ` nota(s) de R$ 0.25`)
console.log(c10 + ` nota(s) de R$ 0.10`)
console.log(c05 + ` nota(s) de R$ 0.05`)
console.log(c01 + ` nota(s) de R$ 0.01`)
