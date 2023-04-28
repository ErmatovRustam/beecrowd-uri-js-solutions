let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')
var x1y1 = lines[0].split(' ')
var x2y2 = lines[1].split(' ')

let x1 = Number(x1y1[0])
let y1 = Number(x1y1[1])
let x2 = Number(x2y2[0])
let y2 = Number(x2y2[1])

let dis = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(dis.toFixed(4))
