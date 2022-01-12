/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num){
  let resultado = 1
  for(let i = 2; i <= num; i++){
    resultado *= i
  }
  return console.log(`${num}! = ${resultado}`)
}

fatorial(3)
fatorial(10)
fatorial(5)

