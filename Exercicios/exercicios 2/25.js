const buscarPalavrasSemelhantes = (filtro, array) => {
    const filtrado = array.filter(x => x.indexOf(filtro) != -1)
    return filtrado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) )















