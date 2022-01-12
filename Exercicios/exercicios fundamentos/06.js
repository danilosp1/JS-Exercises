/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capital, juros, tempo){ // tempo em anos e juros em anos
  let montante = (capital * juros * tempo) + capital
  return montante
}

function jurosCompostos(capital, juros, tempo){ // tempo em anos e juros em anos
  let montante = capital * Math.pow(1 + juros, tempo)
  return montante
}

console.log(jurosSimples(1000, 0.10, 12))
console.log(jurosCompostos(1000, 0.10, 12))







