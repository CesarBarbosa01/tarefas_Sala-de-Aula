// resolução dessa atividade em sala de aula.

const ano_nascimento = 2002;
let date = new Date();
let ano_atual = date.getFullYear();
let idade = ano_atual - ano_nascimento;
console.log(`Idade em anos: ${idade}`);
let idade_meses = idade * 12;
console.log(`Idade em meses: ${idade_meses}`)
let idade_semanas = idade * 52;
console.log(`idade em semanas: ${idade_semanas}`)
let idade_dias = idade * 365;
console.log(`Idade em dias: ${idade_dias}`);
