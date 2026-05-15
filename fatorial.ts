import readline = require('readline-sync')
console.clear()
const numero:number = Number (readline.question("Informe o número: "))
let resultado:number = 1
for(let i=1;i<=numero;i++){
	resultado*=i
}
console.log(`O resultado é ${resultado}`)

