const pessoa = {
  saudacao: 'Bom dia!',
  falar(){
    console.log(this.saudacao) //sem esse this ele da erro
  }
}

pessoa.falar() // retorna 'Bom dia!'
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind passa um objeto no qual quer que seja resolvido o this.
falarDePessoa() // retorna corretamente



