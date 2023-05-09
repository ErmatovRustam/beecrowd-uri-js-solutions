var input = require('fs').readFileSync('./dev/stdin', 'utf8')
var lines = input.split('\n')

let scores = lines[0].split(' ')
let exam = Number(lines[1])
let g1 = Number(scores[0])
let g2 = Number(scores[1])
let g3 = Number(scores[2])
let g4 = Number(scores[3])

let media = (g1 * 2 + g2 * 3 + g3 * 4 + g4) / 10
console.log('Media: ' + media.toFixed(1))
if (media < 5) console.log('Aluno reprovado.')
if (media >= 7) console.log('Aluno aprovado.')
if (media >= 5 && media < 7) {
  let mediaFin = (exam + media) / 2
  console.log('Aluno em exame.')
  console.log('Nota do exame: ' + lines[1])
  mediaFin >= 5
    ? console.log('Aluno aprovado.')
    : console.log('Aluno reprovado.')
  console.log('Media final: ' + mediaFin.toFixed(1))
}
