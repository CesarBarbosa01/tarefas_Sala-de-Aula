//resolução em sala de aula

function mult(a, b, cb) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Error")
        } else {
            const result = a * b
            resolve(result)
        }
    })
        .then((result) => {
            cb(result)
            return result
        })
}

function soma(a, b, cb) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject("Error")
        } else {
            const result = a + b
            resolve(result)
        }
    })
        .then((result) => {
            cb(result)
            return result
        })
}

    function exibir(result) {
        console.log(`O resultado é ${result}`)
    }

    mult(5, 5, exibir)
    soma(5, 5, exibir)
    