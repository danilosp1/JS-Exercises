const pai = {
  nome: 'Pedro',
  corCabelo: 'Preto'
}

const filha1 = Object.create(pai) // define que o prototipo é o obj passado com parâmetro
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: false } // não aparece na listagem keys()
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(Object.keys(filha1.__proto__)) // encontro as keys do prototype

for(let key in filha2){
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`por herança: ${key}`)
}




