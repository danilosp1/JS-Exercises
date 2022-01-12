function getPreco(imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

console.log(getPreco()) // retorna NaN
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 } 

console.log(getPreco.call(carro)) // passa o carro como contexto da função
// no call pode passar exatamente as coisas que passaria na função também, assim:
console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro))
// no apply é possível passar os parâmetros por array, assim:
console.log(getPreco.apply(carro, [0.17, '$']))



