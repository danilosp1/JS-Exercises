function Pessoa(nome){
  this.nome = nome // se não usar o this, não é possível alterar o nome da variavel nome futuramente

  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('Danilo')
p1.falar()