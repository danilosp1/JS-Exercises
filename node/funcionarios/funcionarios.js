const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

// axios é um cliente http -> faz requisições para obter informações de algo que está remoto
const axios = require('axios')

// obtendo conteúdo da url
axios.get(url).then(response => {
    const funcionarios = response.data
})


// Obtenha a mulher chinesa com menor salário
const getWoman = (x) => x.genero == 'F' && x.pais == 'China' ? true : false


axios.get(url).then(response => {
    const funcionarios = response.data
    const menorChinesacomSalario = funcionarios.filter(x => getWoman(x)).reduce((acumulador, atual) => {
        if(atual.salario < acumulador.salario){
            return acumulador = atual
        }
        return acumulador
    })
    console.log(menorChinesacomSalario)
})


// -> Resolução da aula <- //
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})

