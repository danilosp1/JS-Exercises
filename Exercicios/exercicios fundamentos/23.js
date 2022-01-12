/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function aluno(cod, nota1, nota2, nota3){
  let notas = [nota1, nota2, nota3].sort((a, b) => a < b ? 1 : -1)
  let media = ((notas[0]*4) + 3*(notas[1] + notas[2]))/10
  let retorno = `Aluno: ${cod}. Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}. Média: ${media}. Situação: `
  if(media >= 5){
    return retorno + 'Aprovado'
  } else {
    return retorno + 'Reprovado'
  }
}

console.log(aluno(2993, 8, 10, 2))









