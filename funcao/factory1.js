// função factory é uma função que retorna um objeto
// "fabrica" um objeto

// Factory simples
function criarPessoa(){
  return{
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())