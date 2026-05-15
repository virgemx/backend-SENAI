import readline = require('readline-sync')
console.clear()
const numero01:number = Number(readline.question("Informe o primeiro número: "))
const numero02:number = Number(readline.question("Informe o segund número: "))
let resultado:number = 0
for(let i=numero01;i<=numero02;i++){
	resultado+=i
}
console.log(`A soma total é: ${resultado}`)

