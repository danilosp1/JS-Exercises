// tagged template -> Processar templateString através de uma função

function tag(partes, ...valores) { // valores é o que foi interpolado ${}
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)


