let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

let total = Number(lines[1]) + 0.15 * Number(lines[2])
console.log(`TOTAL = R$ ${total.toFixed(2)}`)
