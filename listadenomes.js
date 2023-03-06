const listaDeNomes = {
    nomes: ['César', 'Eduardo', 'Gustavo']
}
let nomes = Object.values(listaDeNomes.nomes)
let maiorNome = 0;

for(let i in nomes) {
    if (nomes[1].length > maiorNome) {
        maiorNome = nomes[1];
    } 
}

console.log(maiorNome)
  

//console.log(Object.values(listaDeNomes.nomes))