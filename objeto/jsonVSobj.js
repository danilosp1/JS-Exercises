const obj = {a:1, b:2, c:3, soma() { return a + b + c } }

// JSON não entra função! É apenas um formato de dados
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a:1, b:2, c:3 }")) -> erro
// console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) -> erro

// precisa estar com aspas duplas!
console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'))
console.log(JSON.parse('{ "a":1.4, "b":"string", "c":true, "d": {}, "e":[] }'))


// console.log(JSON.parse('{ "a":1, "b":\'string\', "c":true, "d": {}, "e":[] }')) -> erro

// JSON.parse() transforma string json em objeto!







