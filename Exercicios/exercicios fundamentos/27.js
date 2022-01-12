/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function criancas(altura1, taxa1, altura2, taxa2){
  let tempo
  if(altura1 > altura2){
    if(taxa2 > taxa1){
      tempo = Math.floor((altura1 - altura2)/(taxa2 - taxa1))
    } else {
      return "A criança menor não irá ultrapassar a maior"
    }
  } else if (altura2 > altura1){
    if(taxa1 > taxa2){
      tempo = Math.floor((altura1 - altura2)/(taxa2 - taxa1))
    } else {
      return "A criança menor não irá ultrapassar a maior"
    }
  }
  return `A criança menor irá ultrapassar a maior em ${tempo} anos.`
}

console.log(criancas(100, 10, 120, 5))
console.log(criancas(120, 5, 100, 10))
console.log(criancas(120, 20, 100, 10))




