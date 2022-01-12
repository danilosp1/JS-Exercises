// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa 
//se ele não encontrar, ele retorna o valor atribuído, ou undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa 
// não vai retornar "endereço", mas sim "logradouro", "numero" e "cep"
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa 
// vai dar erro, pois conta não existe (undefined), logo ag e num dão erro
// um dado pode não estar setado (retorna undefined), porém seu filho não (retorna erro)

