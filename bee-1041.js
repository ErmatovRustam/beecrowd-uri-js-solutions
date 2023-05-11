var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')
let x = Number(lines[0])
let y = Number(lines[1])
let result = 'Origem'

if (x > 0 && y > 0) result = 'Q1'
if (x < 0 && y > 0) result = 'Q2'
if (x < 0 && y < 0) result = 'Q3'
if (x > 0 && y < 0) result = 'Q4'
if (x !== 0 && y === 0) result = 'Eixo X'
if (x === 0 && y !== 0) result = 'Eixo Y'
console.log(result)
