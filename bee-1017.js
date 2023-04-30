let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let time = Number(lines[0])
let speed = Number(lines[1])

let totalDis = time * speed
let fuel = totalDis / 12

console.log(fuel.toFixed(3))
