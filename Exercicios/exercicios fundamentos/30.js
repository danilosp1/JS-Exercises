/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

function maiorMenor(vetor){
  let numeros = vetor.sort((a, b) => a < b ? 1 : -1)
  let maior = numeros[0]
  let menor = numeros[numeros.length - 1]

  return console.log(`Maior: ${maior}. Menor: ${menor}`)
}

maiorMenor([10, 25, 13, 994, 4, 2, 5, 29])












