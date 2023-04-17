let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

let salary = Number(lines[1]) * Number(lines[2])
console.log(`NUMBER = ${Number(lines[0])}`)
console.log(`SALARY = U$ ${salary.toFixed(2)}`)
