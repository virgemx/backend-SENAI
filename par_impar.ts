import readline = require('readline-sync')
console.clear()
const numero:number = Number( readline.question("Digite um número: "))
let solucao:string = ""
if(numero % 2 == 0){
	solucao = "Par"
}else{
	solucao = "Ímpar"
}


console.log(`O número escolhido é ${solucao}`)



