let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

let num1 = Number(lines[0]) * 2
let num2 = Number(lines[1]) * 3
let num3 = Number(lines[2]) * 5

let average = (num1 + num2 + num3) / 10
console.log('MEDIA = ' + average.toFixed(1))
