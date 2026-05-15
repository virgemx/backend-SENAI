import readline = require('readline-sync')
console.clear()
const idade:number = Number(readline.question("Infome a sua idade: "))
 if(idade >= 18){
	console.log("Você é maior de idade")
}else{
	console.log("Você é menor de idade")
}


