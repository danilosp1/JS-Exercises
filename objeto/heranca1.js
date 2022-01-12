const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

// O objeto em javascript tem uma referência para o seu protótipo
// essa é a forma que JS define herança. A partir da referencia de um
// protótipo você tem a referência para outro objeto, e esse objeto tem
// atributos e comportamentos que podem ser acessados a partir do objeto
// filho. Vai percorrendo cadeia de prototipos até achar um atributo, através do __proto__

console.log(ferrari.__proto__) // verifica toda a cadeia de prototypos
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // o protorype do prototype aponta pra nulo

function MeuObjeto() {}
console.log(Object.prototype, MeuObjeto.prototype)

