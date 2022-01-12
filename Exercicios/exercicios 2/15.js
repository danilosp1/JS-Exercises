const receberSomenteOsParesDeIndicesPares = (lista) => {
    const novaLista = new(Array)
    for(let i in lista){
        if(lista[i] % 2 == 0 && i % 2 == 0){
            novaLista.push(lista[i])
        }
    }
    return novaLista
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))















