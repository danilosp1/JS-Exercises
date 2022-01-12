/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

function negativos(vetor){
  let negativos = vetor.filter(a => a < 0)
  return console.log(`Quantidade de negativos: ${negativos.length}`)
}

negativos([10, 20, -5, -29, 4, -1827, 94])








