let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

var in1 = lines.shift().split(' ')
var in2 = lines.shift().split(' ')

var tot1 = Number(in1[1]) * Number(in1[2])
var tot2 = Number(in2[1]) * Number(in2[2])
let total = tot1 + tot2
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)

// 12 1 5.30
// 16 2 5.10
