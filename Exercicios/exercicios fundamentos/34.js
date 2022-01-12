/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function palavras(palavra1, palavra2){
  let p1 = []
  let p2 = []
  for(i in palavra1){
    p1[i] = palavra1[i].toLowerCase()
  }
  for(i in palavra2){
    p2[i] = palavra2[i].toLowerCase()
  }
  p1 = p1.sort()
  p2 = p2.sort()
  let soma = 0
  for(i in p1){
    if(p1[i] == p2[i]){
      soma += 1
    }
  }
  if(p1.length == soma || p2.length == soma){
    return true
  } else {
    return false
  }
}

console.log(palavras('AKJSK', "KAJSK"))
console.log(palavras('Danilo', "Claudio"))
console.log(palavras('Danilo', "olinad"))
















