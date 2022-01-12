function tratarErro(erro){
  // throw new Error('...') // throw = lançar
  // throw 10
  // throw true
  throw 'Mensagem'
}

function imprimirNomeGritado(obj) {
  try{
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErro(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' } //o erro aqui (nome) é proposital
imprimirNomeGritado(obj)