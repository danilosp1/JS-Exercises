/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function troca(vetor1, vetor2){
  [vetor1, vetor2] = [vetor2, vetor1]
  console.log(vetor1)
  console.log(vetor2)
}

troca([9, 1, 5, 2, 5], [8, 4, 1, 1, 5])








