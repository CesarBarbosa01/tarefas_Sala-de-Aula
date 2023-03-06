
function numeros (numero1) {
     let soma = 0
     for (let c = 0; c < numero1.length; c++) {
        soma = soma + numero1[c];
     }
     return soma
    }

let soma = numeros([100,2,3,4,5])
console.log(soma)

//quando declaremos funcções estamos dando um paramentro onde pode ser guardado qualquer coisa, de um array de varios numeros À uma string. Declaramos oq os valores depois de definir a logica

