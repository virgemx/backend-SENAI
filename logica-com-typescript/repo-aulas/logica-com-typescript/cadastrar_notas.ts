import readline = require('readline-sync')

// Limpar a tela
console.clear()

// Formulario de captura da informações
const nomeAluno:string = readline.question("Informe o nome do aluno: ")
const nota1:number = Number(readline.question("Informe a primeira nota: "))
const nota2:number = Number(readline.question("Informe a segunda nota: "))
const nota3:number = Number(readline.question("Informe a terceira nota: "))
const faltas:number = Number (readline.question("Informe a quantidade de faltas: "))
let situacao:string = ""

// A regra, media >= 7 aprovado, caso ao contrário, reprovado
// Quantidade de faltas menor que 5
// Recuperação média < 7 e >= 5 e falta < 3

const media = (nota1 + nota2 + nota3)/3

if (media >= 7 && faltas < 5) {
  situacao = "Aprovado"	
}else if(media >= 5 && media < 7 && faltas < 3){
  situacao = "Recuperação"
}else {
  situacao = "Reprovado"	
}

console.log(`Olá, ${nomeAluno}! Sua média é de ${media.toFixed(2)},suas faltas totalizam ${faltas} e sua situação é de ${situacao}`)


