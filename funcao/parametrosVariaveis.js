function soma(){ // passando argumentos sem considerar que eles existam
  let soma = 0
  for (i in arguments){
    soma += arguments[i]
  }
  return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(3, 5, 1, 4))
console.log(soma('a', 'b', 'c'))
console.log(soma(4, 2, 'teste', 3, 5))


