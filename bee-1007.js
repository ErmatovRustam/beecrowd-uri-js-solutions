let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

let diff =
  Number(lines[0]) * Number(lines[1]) - Number(lines[2]) * Number(lines[3])
console.log(`DIFERENCA = ${diff}`)
