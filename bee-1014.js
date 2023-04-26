let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let dis = Number(lines[0])
let fuel = Number(lines[1])

let cons = dis / fuel
console.log(cons.toFixed(3) + ' km/l')
