const listaDeCompras = {
    produtos: {
    'Feijão': 18,
    'Leite': 7,
    }
}

let feijao = listaDeCompras.produtos.Feijão
let leite = listaDeCompras.produtos.Leite
let soma = [feijao, leite]

for (let i in soma) {
    console.log(soma[i])
}


