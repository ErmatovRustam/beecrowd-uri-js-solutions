let input = require('fs').readFileSync('./dev/stdin', 'utf8')
let lines = input.split('\n')

function averageFinder(num1, num2) {
  let averageNum1 = num1 * 3.5
  let averageNum2 = num2 * 7.5
  let sum = averageNum1 + averageNum2
  return (sum / 11).toFixed(5)
}
console.log(`MEDIA = ${averageFinder(Number(lines[0]), Number(lines[1]))}`)
