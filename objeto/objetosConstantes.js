// pessoa -> 123 -> {...} aponta para o objeto de memória 123
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} vai tentar apontar pra um novo endereço
// pessoa = { nome: 'Ana' } //Gera um erro, pois é CONSTANTE

Object.freeze(pessoa) // congela o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)



