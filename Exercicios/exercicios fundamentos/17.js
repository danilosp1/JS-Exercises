/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
  A     10%
  B     15%
  C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

function reajuste(plano, salarioAtual){
  let salarioAjustado
  switch(plano){
    case 'a':
      salarioAjustado = salarioAtual*1.1
      break
    case 'b':
      salarioAjustado = salarioAtual*1.15
      break
    case 'c':
      salarioAjustado = salarioAtual*1.2
      break
    default:
      return 'Dados inválidos'
  }
  return `Novo salário: R$${salarioAjustado.toFixed(2)}`
}

console.log(reajuste('a', 2000))
console.log(reajuste('b', 2000))
console.log(reajuste('c', 2000))
console.log(reajuste('d', 2000))










