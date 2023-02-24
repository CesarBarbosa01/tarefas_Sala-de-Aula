let n1,n2,operacao = 0;
let opcao = 4

switch(opcao) {
    case 1: 
        n1 = 1;
        n2 = 2;
        operacao = n1 + n2; 
        console.log(`A soma é de ${operacao}`);
    break;
    case 2: 
        n1 = 1;
        n2 = 2;
        operacao = n1 - n2; 
        console.log(`A subtração é de ${operacao}`);
    break;
    case 3: 
        n1 = 1;
        n2 = 2;
        operacao = n1 * n2; 
        console.log(`A multiplicação é de ${operacao}`);
    break;
    case 4: 
        n1 = 1;
        n2 = 2;
        operacao = n1 / n2; 
        console.log(`A divisão é de ${operacao}`);
    break;
    default:
}