let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let num = Number(lines[0])
let result = ''

if (num > 100 || num < 0) {
  result = 'Fora de intervalo'
} else if (num >= 0 && num <= 25) {
  result = 'Intervalo [0,25]'
} else if (num > 25 && num <= 50) {
  result = 'Intervalo (25,50]'
} else if (num > 50 && num <= 75) {
  result = 'Intervalo (50,75]'
} else if (num > 75 && num <= 100) {
  result = 'Intervalo (75,100]'
}

console.log(result)
