let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

console.log(`X = ${Number(lines[0]) + Number(lines[1])}`)
