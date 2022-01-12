/*
37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function pa(n, a1, r){
  for(let i = 1; i <= n; i++){
    let termo = a1 + (i - 1)*r
    console.log(`termo ${i}: ${termo}`)
  }
}

function pg(n, a1, r){
  for(let i = 1; i <= n; i++){
    let termo = a1*(r**(i-1))
    console.log(`termo ${i}: ${termo}`)
  }
}

pg(5, 4, 3)
console.log("")
pa(5, 4, 3)













