let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

console.log(lines[0] * 2 + ' minutos')
