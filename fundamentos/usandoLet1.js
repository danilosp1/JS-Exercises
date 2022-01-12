var numero = 1
{
  let numero = 2
  console.log('dentro =', numero) //ele procura sempre no mesmo escopo primeiro (escopo menor)
}
console.log('fora =', numero)

// let possui escopo global, de função e de bloco!