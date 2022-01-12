
function gerarNumerosEntre(min, max) {
    if(min > max) { [min, max] = [max, min] }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(11, 20)
    .then(num => num * 10)
    .then(numx10 => `O número gerado foi ${numx10}`)
    .then(console.log)
