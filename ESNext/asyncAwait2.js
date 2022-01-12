// await fica sempre junto de funções que retornam promises

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) { [min, max] = [max, min] }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) { // serve só pra rodar a quantidade de vezes que precisamos
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros  
    } catch (e) {
        if(tentativas > 10){
            throw "Não deu certo"  // vai executar aqui ao inves do reject
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1) // repete essa função
        }
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

gerarMegaSena(16, 9) // vai tentar 2x só
    .then(console.log)
    .catch(console.log)
