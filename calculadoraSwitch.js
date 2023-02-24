let operacao = "multiplicação";
let n1 = 10
let n2 = 10
    switch (operacao) {
        case "adição":
            console.log(`A soma entre ${n1} e ${n2} é:`, n1 + n2)
        break;
        case "subtração":
            console.log(`A subtração entre ${n1} e ${n2} é:`, n1 - n2)
        break;
        case "multiplicação":
            console.log( `A multiplicação entre ${n1} e ${n2} é:`, n1 * n2 )
        break;
        case "divisão":
            console.log( `A divisão entre ${n1} e ${n2} é:`, n1 / n2)
        break;
        default:
            console.log("Operação não identificada.")
        
    }

