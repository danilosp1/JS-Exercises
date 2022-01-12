const saudacao = 'Opa' // contexto léxico 1

function exec(){
  const saudacao = 'Falaaaaa' // contexto léxico 2
  return saudacao // vai procurar no contexto mais próximo, se não achar, vai indo aos outros
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


