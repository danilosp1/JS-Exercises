// Object.preventExtensions -> evita adição de novos atributos em um objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))
produto.nome = "borracha"

// proxima linha não surte efeito
produto.descricao = 'Borracha escolar branca'


delete produto.tag
console.log(produto)

// Object.seal -> não é possível nem adicionar nem excluir elementos
const pessoa = {
    nome: 'Marcos',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes


