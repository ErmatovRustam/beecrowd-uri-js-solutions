let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])
let d = Number(lines[3])

console.log(
  b > c && d > a && c + d > a + b && c >= 0 && d >= 0 && a % 2 === 0
    ? 'Valores aceitos'
    : 'Valores nao aceitos'
)
