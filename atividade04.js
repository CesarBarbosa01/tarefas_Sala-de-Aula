// resolução dessa atividade em sala de aula.

const ano_nascimento = 2002;
let date = new Date();
let ano_atual = date.getFullYear();
let idade = ano_atual - ano_nascimento;
console.log(idade);