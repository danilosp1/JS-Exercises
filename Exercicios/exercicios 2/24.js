const contarCaractere = (caracter, texto) => {
    let contador = texto.split('').filter(x => x === caracter).length
    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))









