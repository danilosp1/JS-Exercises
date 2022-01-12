console.log(soma(3,4))
// console.log(sub(3,4)) // retorna erro, precisa chamar depois de declarar
// console.log(mult(3,4)) // retorna erro, precisa chamar depois de declarar

// function declaration
function soma(x, y){ // é carregada antes de tudo
  return x + y
}

// function expression
const sub = function(x,y){
  return x - y
}

// named function expression //  não é anonima, feita pra debugs
const mult = function mult(x, y){
  return x * y
}

