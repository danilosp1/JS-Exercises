const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90
prod1['Desconto'] = 0.40

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
} // isso é diferente de um JSON (formato textual)

// JSON é assim:

// '{"nome": "Camisa Polo", "preco": 79.90}'

console.log(prod2)