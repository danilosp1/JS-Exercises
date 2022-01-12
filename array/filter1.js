const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caros = produto => produto.preco >= 500
const frageis = produto => produto.fragil

console.log(produtos.filter(caros).filter(frageis))







