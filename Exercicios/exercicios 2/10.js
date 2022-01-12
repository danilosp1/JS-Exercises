const simboloMais = (num) => {
    let simbolos = ''
    let sinais = Array(num).fill("+")
    for(let i = 0; i < sinais.length; i++){
        simbolos += sinais[i]
    }
    return simbolos
}

console.log(simboloMais(2))
console.log(simboloMais(4))










