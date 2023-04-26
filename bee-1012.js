let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split(' ')
var num1 = Number(lines.shift())
var num2 = Number(lines.shift())
var num3 = Number(lines.shift())
const PI = 3.14159

var areaTri = (num1 * num3) / 2
var areaCir = PI * num3 * num3
var areaTrap = ((num1 + num2) / 2) * num3
var areaSq = Math.pow(num2, 2)
var areaRec = num1 * num2

console.log(`TRIANGULO: ${areaTri.toFixed(3)}`)
console.log(`CIRCULO: ${areaCir.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTrap.toFixed(3)}`)
console.log(`QUADRADO: ${areaSq.toFixed(3)}`)
console.log(`RETANGULO: ${areaRec.toFixed(3)}`)