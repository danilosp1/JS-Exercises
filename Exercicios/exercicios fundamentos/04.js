/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function dividir(x, y) {
  let div = x / y
  let resto = x % y
  return console.log(`Divisão: ${div}. Resto: ${resto}`)
}

dividir(10, 5)
dividir(7, 5)
dividir(12, 9)
