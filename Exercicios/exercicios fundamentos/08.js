/*
08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todos as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function jogos(lista){
  lista = lista.split(' ')
  let recordes = 0
  let piorPontuacao
  for(let i in lista){
    if(i != 0){
      let cont = 0
      for(let j = 0; j < i; j++){
        if(parseInt(lista[j]) < parseInt(lista[i])){
          cont++
        }
        if(cont == i - 1){
          recordes++
          break
        } else if (cont == 0 && j == i-1) {
          piorPontuacao = parseInt(i) + 1
        }
      }
    }
  }
  retorno = [recordes, piorPontuacao]
  return retorno
}

let desempenho = jogos('10 20 20 8 25 3 0 30 1')
console.log(desempenho)






