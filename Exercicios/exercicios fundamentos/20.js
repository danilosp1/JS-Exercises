/* 
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function notas(valor){
  let valores = [[cem=0, 100], [cinq=0, 50], [dez=0, 10], [cinco=0, 5], [um=0, 1]]
  while(valor > 0){
    if(valor - 100 >= 0){
      valores[0][0]++
      valor -= 100      
    } else if (valor - 50 >= 0){
      valores[1][0]++
      valor -= 50
    } else if (valor - 10 >= 0){
      valores[2][0]++
      valor -= 10
    } else if (valor - 5 >= 0){
      valores[3][0]++
      valor -= 5
    } else if (valor - 1 >= 0){
      valores[4][0]++
      valor -= 1
    }
  }
  let usadas = valores.filter(value => value[0] != 0)
  let texto = ''
  for(i in usadas){
    texto = texto + `${usadas[i][0]} nota(s) de R$${usadas[i][1].toFixed(2)}. `
  }
  return texto
}

console.log(notas(73))
console.log(notas(18))
console.log(notas(25))













