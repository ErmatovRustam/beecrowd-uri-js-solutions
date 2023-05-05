let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])
let sqrt = b * b - 4 * a * c
if (a === 0 || sqrt < 0) {
  console.log('Impossivel calcular')
} else {
  let r1 = (-b + Math.sqrt(sqrt)) / (2 * a)
  let r2 = (-b - Math.sqrt(sqrt)) / (2 * a)
  console.log('R1 = ' + r1.toFixed(5))
  console.log('R2 = ' + r2.toFixed(5))
}
