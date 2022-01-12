function Pessoa(){
  this.idade = 0

  const self = this // faz isso ou usa o .bind
  setInterval(function(){
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000) // dispara função dentro de um intervalo passado
}

new Pessoa



