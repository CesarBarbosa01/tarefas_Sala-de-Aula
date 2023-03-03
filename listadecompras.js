const listaDeCompras = {
    produtos: {
    'Feijão': 18,
    'Leite': 7,
    }
}

const valores = Object.values(listaDeCompras.produtos)
let soma = 0

for (let i = 0; i < valores.length; i++) {
    soma = soma + valores[1];
}
console.log(soma)




