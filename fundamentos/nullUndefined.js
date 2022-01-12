let valor //não inicializada
console.log(valor) //retorna undefined

// pode definir null quando quer que não aponte para nenhum lugar
valor = null // ausência de valor (não aponta para nenhum objeto na memória)
console.log(valor)
// console.log(valor.toString()) // ERRO!


// sempre use null quando quiser zerar o valor de uma variável

const produto = {}
console.log(produto.preco) //retorna undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) //retorna falso pois está com undefined
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // também será falso
console.log(produto)