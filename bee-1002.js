let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let area = Number(lines[0]) * Number(lines[0]) * 3.14159
console.log(`A=${area.toFixed(4)}`)
