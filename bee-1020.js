let input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let totalDays = Number(lines[0])
let year = Math.floor(totalDays / 365)
let month = Math.floor((totalDays - year * 365) / 30)
let day = totalDays - year * 365 - month * 30

console.log(year + ' ano(s)')
console.log(month + ' mes(es)')
console.log(day + ' dia(s)')
