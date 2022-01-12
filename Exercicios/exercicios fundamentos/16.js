/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas
*/

function calculadora(num1, operador, num2){
  switch(operador){
    case '+':
      return soma(num1, num2)
    case '-':
      return subtracao(num1, num2)
    case '*':
      return multiplicar(num1, num2)
    case '/':
      return divisao(num1, num2)
    default:
      return "Operação inválida."
  }
}

function soma(num1, num2){
  return num1 + num2
}
function subtracao(num1, num2){
  return num1 - num2
}
function multiplicar(num1, num2){
  return num1 * num2
}
function divisao(num1, num2){
  return num1 / num2
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 'n', 3))







