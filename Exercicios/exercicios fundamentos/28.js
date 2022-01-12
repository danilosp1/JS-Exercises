/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function quantidade(vetor){
  let pares = vetor.filter(a => a % 2 == 0)
  let impares = vetor.filter(a => a % 2 == 1)

  return `Pares: ${pares.length}. Impares: ${impares.length}`
}


console.log(quantidade([1, 5, 3, 2, 4, 1, 9, 22]))








