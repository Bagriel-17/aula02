let nome = 'alonso'
let idade = 5
if(idade >= 18  ){
    console.log(nome + ' pode tirar carta')
} else {
    console.log(nome + ' não pode tirar carta')
}

let numero = 45678
if(numero %2 == 0){
    console.log('o numero ' + numero + ' é par.')
} else{
    console.log('o numero ' + numero + ' é impar.')
}

let number = -9
if(number > 0){
    console.log(number + ' numero é positivo')
} else {
    console.log(number + ' numero é negativo')
}

let numero1 = 9
let numero2 = 1
let numero3 = (numero2 + numero1) 
let numero4 = (numero3 /2)

console.log(numero4 + " é a media dos dois numeros") 
 
let v1 = 66
let v2 = 66
let v3 = (v1 - v2)
let v4 = (v2 - v1)
if (v1 > v2){
    console.log(v1 + " é maior que " + v2 + " resposta do calculo é " + v3)
} else if (v1 < v2){
    console.log(v1 + " é menor que " + v2 + " resposta do calculo é " + v4)
} else {
    console.log(" os dois valores " + v1 + " e " + v2 +  " são iguais o valor calculado é 0")
}