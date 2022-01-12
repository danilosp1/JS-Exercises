/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function verificaBissexto(ano){
  let verificar = analise(ano)
  if(verificar){
    return console.log(`O ano ${ano} é bissexto.`)
  } else {
    return console.log(`O ano ${ano} não é bissexto.`)
  }
}

function analise(ano){
  if(ano % 400 == 0){
    return true
  } else if (ano % 100 == 0){
    return false
  } else if (ano % 4 == 0){
    return true
  } else {
    return false
  }
}

verificaBissexto(2012)
verificaBissexto(2016)
verificaBissexto(2000)
verificaBissexto(4000)
verificaBissexto(300)
verificaBissexto(8)
verificaBissexto(2021)











