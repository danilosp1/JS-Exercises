// "promessa" -> resolvida ou rejeitada
// Operação assíncrona

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // frase do resolve vai ser passada no parâmetro do .then
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // ele vai passar aqui o reject(frase), se existir

