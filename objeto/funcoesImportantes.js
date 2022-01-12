const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // vai ser listado
  writable: false, // "congela" a variável apenas
  value: '01/01/2021'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // vai ter DataNascimento, pois enumerable = true

// Object.assign (ECMAScript 2015)
const dest = { a: 1 } // vai receber os atributos
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // "a" vai sobre-escrever
const obj = Object.assign(dest, o1, o2) // vai concatenar os atributos no destino

Object.freeze(obj)
obj.c = 1234

console.log(obj)
