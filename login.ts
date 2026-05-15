import readline = require('readline-sync')
console.clear()
let code:number = 12345

let tentativa:number = 3
for(let i=0;i<3;i++){
	const codigo:number = Number(readline.question("Informe o código de acesso: "))
	if(codigo==code){
		console.log("Acesso autorizado")
		break
	}else{
		tentativa--
		console.log(`Acesso negado, restam apenas ${tentativa} tentativas`)
	}
}
