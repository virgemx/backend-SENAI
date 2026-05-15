const tela = require('readline-sync')
// perguntar o nome da pessoa
const nome:string = tela.question("Qual é o seu nome?")
const ano_nascimento:number = tela.question("Qual o seu ano de nascimento?")
const idade = 2026 - ano_nascimento

console.log("Olá "+nome+" a sua idade é; "+idade+" anos")



