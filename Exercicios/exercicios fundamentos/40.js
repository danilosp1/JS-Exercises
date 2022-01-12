/*
40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.
*/

function notas(){
  let notasAtribuidas = []
  let atribuicao = []
  for(i in arguments){
    notasAtribuidas[i] = arguments[i]
    if(arguments[i] >= 0 && arguments[i] <= 4.9){
      atribuicao[i] = 'D'
    } else if (arguments[i] >= 5 && arguments[i] <= 6.9){
      atribuicao[i] = 'C'
    } else if (arguments[i] >= 7 && arguments[i] <= 8.9){
      atribuicao[i] = 'B'
    } else {
      atribuicao[i] = 'A'
    }
  }
  for(i in notasAtribuidas){
    console.log(`Nota ${notasAtribuidas[i]}: ${atribuicao[i]}`)
  }
}

notas(10, 8, 1, 5, 4, 9, 3)










