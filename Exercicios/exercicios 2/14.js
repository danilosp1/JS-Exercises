const objetoParaArray = (obj) => {
    const newArray = new(Array)
    for(let i = 0; i < Object.keys(obj).length; i++){
        let valor = Object.keys(obj)[i]
        newArray.push([valor, obj[valor]])
    }
    return newArray
}

const objetoParaArray2 = (obj) => {
    const resultado = []

    for(let chave in obj){
        resultado.push([ chave, obj[chave] ])
    }
    return resultado
}

const objetoParaArray3 = (obj) => {
    const chaves = Object.keys(obj)
    const resultado = chaves.map( chave => [chave, obj[chave]] )

    return resultado
}

const objetoParaArray4 = (obj) => {
    return Object.entries(obj)
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))








