function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // todos os objetos criados a partir de uma função construtora apontam para um mesmo protótipo

console.log(meuObjeto.prototype === obj1.__proto__)

// atribuir valor ao protótipo da função: qualquer objeto criado tera esse atributo
meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function(){
    console.log('Bom dia!')
}

console.log(obj1.nome)
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
console.log(obj3.nome)
obj3.falar()

// Resumindo
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // não é undefined, é nulo

// meu objeto -> meuobjeto.prototype -> function.prototype -> object.prototype







