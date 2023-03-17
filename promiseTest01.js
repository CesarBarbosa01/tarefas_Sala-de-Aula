function soma(n1, n2) {
    return new Promise((resolve, reject) => {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            reject('Os valores informados devem ser strings')
        } else {
            const result = n1 + n2
            resolve(`Os valores são Números, a soma deles é: ${result}.`)
        }
    })
}

soma(2, 3)
    .then(result => console.log(result))
    .catch(error => console.log(error))