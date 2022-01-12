/* 
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function valorAnuidade(mes, valor){
  let valorFinal = valor * (1.05)**(mes-1)
  return valorFinal
}

console.log(valorAnuidade(1, 1000))
console.log(valorAnuidade(2, 1000))
console.log(valorAnuidade(3, 1000))
console.log(valorAnuidade(4, 1000))
console.log(valorAnuidade(5, 1000))













