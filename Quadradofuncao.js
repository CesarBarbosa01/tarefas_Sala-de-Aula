function somaQuadradoPares (Numeros) {
    let soma = 0
    for (let n = 0; n < Numeros.length; n++ ) {
        if (Numeros%2 === 0) {
            soma *= Numeros[n]**2
            
        } 
    } return soma
}

let guardarnumeros = somaQuadradoPares([1, 2, 3, 4, 5, 6])
console.log(guardarnumeros)
//a soma dos quadrados dos numeros pares