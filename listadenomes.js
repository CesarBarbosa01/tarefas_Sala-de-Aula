const listaDeNomes = {
    nomes: ['César', 'Eduardo', 'Gustavo']
}
let nomes = Object.values(listaDeNomes.nomes)
let maiorNome = 0;

for(let i in nomes) {
    if (nomes[i].length > maiorNome) {
        maiorNome = nomes[i];
    } 
}

console.log(maiorNome)
  

//console.log(Object.values(listaDeNomes.nomes))