// Função em JS é First-Class Object (Citizens)
// Higher-order function
// ou seja, função é tratada como dado, pode usar como parametro, resposta de função, variável, etc

// Criar de forma literal // não pode tirar o { }
function fun1() { } // toda função literal retorna pelo menos undefined

// Armazenar em uma variável // se passar o nomeConstante(), você invoca a função
const fun2 = function() { } // função anonima

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // () invoca função

// Passar função como parâmetro
function run(fun) {
  fun() // () invoca
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b){
  return function (c){
    console.log(a + b + c)
  }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)


