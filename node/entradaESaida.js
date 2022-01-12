const os = require('os')

const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)
// digitar no console 'node entradaESaida.js -a'

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(`${os.EOL}`, '') // remove o enter que o usuário apertou
        // os.EOL -> quebra de linha, cada sistema operacional usa de um jeito, no windows é \r\n, no UNIX e MAC é \n
        
        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}
