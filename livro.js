const livros = {
    "O hobbit": 0,
    "Senhor dos Anéis: A torre do rei": 30,
    "O iluminado": 20, 
}

for (let [livro, preco] of Object.entries(livros)) {
    if (preco === 0) {
        console.log(`O ${livro} é o que está sem valor`)
    } else {
        console.log("\n")
    }
}


