let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let totalSec = Number(lines[0])
let hour = Math.floor(Math.floor(totalSec / 60) / 60)
let min = Math.floor(Math.floor(totalSec / 60) % 60)
let sec = totalSec % 60

console.log(hour + ':' + min + ':' + sec)
