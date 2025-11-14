let tempo = 12
let velocidade_media = 60
let litros_abastecidos = 44
let preco_etanol = 3.14
let preco_diesel = 6.10
let preco_gasolina = 6.17
let distancia = (velocidade_media * tempo)
let consumo_medio = (distancia / litros_abastecidos)
let preco_viagem_gasolina = (consumo_medio * preco_gasolina) 
let preco_viagem_diesel = (consumo_medio * preco_diesel) 
let preco_viagem_alcool = (consumo_medio * preco_etanol) 
console.log(`a distancia da viagem é ${distancia}KM`)
console.log(`o consumo da viagem em litros é de ${(consumo_medio).toLocaleString('pt-br',)} litros`)
console.log(`o que você gastou com gasolina foi ${(preco_viagem_gasolina).toLocaleString('pt-br',{style: 'currency', currency: 'brl'})}` )
console.log(`o que você gastou com diesel foi ${(preco_viagem_diesel).toLocaleString("pt-br",{style: 'currency', currency: 'brl'})}` )
console.log(`o que você gastou com alcool foi ${(preco_viagem_alcool).toLocaleString("pt-br",{style: 'currency', currency: 'brl'})}` )
