function Pessoa(){
  this.idade = 0

  setInterval(() => { // arrow function ao inves de função literal, como no outro arquivo
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa