let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

var in1 = lines.shift().split(' ')
const PI = 3.14159
let vol = (4 / 3) * PI * in1 ** 3

console.log(`VOLUME = ${vol.toFixed(3)}`)

// 12 1 5.30
// 16 2 5.10
