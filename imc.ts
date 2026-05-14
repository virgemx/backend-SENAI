import readline = require('readline-sync')

// limpar a tela
console.clear()

//input
 const nome:string = readline.question("Informe seu nome: ")
 const peso:number = Number(readline.question("Informe seu peso: "))
 const altura:number = Number(readline.question("Informe sua altura: "))

 const imc = peso/(altura*altura)

 let classificacao:string = ""

 if(imc < 18.5){
	 classificacao = "Baixo peso"
}else if(imc >= 18.5 && imc < 25){
	classificacao = "Peso normal"
}else if(imc >= 25.0 && imc < 30){
	classificacao = "Excesso de peso"
}else if(imc >= 30.0 && imc < 35){
	classificacao = "Obesidade de Classe 1"
}else if(imc >= 35.0 && imc < 40){
	classificacao = "Obesidade de Classe 2"
}else if(imc >= 40.0){
	classificacao = "Obesidade de Classe 3"
}else{
  	classificacao = "Valor inválido"
}

 console.log(`Olá, ${nome}! Seu IMC está em ${imc.toFixed(1)} e sua classificação é ${classificacao}`)
