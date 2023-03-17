function multiplicar(n1, n2) {
    const conta = n1 * n2
    callback(conta, n1, n2)
}

function somar(n1, n2) {
    const conta = n1 + n2
    callback1(conta, n1, n2)
}

function callback(conta, n1, n2){
    console.log(`A multiplicação entre os Números ${n1} e ${n2} é: ${conta}`)
}

function callback1(conta, n1, n2) {
    console.log(`A soma entre os Números ${n1} e ${n2} é: ${conta}`)
}

multiplicar(4, 20)
somar(4, 20)

