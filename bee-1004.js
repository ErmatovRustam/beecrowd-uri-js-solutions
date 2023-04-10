let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

function prodFinder(num1, num2) {
  return num1 * num2
}
console.log(`PROD = ${prodFinder(Number(lines[0]), Number(lines[1]))}`)
