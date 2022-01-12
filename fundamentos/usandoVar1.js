{{{{ var sera = "Será???" }}}}
console.log(sera) // var fica visível fora de blocos, etc (escopo)

// var assume dois escopos possíveis = **global** ou **de função**

function teste(){
  var local = 123 // escopo é somente dentro da função
}

teste()
console.log(local)