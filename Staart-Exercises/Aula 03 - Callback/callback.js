let pagarEmReais = [20, 50, 60 ,700 ,3]
let pagamentos = [2000, 500, 60, 8]
let cotação = 5
let pagarEmDolar = pagarEmReais.map((v) => v * cotação) //v foi o parametro usado na primeira função; map, método q cria um outro array

console.table(pagarEmDolar)
console.table(pagarEmReais)

let pagar = pagarEmReais.filter((valor) => valor > 30) // filter é usado para valores q atendem a uma consição, nesse caso, valor > 30
console.table(pagar)

let contasBaixas = pagarEmReais.every((v) => v = 20) //every testa se os valores do array estão de acordo com uma condição,retornando t ou f
console.log(contasBaixas)

let juntos = pagarEmReais.concat(pagamentos) //concat junta arrays usando o array como parametro
console.table(juntos)
