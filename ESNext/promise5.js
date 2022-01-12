// criando condição que 50% de chance de dar certo e 50% de devolver erro
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{ // não é necessario o try/catch, mas é util caso receba entrada errada de algo
            // con.log(valor) -> isso acionaria o try/catch, pois está escrito errado 
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5) // 50% de chance de dar erro
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), // esta escrito errado = erro
        err => console.log(`Erro especifico: ${err}`) // nesse caso, mesmo tendo um catch, vai executar essa linha caso de erro
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro: ${err}`)) // trata a excessão
    .then(() => console.log('FIM aqui!')) // não vai ter valor para ser passado para esse then, então não tem como manipular nada
// caso os 50% retorne o erro, passa só pelo PRIMEIRO tratamento de erro (nesse caso, dentro do .then)



