
function gerarNumerosEntre(min, max, tempo) {
    if(min > max) { [min, max] = [max, min] }

    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

// util para acessar dados de clientes, por exemplo, fazendo em paralelo as requisições e retornar todas de uma vez
function gerarVariosNumeros() {
    return Promise.all([ // só vai executar quando TODAS as promises forem resolvidas
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 200),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })





