import readline = require('readline-sync')
const numero:number = Number(readline.question("Qual o número? "))

for (let i=1;i<=10;i++){
	console.log(numero , " x " , i , " = " , i*numero)
}


