let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

let sum = Number(lines[0]) + Number(lines[1])
console.log(`SOMA = ${sum}`)
