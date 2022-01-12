// fs = filesytem

// -> Forma universal... <-

const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// síncrono... (vai esperar ler arquivo pra continuar)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncro (passa erro e conteúdo)
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// -> Para JSON em específico <-

const config = require('./arquivo.json') // é possível passar direto JSON
console.log(config.db)

// -> Para ler uma pasta <-

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
