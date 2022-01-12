
function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)


// callback hell
/* setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(function() {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000) */

