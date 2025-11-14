let nome = 'yago', peso = 78, altura = 1.76;
imc = peso / (altura **2) 
if (imc <= 18.5){
    console.log(nome + ` seu peso esta a baixo do ideal seu imc é ` + imc)
}else if ( imc >= 18.6 && imc <= 24.9){
    console.log(nome + ` seu peso normal seu imc é ` + imc)
} else if ( imc >= 25 && imc <= 29.9){
    console.log(nome + ` você tem execesso de peso seu imc é ` + imc)
} else if ( imc >= 30 && imc <= 34.9){
    console.log(nome + ` você obesidade classe 1 seu imc é ` + imc)
} else if ( imc >= 35 && imc <= 39.9){
    console.log(nome + ` você obesidade classe 2 seu imc é ` + imc)
}else {
    console.log(nome + ` você obesidade classe 3 seu imc é ` + imc)
}