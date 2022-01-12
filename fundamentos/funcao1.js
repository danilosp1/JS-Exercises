// Função sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // b recebe undefined, então retorna NaN
imprimirSoma(2, 3, 4, 5) // pega só os dois primeiros, e o resto ignora
imprimirSoma() // ambos recebem undefined

// Função com retorno
function soma(a, b = 0){
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())