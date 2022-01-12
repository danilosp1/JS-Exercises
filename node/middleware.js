// middleware pattern (chain of responsibility) -> cadeia de responsabilidade
// ordem em que as coisas vão acontecer
// ctx = context -> objeto que vai sendo transmitido de uma função para outra (next)

const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next() // função passada no parâmetro
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// função exec, que recebe um conjunto de funções middlewares
const exec = (ctx, ...middlewares) => {
    // recursividade -> a função vai chamar ela mesma para executar todos os processos
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&    // verifica se middleware não está undefined e se está na length
            middlewares[indice](ctx, () => {execPasso(indice + 1)})  // executa a função do indice [indice], passando ctx e uma função que reexecuta
    }
    execPasso(0)
}

const ctx = {}

// ele vai executar na ordem que eu quiser as funções -> ordem passada
// lembrando, no "passo3", não existe o next(), logo ela não continuaria se fosse uma das primeiras passadas
exec(ctx, passo2, passo1, passo3)
console.log(ctx)


