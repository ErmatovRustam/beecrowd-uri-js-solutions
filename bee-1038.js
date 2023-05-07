var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split(' ')

let code = [4, 4.5, 5, 2, 1.5]

let unit = Number(lines[0])
let quantity = Number(lines[1])
let cost = quantity * code[unit - 1]
console.log('Total: R$ ' + cost.toFixed(2))
