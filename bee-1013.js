let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

let ab = (a + b + Math.abs(a - b)) / 2
let abc = (ab + c + Math.abs(ab - c)) / 2
console.log(abc + ' eh o maior')
