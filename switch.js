let user = "diretor";
user = user.toLowerCase(); //função q serve para converter qualquer letra em maiuscula(ou minuscula) do valor de acordo com a string do case.
switch(user) {
        case "comum":
            console.log(`Você é um usuário ${user}`);
            break;
        case "gerente":
            console.log(`Você é um usuário ${user}`);
            break;
        case "diretor":
            console.log(`Você é um usuário ${user}`);
            break;
        default: 
            console.log("Nenhum usuário encontrado.");
}