const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio  1: Todos os alunos são bolsitas?

const bolsistas = alunos.map(a => a.bolsista).reduce(function(resultado,atual){
    if(atual && resultado){
        return true
    } else {
        return false
    }
}, true)
console.log(bolsistas)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(a => a.bolsista).reduce(function(resultado,atual){
    if(atual || resultado){
        return true
    } else {
        return false
    }
}, false)
console.log(algumBolsista)

// OU

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
