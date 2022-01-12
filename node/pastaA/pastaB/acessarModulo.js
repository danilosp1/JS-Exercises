// -> Puxando arquivo criado <-
const moduloA = require('../../moduloA')
console.log(moduloA.ola)


// -> Puxando módulo criado dentro do nodeModules <-
const saudacao = require('saudacoes') // módulo que eu criei 
console.log(saudacao.ola)


// -> Puxando index da pastaC <-
const c = require('./pastaC')
console.log(c.ola2)


// -> Puxando módulo http <-d
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // vai permanecer escutando na porta 8080
// ctrl + alt + n -> para o código em execução

// vai estar rodando em localhost:8080