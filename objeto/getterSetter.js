const sequencia = {
  _valor: 1, // convenção
  get valor(){ 
    return this._valor++ 
  },
  set valor(valor){ 
    if(valor > this._valor){
      this._valor = valor 
    }
  }
}

console.log(sequencia.valor, sequencia.valor) // ele entende que quer ler o valor, ent chama o get
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // valor menor, não vai passar por causa do if
console.log(sequencia.valor, sequencia.valor)
