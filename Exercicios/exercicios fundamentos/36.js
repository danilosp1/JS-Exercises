/*
36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multi(vetor, fator){
  let newVec = []
  for(i in vetor){
    newVec.push(vetor[i]*fator)
  }
  return newVec
}

function multiCinco(vetor, fator){
  let newVec = []
  if(fator > 5){
    for(i in vetor){
      newVec.push(vetor[i]*fator)
    }
    return newVec
  }
  return `Não é possível.`
}

console.log(multiCinco([1, 6, 19, 2, 10, 12, 4], 4))
console.log(multiCinco([1, 6, 19, 2, 10, 12, 4], 7))
console.log(multi([1, 6, 19, 2, 10, 12, 4], 4))







