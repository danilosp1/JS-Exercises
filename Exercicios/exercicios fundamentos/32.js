/*
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaVetor(vetor){
  let soma = 0
  for(i in vetor){
    soma += vetor[i]
  }
  let media = soma/(vetor.length)
  return media
}

console.log(mediaVetor([10, 20, 12, 24, 7, 9]))







