
const fs = require('fs')
const caminho = __dirname + '/dados.txt'

function lerArquivo(diretorio) {
    return new Promise(resolve => {
        fs.readFile(diretorio, (error, data) => {
            resolve(data.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)